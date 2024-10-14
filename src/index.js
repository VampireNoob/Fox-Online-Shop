import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-6r0ov0axj5tgd2fq.us.auth0.com"
    clientId="4M27WMpnETSpZOzwHrY096RMEYYpTa6Q"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={ store }>
      <App />
    </Provider>
  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
