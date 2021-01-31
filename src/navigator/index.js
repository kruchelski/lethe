import React, { useState } from 'react';
import MainStackNavigator from './MainStackNavigator';
import { SplashScreen } from '../screens';


const Navigator = () => {
	const [loading, setLoading] = useState(true);

	if (loading) {
		return (
			<SplashScreen setLoading={ setLoading } />
		)
	} else {
		return (
			<MainStackNavigator />
		)
	}
}

export default Navigator;
