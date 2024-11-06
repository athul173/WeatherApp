import {StyleSheet} from 'react-native';
import theme from '../../../../styles/theme.ts';

export default StyleSheet.create({
  locationContainer: {
    backgroundColor: theme.color.lightBackground,
    marginVertical: theme.spacing.L,
    borderRadius: theme.spacing.XXL,
  },
  pressable: {
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
    fontSize: theme.spacing.L,
    paddingHorizontal: 4,
    paddingVertical: theme.spacing.S,
    textAlign: 'center',
    color: 'white',
  },
  largeText: {
    fontSize: 48,
    textAlign: 'center',
    color: 'white',
  },
  image: {height: 100, width: 100},
});
