import React, { useState, useContext, useEffect } from 'react';
import { Text, KeyboardAvoidingView } from 'react-native';
import { Info, Output, Input } from '../../components';
import { NotesContext } from '../../contexts/NotesContext';
import { lethaiApi } from '../../services';
import ColorPalette from '../../global/ColorPalette';
import styles from './style';
import commands from '../../global/Commands';

const NoteScreen = ({ navigation, route }) => {

  const stateAux = {
    ok: 'ok',
    error: 'error',
    deleted: 'warning',
    success: 'ok'
  }

  const notesContext = useContext(NotesContext);

  const [editing, setEditing] = useState(route.params.new);
  const [info, setInfo] = useState('');
  const [pageState, setPageState] = useState('ok');
  const [note, setNote] = useState(() => {
    if (!route.params.new) {
      return notesContext.state.notes.find((note) => note.id === route.params.id)
    } else {
      return { id: null, title: route.params.title, content: route.params.content }
    }
  })
  const [noteBkp, setNoteBkp] = useState(() => {
    const noteTemp = Object.assign({}, note);
    return noteTemp;
  })
  const [noteContent, setNoteContent] = useState({ type: 'text', content: note.content })

  useEffect(() => {
    switch (pageState) {
      case 'ok':
        setInfo(lethaiApi.getNoteHelper());
        if (!editing) {
          setNoteContent({ type: 'text', content: note.content })
        }
        break;
      case 'error':
        setInfo(lethaiApi.getInputError());
        break;
      case 'deleted':
        setInfo(lethaiApi.getNoteDeleted());
        break;
      case 'success':
        setInfo(lethaiApi.getNoteSuccess());
        break;
      default:
        setPageState('ok');
    }
    if (pageState === 'deleted') {
      const msg = note.id !== null && note.id !== undefined ?
        'Note deleted. Going back to Home Screen' :
        'Note canceled. Going back to Home Screen';
      setNoteContent({ type: 'text', content: msg })
      setTimeout(() => {
        setPageState('ok');
        navigation.goBack();
      }, 5000)
    }
    if (pageState === 'success') {
      setTimeout(() => {
        setPageState('ok');
      }, 5000)
    }
    if (pageState !== 'ok' && pageState !== 'deleted') {
      setTimeout(() => {
        setPageState('ok')
      }, 7000)
    }
  }, [pageState])

  const handleCommands = (command) => {
    if (!command) {
      return;
    }
    command = command.trim();
    const commandChunks = command.split(' ');
    commandChunks[0] = commandChunks[0].toLowerCase();
    
    let error = '';
    
    switch (commandChunks[0]) {
      case 'edit':
        if (commandChunks.length > 1) {
          error = "This command doesn't accept arguments."
        } else {
          setEditing(true);
          setPageState('ok');
        }
        break;

      case 'show':
        if (commandChunks.length > 1) {
          error = "This command doesn't accept arguments."
        } else {
          setEditing(false);
          setNoteContent({ type: 'text', content: note.content });
          setPageState('ok');
        }
        break;

      case 'clear':
        
        if (commandChunks.length > 1) {
          error = "This command doesn't accept arguments."
        } else {
          if (!editing) {
            break;
          }
          setNote((prev) => {
            return { ...prev, content: '' };
          })
          setEditing(true);
        }
        break;

      case 'title':
        let titleTemp = '';
        if (commandChunks.length === 1) {
          titleTemp = noteBkp.title;
        } else {
          let chunksTemp = [];
          commandChunks.forEach((c, i) => {
            if (i !== 0) {
              chunksTemp.push(c);
            }
          })

          titleTemp = chunksTemp.join(' ');
        }
        setNote((prev) => {
          return { ...prev, title: titleTemp }
        })
        setPageState('ok');
        break;

      case 'reset':
        if (commandChunks.length > 1) {
          error = "This command doesn't accept arguments."
        } else {
          const noteTemp = Object.assign({}, noteBkp);
          setEditing(false);
          setNote(noteTemp);
          setNoteContent({ type: 'text', content: note.content })
          setPageState('ok');
        }
        break;

      case 'save':
        if (commandChunks.length > 1) {
          error = "This command doesn't accept arguments."
        } else {
          setEditing(false);
          const noteTempSave = Object.assign({}, note);
          setNoteBkp(noteTempSave);
          if (note.id !== null && note.id !== undefined) {
            notesContext.replaceNote(note);
          } else {
            notesContext.addNote(note);
          }
          setNoteContent({ type: 'text', content: note.content })
          setPageState('success');
          
        }
        break;

      case 'rm':
        if (commandChunks.length > 1) {
          error = "This command doesn't accept arguments."
          break;
        } else {
          if (note.id === null || note.id === undefined) {
            setEditing(false);
          } else {
            setEditing(false);
            notesContext.deleteNote(note.id);
          }
          setPageState('deleted');
        }
        break;

      case 'help':
        let helpText = '';
        commands.note.forEach(command => {
          helpText += `$ ${command.comm}\n${command.desc} \n  \n`;
        })
        setEditing(false);
        setNoteContent({ type: 'text', content: helpText });
        setPageState('ok');
        break;

      default:
        error = 'Invalid command.';
    }
    if (error) {
      setEditing(false)
      setNoteContent({ type: 'text', content: error });
      setPageState('error');
    }
  }

  const handleInputContent = (content) => {
    setNote((prev) => {
      return { ...prev, content }
    })
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={(Platform.OS === 'ios') ? "padding" : null} enabled
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 60 })}
    >
      {
        !editing && <Info
          key={info}
          label={'INFO'}
          inputState={stateAux[pageState] || 'ok'}
          content={info}
        />
      }
      
      <Text
        numberOfLines={1}
        style={{ ...styles.text, color: ColorPalette.fg02 }}
      >
        {note.title}
      </Text>
      {
        !editing && <Output
          key={noteContent}
          label={'CONTENT'}
          type={noteContent.type || 'text'}
          content={noteContent.content || ''}
          itemId='id'
          itemName='title'
        />
      }

      {
        editing && <Input
          label={'CONTENT (EDITING)'}
          placeholder={`Type the note's content`}
          initialValue={note.content}
          warn={true}
          multiline={true}
          onInput={handleInputContent}
        />
      }

      <Input
        label={'COMMAND INPUT'}
        placeholder={'Type your commands here'}
        initialValue=''
        multiline={false}
        onSubmit={handleCommands}
      />

    </KeyboardAvoidingView>
  )
}

export default NoteScreen;