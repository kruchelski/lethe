import React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { HomeScreen } from '../screens';
import { Header } from '../components';
import ColorPalette from '../global/ColorPalette';

const MainStack = createStackNavigator();

export default () => {
	return (
		<MainStack.Navigator
			screenOptions = {{
				headerTitle: props => <Header { ...props } />,
				headerTintColor: ColorPalette.fg01,
				headerStyle: {
					backgroundColor: ColorPalette.bg01
				}
			}}
		>
			<MainStack.Screen
				name={'HomeScreen'}
				component={ HomeScreen }
			/>
		</MainStack.Navigator>
	)
}