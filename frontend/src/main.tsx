import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/Signup'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/signup' element={< RegisterPage/>} />
      </Routes>
    </Router>
  </StrictMode>,
)
