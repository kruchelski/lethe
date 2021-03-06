import { StyleSheet } from 'react-native';
import ColorPalette from '../../global/ColorPalette';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: ColorPalette.bg01,
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
		paddingVertical: 50
	},
	logoImage: {
		width: 300,
		height: 150,
		resizeMode: 'contain',
	},
	text: {
		fontFamily: 'VT323_400Regular',
		color: ColorPalette.fg01,
		fontSize: 24,
		textAlign: 'center'
	}
});

export default styles;