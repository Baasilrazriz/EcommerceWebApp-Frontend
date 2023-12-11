import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import MartHome from './Pages/Mart/MartHome'

import MartCategory from './Pages/Mart/MartCategory'
import MartWishList from './Pages/Mart/MartWishList'
import SearchedPage from './Pages/SearchedPage'
import Dashboard from './Components/Dashboard'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<MartHome/>}/>
    <Route path="/category/:categoryName" element={<MartCategory  />}/>
    <Route path="/wishlist" element={<MartWishList  />}/>
    <Route path="/search" element={<SearchedPage  />}/>
    
   </Routes>
   </BrowserRouter>
  )
}

export default App
