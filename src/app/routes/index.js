import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// components
import Header from '../components/layout/header/';
import ProductsIndex from '../components/products/';
import NotFound from '../components/public/not-found';

// Routes
export default (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ProductsIndex} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)