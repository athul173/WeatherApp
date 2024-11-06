import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.ts';

export default StyleSheet.create({
  mainContainer: {
    justifyContent: 'space-around',
    flex: 1,
  },
  flexContainer: {flex: 1},
  buttonContainer: {flex: 1, justifyContent: 'flex-end'},
  button: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    paddingVertical: theme.spacing.L,
    borderRadius: theme.spacing.XXL,
    borderWidth: 1,
    backgroundColor: 'blue',
  },
  buttonText: {color: 'white'},
});
