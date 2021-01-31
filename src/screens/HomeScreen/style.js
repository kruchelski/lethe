import { StyleSheet } from 'react-native';
import ColorPalette from '../../global/ColorPalette';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: ColorPalette.bg01,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
	},
	text: {
		fontFamily: 'VT323_400Regular',
		color: ColorPalette.fg01,
		fontSize: 24
	}
});

export default styles;