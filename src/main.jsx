import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Home from './Components/Home.jsx'
import { createBrowserRouter , RouterProvider } from'react-router-dom'
import Profile from './Components/Profile.jsx'
import NotFound from './Components/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <NotFound/>
  },
  {
    path: "/profiles",
    element: <Profile/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
