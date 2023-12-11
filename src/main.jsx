import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './App/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider  clientId="331398497699-i77hu31ro8qm6sspdmmn56ije1lj0q0v.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>,
)
