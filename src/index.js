import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {createStore } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'react-thunk';
import reducer from './containers/Store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools()); 

const app = (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
)

ReactDOM.render(
  app,    
  document.getElementById('root')
);
