import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './pages/SignUp'
import Setup from './pages/Setup'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

function App() {

  return (
    <div className="bg-[#EDFAE7] font-[poppins]">
     <BrowserRouter>
       <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/setup'  element={
            <PrivateRoute>
              <Setup />
            </PrivateRoute>
          } />
          
       </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
