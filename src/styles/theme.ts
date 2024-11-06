import {palette} from './palette';

const theme = {
  color: {
    black: palette.black,
    blue: palette.blue,
    grey: palette.darkGray,
    greenText: palette.darkGreen,
    darkPurple: palette.purple,
    pink: palette.pink,
    darkBackground: palette.darkGray,
    lightBackground: palette.backgroundGray,
    appBackgroundColor: palette.lightGray,
  },
  spacing: {
    XS: 4,
    S: 8,
    M: 12,
    L: 16,
    XL: 24,
    XXL: 32,
  },
  textVariants: {
    headerText: {fontSize: 25, fontWeight: 'bold', textAlign: 'center'},
    descriptionText: {
      fontSize: 18,
      color: palette.darkGreen,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    largeText: {fontSize: 38, fontWeight: '500'},
    normalText: {fontSize: 18},
  },
  buttonVariants: {
    primary: {
      backgroundColor: palette.lightGreen,
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 8,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 5},
      shadowOpacity: 0.2,
      shadowRadius: 8,
      marginVertical: 12,
    },
  },
};

export default theme;
