import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import MartHome from './Pages/Mart/MartHome'
import LoginForm from './Pages/Mart/LoginForm'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<MartHome/>}/>
    <Route path="/login" element={<LoginForm/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
