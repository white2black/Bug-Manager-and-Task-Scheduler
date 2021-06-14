import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
// import Router from './router/router';
render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
