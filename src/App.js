import React from 'react';

import theme from "./theme/theme";
import { ThemeProvider } from "@material-ui/core";
import Navbar from './layout/navbar/navbar'
import './App.css';
import Footer from './layout/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme} >
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
          </Switch>
          <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
