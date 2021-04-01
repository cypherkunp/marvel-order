import Header from './header/header.comp';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main></main>
    </ThemeProvider>
  );
}

export default App;
