import React from 'react';

import theme from "./theme/theme";
import { ThemeProvider } from "@material-ui/core";
import Navbar from './layout/navbar/navbar'
import './App.css';
import Footer from './layout/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/Contact'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme} >
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/contact' component={ContactPage} />
          </Switch>
          <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
