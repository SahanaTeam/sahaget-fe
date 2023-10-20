import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './Components/NavBar'
import AppRoutes from './AppRoutes'

function App() {
  return (
    <Router>
      <NavBar />
      <AppRoutes />
      {/* Other config */}
    </Router>
  )
}

export default App
