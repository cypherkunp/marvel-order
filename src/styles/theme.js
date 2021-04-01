import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F50204',
    },
    secondary: {
      main: green[500],
    },
    type: 'dark',
  },
});

export default theme;
