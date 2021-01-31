import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens';

const MainStack = createStackNavigator();

export default () => {
	return (
		<MainStack.Navigator>
			<MainStack.Screen
				name={'HomeScreen'}
				component={ HomeScreen }
			/>
		</MainStack.Navigator>
	)
}