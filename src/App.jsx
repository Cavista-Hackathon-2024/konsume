import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

function App() {

  return (
    <div className="bg-[#EDFAE7] font-[poppins]">
      <Dashboard />
    </div>
  )
}

export default App
