import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import { lethaiApi } from '../../services';

const Info = ({ label, context }) => {
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');

  if (!message) {
    switch(context) {
      case 'global':
        setMessage(lethaiApi.getGlobalHelper());
        break;
      case 'note':
        setMessage(lethaiApi.getNoteHelper());
        break;
      case 'error':
        setMessage(lethaiApi.getInputError());
        break;
      case 'success':
        setMessage(lethaiApi.getNoteSuccess());
        break;
      case 'deleted':
        setMessage(lethaiApi.getNoteDeleted());
        break;
      default:
        setMessage(lethaiApi.getGlobalHelper());
    }
  }

  useEffect(() => {
    if (text.length <= message.length) {
      setTimeout(() => {
        let temp = message.substring(0, text.length);
        setText(`${temp} `);
      }, 10)
    }
  }, [text])

  return (
    <View
      style={ styles.container }
    >
      <Text
        style={ styles.label }
      >
        { label }
      </Text>
      <Text
        style={ styles.text }
      >
        { text }
      </Text>
    </View>
  )
}

export default Info;