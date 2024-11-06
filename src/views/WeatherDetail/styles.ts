import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1.5,
  },
  image: {borderRadius: 32},
  titleText: {color: 'white'},
  mainTextContainer: {flex: 2, paddingHorizontal: 24},
  mainText: {color: 'white', textAlign: 'right', fontSize: 68},
  centerText: {color: 'white', textAlign: 'center', fontSize: 18},
  footerContainer: {
    flexDirection: 'row',
    marginVertical: 12,
    flex: 1,
  },
  footerItemContainer: {
    backgroundColor: 'green',
    borderRadius: theme.spacing.L,
    flex: 1,
    margin: 12,
    justifyContent: 'space-evenly',
  },
});
