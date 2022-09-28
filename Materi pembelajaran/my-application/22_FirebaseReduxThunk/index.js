import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/pages/App';
import reportWebVitals from './reportWebVitals';
import app from './config/firebase/index';

console.log('firebase ==> ', app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/// dibuat kerangka seperti atomic disain

/// link console firebase
// https://console.firebase.google.com/?pli=1

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
