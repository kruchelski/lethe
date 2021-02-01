import React from 'react';
import { Text, KeyboardAvoidingView } from 'react-native';
import styles from './style';
import { Info, Output, Input } from '../../components';

const HomeScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={(Platform.OS === 'ios') ? "padding" : null} enabled
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 60 })}
    >
      <Info label={ 'INFO' } context={ 'global' } />
      <Output label={ 'OUTPUT' } />
      <Input label={ 'INPUT' } context={ 'global' } />

    </KeyboardAvoidingView>
  )
}

export default HomeScreen;