import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './style';
import ColorPalette from '../../global/ColorPalette';

const Input = ({ label, placeholder, initialValue, multiline, warn, onSubmit, onInput }) => {
  const [inputText, setInputText] = useState(initialValue);

  const endEditingText = () => {
    if (!onSubmit) {
      return;
    }
    onSubmit(inputText)
    setInputText('');
  }

  return (
    <View
      style={{ ...styles.container, ...(multiline ? {flex: 1} : {}), ...(warn ? {borderColor: ColorPalette.warn} : {}) }}
    >
      <Text
        style={{ ...styles.label, ...(warn ? {color: ColorPalette.warn} : {}) }}
      >
        { label }
      </Text>
      <TextInput
        placeholder={ placeholder || 'Input text here' }
        placeholderTextColor={ ColorPalette.fg01Fade }
        multiline = { multiline }
        style={{ ...styles.inputText, ...(multiline ? {flex: 1} : {}), ...(warn ? {color: ColorPalette.warn} : {}) }}
        value={ inputText }
        onChangeText={(text) => {
          setInputText(text)
          if (onInput) {
            onInput(text)
          } 
        }}
        onEndEditing={(event) => { endEditingText(event.nativeEvent.text) }}
        // showSoftInputOnFocus={true}
        autoCapitalize = 'none'
        autoCorrect = { false }
      />
    </View>
  )
}

export default Input;