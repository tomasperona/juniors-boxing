import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,  } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './components/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </CartProvider>
  </BrowserRouter>
)
