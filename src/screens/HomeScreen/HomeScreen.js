import React from 'react';
import { Text, KeyboardAvoidingView } from 'react-native';
import styles from './style';
import { Info } from '../../components';

const HomeScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={(Platform.OS === 'ios') ? "padding" : null} enabled
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 60 })}
    >
      <Info label={ 'INFO' } context={ 'global' }/>





      <Text style={styles.text}>
        Home screen
      </Text>
    </KeyboardAvoidingView>
  )
}

export default HomeScreen;