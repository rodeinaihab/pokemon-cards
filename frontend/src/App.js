import './App.css';
import React from 'react';
import { common } from '@mui/material/colors';
import HomeView from './Views/HomeView';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: common.white,
        },
        text: {
            primary: common.black,
        }
    },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
          <div className="App">
              <HomeView />
          </div>
      </ThemeProvider>
  );
}

export default App;
