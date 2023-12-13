import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './App/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_51ON0aPJKSgtOVKl2iiEBcfPalUAo1lkROd7leiLl3iLG1aMwAGXOExvY6hHRtwgwaqrwbtp94NkSeCar8fJpzNhi00jBfLFD6h');

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider  clientId="331398497699-i77hu31ro8qm6sspdmmn56ije1lj0q0v.apps.googleusercontent.com">
      <Elements stripe={stripePromise}>
    <App />
  </Elements>
    </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>,
)
