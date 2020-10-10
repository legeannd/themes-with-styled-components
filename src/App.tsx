import React from 'react';
import Button from './components/Button';
import { CustomThemeProvider } from './hooks/theme';

import GlobalStyle from './styles/global';

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />

      <h1>App super completo</h1>
      
      <Button />
    </CustomThemeProvider>
  );
}

export default App;
