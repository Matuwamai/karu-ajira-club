import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/Signup'
import Login from './pages/Login'
import LandingPage from './pages/LandingPage'
import AboutUs from './pages/AboutUs'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/signup' element={< RegisterPage/>} />
        <Route path='/login' element={< Login/>} />
        <Route path='/' element={< LandingPage/>} />
        <Route path='/aboutus' element={< AboutUs/>} />
      </Routes>
    </Router>
  </StrictMode>,
)
