import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Auth0Provider} from "@auth0/auth0-react";

import './index.css';

ReactDOM.render(
    <Auth0Provider
        domain = "dev-q54874dm.us.auth0.com"
        clientId = "MAQrAGQyeMTrlHnM2Eb8Yx0s5IjDV4z7"
        redirectUri = {window.location.origin}
        audience="https://dev-q54874dm.us.auth0.com/api/v2/"
        scope="read:current_user update:current_user_metadata"
    >
        <App/>
    </Auth0Provider>,
    document.getElementById('root'));
