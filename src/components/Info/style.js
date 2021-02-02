import { StyleSheet } from 'react-native';
import ColorPalette from '../../global/ColorPalette';

const styles = StyleSheet.create({
	container: {
    flexDirection: 'row',
		backgroundColor: 'transparent',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
    minHeight: 70,
    height: 'auto',
    marginBottom: 10,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: ColorPalette.fg01,
  },
	text: {
		fontFamily: 'VT323_400Regular',
		color: ColorPalette.fg01,
    fontSize: 22,
    textAlign: 'justify'
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 10,
    fontFamily: 'VT323_400Regular',
    backgroundColor: ColorPalette.bg01,
    paddingHorizontal: 8,
    color: ColorPalette.fg01,
    fontSize: 16,
    textTransform: 'uppercase'
  }

});

export default styles;