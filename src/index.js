import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Auth0Provider} from "@auth0/auth0-react";
import { getConfig } from "./config";
import './index.css';

const config = getConfig();

const providerConfig = {
    domain: config.domain,
    clientId: config.clientId,
    ...(config.audience ? { audience: config.audience } : null)
};
ReactDOM.render(
    <Auth0Provider
        domain = {providerConfig.domain}
        clientId = {providerConfig.clientId}
        redirectUri = {window.location.origin}
        audience={providerConfig.audience}
        scope="read:current_user update:current_user_metadata"
    >
        <App/>
    </Auth0Provider>,
    document.getElementById('root'));
