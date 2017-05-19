import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

// styles
import '../styles/helper.scss';

// Routes
import Routes from './routes/';

// Reducer
import Reducers from './reducers/';

// Configure redux extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(Reducers, {}, composeEnhancers(
  applyMiddleware(ReduxThunk.withExtraArgument())
));



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store} >
      { Routes }
    </Provider>,
    document.getElementById('app-container'))
});

