import { StyleSheet } from 'react-native';
import ColorPalette from '../../global/ColorPalette';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: ColorPalette.bg01,
		alignItems: 'stretch',
		justifyContent: 'flex-start',
		padding: 10,
	},
	text: {
		fontFamily: 'VT323_400Regular',
		color: ColorPalette.fg01,
		fontSize: 20,
		marginBottom: 10,
		padding: 5
	}
});

export default styles;