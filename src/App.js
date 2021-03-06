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

import ProductPage from './Pages/ProductMainPage/ProductMainPage';
import ProductOverviewPage from './Pages/ProductOverviewPage.jsx/ProductOverviewPage';
import ProductDetailPage from './Pages/ProductDetails/ProductDetailPage';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme} >
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route exact path='/products' component={ProductPage} />
            <Route  path='/products/:id' component={ProductOverviewPage} />
            <Route  path='/productOverview/:id' component={ProductDetailPage} />
          </Switch>
          <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
