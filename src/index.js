import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "antd/dist/antd.min.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-34wkefu8.us.auth0.com"
    clientId="KHO13lbtir7LK3qnBj2IqvsAqBjwn9vs"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>
);
