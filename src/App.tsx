import { RelayEnvironmentProvider } from 'react-relay';
import { ThemeProvider } from 'styled-components';

import InstaAccount from './page/InstaAccount';
import environment from './RelayEnvironment';
import { GlobalStyle } from './style/globalStyle';
import theme from './style/theme';

function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <InstaAccount />
      </ThemeProvider>
    </RelayEnvironmentProvider>
  );
}

export default App;
