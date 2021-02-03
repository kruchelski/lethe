import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, NoteScreen } from '../screens';
import { NotesProvider } from '../contexts/NotesContext';
import ColorPalette from '../global/ColorPalette';

const MainStack = createStackNavigator();

export default () => {
	return (
		<NotesProvider>
			<MainStack.Navigator
				screenOptions={{
					headerTintColor: ColorPalette.fg01,
					headerStyle: {
						backgroundColor: ColorPalette.bg01,
					},
					headerTitleStyle: {
						fontFamily: 'VT323_400Regular',
						fontSize: 24
					}
				}}
			>
				<MainStack.Screen
					name={'HomeScreen'}
					component={HomeScreen}
					options={{ title: 'Lethe' }}
				/>
				<MainStack.Screen
					name={'NoteScreen'}
					component={NoteScreen}
					options={{ title: 'Note details' }}
				/>
			</MainStack.Navigator>
		</NotesProvider>
	)
}