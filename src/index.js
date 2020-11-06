import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'react-thunk';

const app = (
  <BrowserRouter>
      <App />
    </BrowserRouter>
)

ReactDOM.render(
  app,    
  document.getElementById('root')
);
