import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { GlobalStyles } from './GlobalStyles';
import "./font.css";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
