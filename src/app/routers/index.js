import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// components
import ProductsIndex from '../components/products/';
import NotFound from '../components/public/not-found';

// Routes
export default (
  <Router>
    <div>
      <header>Header</header>
      <Switch>
        <Route exact path="/" component={ProductsIndex} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)