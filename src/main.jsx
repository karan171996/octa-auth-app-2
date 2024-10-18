import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from "@auth0/auth0-react";
import { getConfig } from "./config";

import App from './App.jsx'
import './index.css'



const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  authorizationParams:{
    redirect_uri: window.location.origin,
  }
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Auth0Provider
    {...providerConfig}
  >

    <App />
  </Auth0Provider>
  </StrictMode>,
)
