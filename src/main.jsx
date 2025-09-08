import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import './sass/all.scss'
import App from './pages/App0908-2.jsx'
// import App from './MyApp'
import { HashRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  // 嚴謹模式
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
