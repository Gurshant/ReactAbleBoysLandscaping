import * as Colors from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const THEME = createMuiTheme({
  palette: {
    primary: {
      light: '#755A26',
      main: '#755A26',
      dark: '#755A26',
      contrastText: '#000'

    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#000'
    }
  },
  appBar: {
    color: '#755A26'
  },

});

export default THEME;
