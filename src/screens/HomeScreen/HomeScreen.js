import React, { useState, useContext, useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import styles from './style';
import { Info, Output, Input } from '../../components';
import { NotesContext } from '../../contexts/NotesContext';
import { lethaiApi } from '../../services';
import notesRandomizer from '../../global/NotesRandomizer';
import commands from '../../global/Commands';

const HomeScreen = ({ navigation }) => {

  const stateAux = {
    ok: 'ok',
    error: 'error',
    deleted: 'warning',
  }

  const notesContext = useContext(NotesContext);

  const [homeContent, setHomeContent] = useState({ type: 'blank', content: null })
  const [info, setInfo] = useState();
  const [pageState, setPageState] = useState('ok');

  useEffect(() => {
    let timeout = null;
    switch (pageState) {
      case 'ok':
        setInfo(lethaiApi.getGlobalHelper());
        break;
      case 'error':
        setInfo(lethaiApi.getInputError());
        break;
      case 'deleted':
        setInfo(lethaiApi.getNoteDeleted());
        break;
      default:
        setPageState('ok')
        break;
    }
    if (pageState !== 'ok') {
      timeout = setTimeout(() => {
        setPageState(() => 'ok')
      }, 7000)
    }
    return(() => {
      clearTimeout(timeout);
    })
  }, [pageState])

  const handleCommands = (command) => {
    if (!command) {
      return;
    }
    command = command.trim();
    const commandChunks = command.split(' ');
    commandChunks[0] = commandChunks[0].toLowerCase();

    let error = '';
    let idNote = null;
    let noteFind = null;
    switch (commandChunks[0]) {
      case 'list':
        if (commandChunks.length > 1) {
          error = "This command doesn't accept arguments."
        } else {
          setHomeContent({ type: 'list', content: notesContext.state.notes });
          setPageState('ok');
        }
        break;

      case 'new':
        let titleTemp = '';
        let contentTemp = '';
        if (commandChunks.length > 1) {
          let chunksTemp = [];
          commandChunks.forEach((c, i) => {
            if (i !== 0) {
              chunksTemp.push(c);
            }
          })
          titleTemp = chunksTemp.join(' ');
        } else {
          const idTitle = Math.floor(Math.random() * Object.keys(notesRandomizer.title).length - 0.1);
          titleTemp = notesRandomizer.title[idTitle];
        }
        const idContent = Math.floor(Math.random() * Object.keys(notesRandomizer.content).length - 0.1);
        contentTemp = notesRandomizer.content[idContent];

        navigation.navigate(
          'NoteScreen',
          { id: null, title: titleTemp, content: contentTemp, new: true }
        )
        break;

      case 'note':
        if (commandChunks.length < 2) {
          error = 'You need to pass the note ID as an argument to access a note.';
          break;
        }

        if (!notesContext.state.notes || !notesContext.state.notes.length) {
          error = "There aren't any notes. Try creating one first."
          break;
        }

        idNote = commandChunks[1];

        if (idNote.match(/[a-zA-Z]/)) {
          error = 'The ID typed is not a valid value';
          break;
        }
        idNote = parseInt(idNote);

        noteFind = notesContext.state.notes.find(note => note.id === idNote);
        if (!noteFind) {
          error = 'The ID typed was not found in any notes.';
          break;
        }
        navigation.navigate(
          'NoteScreen',
          { id: idNote, title: null, content: null, new: false }
        )
        break;

      case 'rm':
        if (commandChunks.length < 2) {
          error = 'You need to pass the note ID as an argument to delete a note.';
          break;
        }

        if (!notesContext.state.notes || !notesContext.state.notes.length) {
          error = "There aren't any notes. Try creating one first."
          break;
        }

        idNote = commandChunks[1];

        if (idNote.match(/[a-zA-Z]/)) {
          error = 'The ID typed is not a valid value';
          break;
        }
        idNote = parseInt(idNote);

        noteFind = notesContext.state.notes.find(note => note.id === idNote);
        if (!noteFind) {
          error = 'The ID typed was not found in any notes.';
          break;
        }
        notesContext.deleteNote(noteFind.id);
        setPageState('deleted');
        break;

      case 'rmall':
        if (commandChunks.length > 1) {
          error = "This command doesn't accept arguments."
          break;
        } else if (!notesContext.state.notes || !notesContext.state.notes.length) {
          error = "There aren't any notes. Try creating one first."
        } else {
          notesContext.deleteAll();
          setPageState('deleted');
          setHomeContent({ type: 'text', content: 'All notes deleted' })
        }
        break;

      case 'help':
        let helpText = '';
        commands.global.forEach(command => {
          helpText += `$ ${command.comm}\n${command.desc} \n  \n`;
        })
        setHomeContent({ type: 'text', content: helpText });
        setPageState('ok');
        break;

      default:
        error = 'Invalid command.';
    }
    if (error) {
      setHomeContent({ type: 'text', content: error });
      setPageState('error');
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={(Platform.OS === 'ios') ? "padding" : null} enabled
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 60 })}
    >

      <Info
        key={info}
        label={'INFO'}
        inputState={stateAux[pageState] || 'ok'}
        content={info}
      />
      <Output
        key={homeContent}
        label={'OUTPUT'}
        type={homeContent.type || 'none'}
        content={homeContent.content || ''}
        itemId='id'
        itemName='title'
      />
      <Input
        label={'COMMAND INPUT'}
        placeholder={'Type your commands here'}
        initialValue=''
        warn={false}
        multiline={false}
        onSubmit={handleCommands}
      />

    </KeyboardAvoidingView>
  )
}

export default HomeScreen;