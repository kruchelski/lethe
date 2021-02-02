import React, { useState } from 'react';
import { Text, KeyboardAvoidingView } from 'react-native';
import styles from './style';
import { Info, Output, Input } from '../../components';
import ColorPalette  from '../../global/ColorPalette';

const NoteScreen = ({ navigation, route }) => {

  const notesMock = [
    { id: 0, title: 'This is the note 1', content: 'This is a note taken to serve as a mock stuff.', date: '01/01/2021 15:00' },
    { id: 1, title: 'This is the note 2', content: 'This is a note taken to serve as a mock stuff blablabla.', date: '01/01/2021 16:00' },
    { id: 2, title: 'This is a note that have a loooong title and is expected to not wrap to the next line', content: 'This is a note taken to serve as a mock stuff kind of long text.', date: '02/01/2021 17:00' },
    { id: 3, title: 'Blumba blumba', content: 'Blublublu', date: '02/01/2021 18:00' },
    { id: 4, title: 'Miau', content: 'Miau miua miau.', date: '02/01/2021 19:00' },
  ]

  const [editing, setEditing] = useState(false);
  const [note, setNote] = useState(() => {
    return notesMock.find((note) => note.id === route.params.id)
  })
  
  const handleInputTitle = (title) => {
    console.log('This is the title inside NoteScreen');
    console.log(title);
  }

  const handleInputContent = (content) => {
    console.log('THis is the content inside NoteScreen');
    console.log(content);
  }

  const handleCommands = (command) => {
    console.log('This is the command inside NoteScreen');
    console.log(command);
    if (command.toLowerCase() === 'edit') {
      setEditing(true);
    }
    if (command.toLowerCase() === 'save') {
      setEditing(false);
    }
  }
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={(Platform.OS === 'ios') ? "padding" : null} enabled
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 60 })}
    >
      {
        !editing && <Info label={ 'INFO' } context={ 'note' } />

      }
      <Text
      numberOfLines={1}
        style={{ ...styles.text, color: ColorPalette.fg02 }}
      >
        { note.title }
      </Text>
      {
        !editing && <Output
        label={ 'CONTENT' }
        type='text'
        content={ note.content }
        />
      }

      {
        editing && <Input
          label={ 'CONTENT (EDITING)' }
          placeholder={ `Type the note's content` }
          initialValue=''
          warn = { true }
          multiline={ true }
          onSubmit={ handleInputContent }
        />
      }

      <Input
        label={ 'COMMAND INPUT' }
        placeholder={ 'Type your commands here' }
        initialValue=''
        multiline={ false }
        onSubmit={ handleCommands }
      />

    </KeyboardAvoidingView>
  )
}

export default NoteScreen;