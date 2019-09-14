import { createMuiTheme } from '@material-ui/core/styles';
import { mainStyles } from '../../GlobalStyles/GlobalStyles';

const { primaryLight, secondaryColor, primaryDark, errorText } = mainStyles;

export const paletteTheme = createMuiTheme({
  palette: {
    primary: {
      main: primaryDark
    },
    secondary: {
      main: primaryLight
    },
    text: {
      secondary: secondaryColor
    },
    error: {
      main: errorText
    }
  }
});
