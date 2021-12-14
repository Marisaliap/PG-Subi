import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";
import { LangProvider } from "./context/langContext";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <LangProvider>
        <Auth0Provider
          useRefreshTokens={true}
          cacheLocation="localstorage"
          domain="dev-ldy8yn3a.us.auth0.com"
          clientId="UeNorZxq5mET0n5RaFSKS4E6Y6SCm2i6"
          redirectUri={"http://localhost:3000/home"}
        >
          <App />
        </Auth0Provider>
      </LangProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
