import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Only remove React.StrictMode if necessary for debugging purposes
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="135579718410-lr6odphl76uhfk475430teeuv257533r.apps.googleusercontent.com">
         <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// Measure app performance (if needed)
reportWebVitals();
