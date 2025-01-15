import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react';
import './index.css'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './Context/Authcontext.jsx';

createRoot(document.getElementById('root')).render(

  <AuthContextProvider>

  <BrowserRouter>
  
  <NextUIProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </NextUIProvider> 
  </BrowserRouter>

  </AuthContextProvider>
)
