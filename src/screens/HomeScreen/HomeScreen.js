import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Home screen
    </Text>
    </View>
  )
}

export default HomeScreen;