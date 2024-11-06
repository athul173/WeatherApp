import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.ts';

export default StyleSheet.create({
  locationContainer: {
    backgroundColor: theme.color.lightBackground,
    marginVertical: theme.spacing.L,
    borderRadius: theme.spacing.L,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    padding: 12,
  },
  rightContainer: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  smallText: {
    fontSize: 12,
    paddingHorizontal: 4,
    paddingVertical: theme.spacing.S,
    textAlign: 'center',
  },
  largeText: {
    fontSize: 48,
    textAlign: 'center',
  },
  image: {height: 100, width: 100},
});
