import React from 'react';

import theme from "./theme/theme";
import { ThemeProvider } from "@material-ui/core";
import Navbar from './layout/navbar/navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme} >
          <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
