import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Clock from './Clock'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>
)