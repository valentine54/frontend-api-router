import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import App from './App.jsx'
// import Home from './Components/Home.jsx'
// import Profile from './Components/Profile.jsx'
// import NotFound from './Components/NotFound.jsx'
// import Animations from './Components/Animation.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
