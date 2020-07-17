import * as Colors from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const THEME = createMuiTheme({
  palette: {
    primary: Colors.teal,
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#000'
    }
  },
  appBar: {
    color: '#063252'
  },
});

export default THEME;
