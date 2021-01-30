import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './style';

const SplashScreen = ({ navigator, setLoading }) => {
	const opa = 'Hey motherfucker, what you want?';
	const [text, setText] = useState('');

	useEffect(() => {
		setTimeout(() => {
			let temp = opa.substring(0, text.length - 1);
			setText(`${temp}🁢`);
		}, 50)
	}, [text])
	return null
}

export default SplashScreen;