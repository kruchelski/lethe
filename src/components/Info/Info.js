import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import ColorPalette from '../../global/ColorPalette';
import styles from './style';

const Info = ({ label, content, inputState }) => {
  const [message, setMessage] = useState(content);
  const [text, setText] = useState('');
  const [state, setState] = useState(inputState)


  useEffect(() => {
    let timeout = null;
    if (message && text.length <= message.length) {
      timeout = setTimeout(() => {
        let temp = message.substring(0, text.length);
        setText(`${temp} `);
      }, 10)
    }
    return (() => {
      clearTimeout(timeout);
    })
  }, [text])

  return (
    <View
      style={{
        ...styles.container,
        ...(state === 'error' ? { borderColor: ColorPalette.danger } : {}),
        ...(state === 'warning' ? { borderColor: ColorPalette.warn} : {})
      }}
    >
      <Text
        style={{ 
          ...styles.label,
          ...(state === 'error' ? { color: ColorPalette.danger } : {}),
          ...(state === 'warning' ? { color: ColorPalette.warn } : {}),
        }}
      >
        { label }
      </Text>
      <Text
        style={{
          ...styles.text,
          ...(state === 'error' ? { color: ColorPalette.danger } : {}),
          ...(state === 'warning' ? { color: ColorPalette.warn } : {}),
        }}
      >
        { text }
      </Text>
    </View>
  )
}

export default Info;