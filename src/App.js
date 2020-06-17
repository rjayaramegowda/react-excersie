import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './Header';
import ProductsByCategory from './ProductsByCategory';
import ProductPage from './ProductPage';


class App extends Component {
  render() {
    return (
      <Router>
        <Header />  
        <Route exact path={["/"]} component={ProductsByCategory} />        
        <Route exact path="/p/:itemId" component={ProductPage} /> 
      </Router>
    );
  }
}

export default App;