import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import SplashScreen from '../screens';
import MainStackNavigator from './MainStackNavigator';

const Navigator = () => {
	const [loading, setLoading] = useState(true);

	if (loading) {
		return (
			<SplashScreen setLoading={setLoading} />
		)
	} else {
		return (
			<MainStackNavigator />
		)
	}

}
