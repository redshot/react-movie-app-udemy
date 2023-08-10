import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**
 * * Type "npm start" in the terminal to start this app
 * - The two important files are App.js and index.js
 * - The React DOM or should we say this file renders the <App /> component and will display whatever layout is in that component.
 *    - The component will be rendered inside the root HTML element <div id="root"></div>
 * 
 */