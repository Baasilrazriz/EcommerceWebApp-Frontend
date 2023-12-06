import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import MartHome from './Pages/Mart/MartHome'
import LoginForm from './Pages/Mart/LoginForm'
import MartCategory from './Pages/Mart/MartCategory'
import MartWishList from './Pages/Mart/MartWishList'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<MartHome/>}/>
    <Route path="/login" element={<LoginForm/>}/>
    <Route path="/category/:categoryName" element={<MartCategory  />}/>
    <Route path="/wishlist" element={<MartWishList  />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
