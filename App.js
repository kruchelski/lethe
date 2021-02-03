import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { useFonts, VT323_400Regular } from '@expo-google-fonts/vt323';

import Navigator from './src/navigator';

export default function App() {
	let [fontsLoaded] = useFonts({
		VT323_400Regular,
	});

	if (!fontsLoaded) {
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Text>Carregando</Text>
			</View>
		)
	} else {
		return (
			<NavigationContainer>
				<Navigator />
			</NavigationContainer>
		);
	}
}