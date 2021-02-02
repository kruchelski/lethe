import React, { useState } from 'react';
import { Text, KeyboardAvoidingView } from 'react-native';
import styles from './style';
import { Info, Output, Input } from '../../components';

const HomeScreen = ({ navigation }) => {
  const [homeContent, setHomeContent] = useState({ type: 'blank', content: null })

  const notesMock = [
    { id: 0, title: 'This is the note 1', content: 'This is a note taken to serve as a mock stuff.', date: '01/01/2021 15:00' },
    { id: 1, title: 'This is the note 2', content: 'This is a note taken to serve as a mock stuff blablabla.', date: '01/01/2021 16:00' },
    { id: 2, title: 'This is a note that have a loooong title and is expected to not wrap to the next line', content: 'This is a note taken to serve as a mock stuff kind of long text.', date: '02/01/2021 17:00' },
    { id: 3, title: 'Blumba blumba', content: 'Blublublu', date: '02/01/2021 18:00' },
    { id: 4, title: 'Miau', content: 'Miau miua miau.', date: '02/01/2021 19:00' },
  ]
  
  const handleCommands = (command) => {
    console.log('This is the command');
    console.log(command);
    if (command === 'note 2') {
      navigation.navigate(
        'NoteScreen',
        {id: 2}
      )
    }
    if (command === 'list') {
      setHomeContent({
        type: 'list',
        content: notesMock
      })
    }
  }
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={(Platform.OS === 'ios') ? "padding" : null} enabled
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 60 })}
    >

      <Info label={ 'INFO' } context={ 'global' } />
      <Output 
        label={ 'OUTPUT' }
        type={ homeContent.type || 'none' }
        content={homeContent.content || '' }
        itemId='id'
        itemName='title'
      />
      <Input
        label={ 'COMMAND INPUT' }
        placeholder={ 'Type your commands here' }
        initialValue=''
        warn={ false }
        multiline={ false }
        onSubmit={ handleCommands }
      />

    </KeyboardAvoidingView>
  )
}

export default HomeScreen;