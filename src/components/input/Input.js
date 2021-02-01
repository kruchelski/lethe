import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './style';
import { lethaiApi } from '../../services';
import ColorPalette from '../../global/ColorPalette';

const Input = ({ label, context }) => {
  const [inputText, setInputText] = useState('');

  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.label}
      >
        { label }
      </Text>
      <TextInput
        placeholder={ 'Type your commands here' }
        placeholderTextColor={ ColorPalette.fg01Fade }
        style={ styles.inputText}
        value={ inputText }
        onChangeText={(text) => setInputText(text)}
        onEndEditing={(event) => {}}
        
      >
      </TextInput>
    </View>
  )
}

export default Input;