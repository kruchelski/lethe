import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, VT323_400Regular } from '@expo-google-fonts/vt323';

export default function App() {
  let [fontsLoaded] = useFonts({
    VT323_400Regular,
  });
  const opa = 'Hey motherfucker, what you want?';
  const [text, setText] = useState('');

  useEffect(() => {
    setTimeout(()=> {
      let temp = opa.substring(0, text.length - 1);
      setText(`${temp}🁢`);
    }, 50)
  }, [text])

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Carregando</Text>
      </View>
    ) 
  } else {
    return (
      <View style={styles.container}>
        <Text style={{ color: '#1BCB78', fontSize: 24 ,fontFamily: 'VT323_400Regular', padding: 10, borderColor: '#1BCB78', borderWidth: 1, borderRadius: 10, maxWidth: 200}}>
          {text}
          </Text>
        <StatusBar style="auto" />
      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B241F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
