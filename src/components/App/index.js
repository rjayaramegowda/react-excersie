import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from '../Header';
import HomePage from '../HomePage';
import ProductPage from '../ProductPage';


class App extends Component {
  render() {
    return (
      <Router>
        <Header />  
        <Route exact path={["/"]} component={HomePage} />        
        <Route exact path="/p/:itemId" component={ProductPage} /> 
      </Router>
    );
  }
}

export default App;