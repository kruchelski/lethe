import { StyleSheet } from 'react-native';
import ColorPalette from '../../global/ColorPalette';

const styles = StyleSheet.create({
	container: {
    flexDirection: 'row',
		backgroundColor: 'transparent',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
    height: 'auto',
    padding: 5,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: ColorPalette.fg01,
    marginBottom: 10
  },
	text: {
		fontFamily: 'VT323_400Regular',
		color: ColorPalette.fg01,
    fontSize: 22,
    textAlign: 'justify'
  },
  inputText: {
    fontFamily: 'VT323_400Regular',
		color: ColorPalette.fg01,
    fontSize: 22,
    textAlign: 'left',
    textAlignVertical : 'top'
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