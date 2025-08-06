import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import App from './pages/App0806-2.jsx'

createRoot(document.getElementById('root')).render(
  // 嚴謹模式
  <StrictMode>
    <App />
  </StrictMode>,
)
