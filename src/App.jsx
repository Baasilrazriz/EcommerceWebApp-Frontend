import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import MartHome from './Pages/Mart/MartHome'

import MartCategory from './Pages/Mart/MartCategory'
import MartWishList from './Pages/Mart/MartWishList'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<MartHome/>}/>
    <Route path="/category/:categoryName" element={<MartCategory  />}/>
    <Route path="/wishlist" element={<MartWishList  />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
