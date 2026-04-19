import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
//import App from './Form.jsx'
//import App from './UncontrolledForm.jsx'
//import App from './Appex.jsx'
import App from './AppText.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
