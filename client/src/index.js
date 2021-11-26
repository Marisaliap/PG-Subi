import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from "./store";

const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
const auth0Client = process.env.REACT_APP_AUTH0_CLIENT;
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <Auth0Provider  
    domain={auth0Domain}
    clientId={auth0Client} 
    redirectUri={window.location.origin} >
    {/* redirectUri={"http://localhost:3000/register"} > */}
    <App />
    </Auth0Provider>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

