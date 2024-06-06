import { ThemeProvider } from 'styled-components';
import InstaAccount from './page/InstaAccount';
import { GlobalStyle } from './style/globalStyle';
import theme from './style/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <InstaAccount />
    </ThemeProvider>
  );
}

export default App;
