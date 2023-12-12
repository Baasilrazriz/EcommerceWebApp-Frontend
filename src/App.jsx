import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import MartHome from './Pages/Mart/MartHome'

import MartCategory from './Pages/Mart/MartCategory'
import MartWishList from './Pages/Mart/MartWishList'
import SearchedPage from './Pages/SearchedPage'
import ProtectedRoutes from './Pages/ProtectRoutes/ProtectedRoutes'
import LoginPage from './Pages/LoginPage'
import Checkout from './Pages/Checkout/Checkout'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<MartHome />}/>
    <Route path='/login' element={<MartHome/>}/>
    <Route path='/auth' element={<LoginPage/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path="/search" element={<SearchedPage  />}/>
    <Route path="/category/:categoryName" element={<MartCategory  />}/>
    <Route element={<ProtectedRoutes/>} >
    <Route path="/wishlist" element={<MartWishList  />}/>
      </Route>    
   </Routes>
   </BrowserRouter>
  )
}

export default App
