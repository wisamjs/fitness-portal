
import {
  cyan700,
  grey300,
  grey400,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

import {
  darkestBlue,
  darkBlue,
  lightBlue,
  purple,
} from './colors';

import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: darkBlue,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: white,
    accent2Color: lightBlue,
    accent3Color: purple,
    textColor: white,
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: white,
    canvasColor: darkestBlue,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: white,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};