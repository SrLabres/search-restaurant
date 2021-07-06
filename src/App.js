import React from 'react';
import {Provider} from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './redux/store'
import { Reset } from 'styled-reset';
import { theme } from './theme';
import { Home } from './pages/Home';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Reset />
      <Home />
    </ThemeProvider>
    </Provider>
  );
}

export default App;
