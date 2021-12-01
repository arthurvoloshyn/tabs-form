import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import env from './constants/environment';
import App from './containers/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

if (env.isDev) {
  reportWebVitals(console.log); // eslint-disable-line no-console
}
