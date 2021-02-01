import { StyleSheet } from 'react-native';
import ColorPalette from '../../global/ColorPalette';

const styles = StyleSheet.create({
	container: {
    flexDirection: 'column',
		backgroundColor: 'transparent',
		alignItems: 'stretch',
		justifyContent: 'flex-start',
    marginTop: 12,
    marginBottom: 12,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: ColorPalette.fg01,
    flex: 1
  },
  flatlistContainer: {
    flexDirection: 'column',
		backgroundColor: 'transparent',

    flex: 1
  },
	text: {
		fontFamily: 'VT323_400Regular',
		color: ColorPalette.fg01,
    fontSize: 22,
    textAlign: 'left',
  },
  warnText:{
    fontFamily: 'VT323_400Regular',
		color: ColorPalette.warn,
    fontSize: 22,
    textAlign: 'left',
  },
  label: {
    position: 'absolute',
    top: -12,
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