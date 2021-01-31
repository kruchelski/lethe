import React, { useEffect, useState } from 'react';
import { Image, Text, View, ActivityIndicator } from 'react-native';
import { lethaiApi } from '../../services';
import styles from './style';
import { Logo } from '../../assets';
import ColorPalette from '../../global/ColorPalette';

const SplashScreen = ({ navigator, setLoading }) => {
	const [greeting, setGreeting] = useState('');
	const [text, setText] = useState('');

	if (!greeting) {
		setGreeting(lethaiApi.getGreeting());
	}

	useEffect(() => {
		setTimeout(() => {
			let temp = greeting.substring(0, text.length - 1);
			setText(`${temp}🁢`);
		}, 50)

		if (text.length === greeting.length) {
			setTimeout(() => {
				setLoading(false);
			}, 2500)
		}
	}, [text])

	return (
		<View style={ styles.container }>
			<Image source={ Logo } style={ styles.logoImage } />
			<ActivityIndicator size="large" color={ ColorPalette.fg02 } />
			<Text style={ styles.text }>
				{ text }
			</Text>
		</View>
	)
}

export default SplashScreen;