import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import MartHome from './Pages/Mart/MartHome'

import MartCategory from './Pages/Mart/MartCategory'
import MartWishList from './Pages/Mart/MartWishList'
import SearchedPage from './Pages/SearchedPage'
import ProtectedRoutes from './Pages/ProtectRoutes/ProtectedRoutes'
import LoginPage from './Pages/LoginPage'
import Checkout from './Pages/Checkout/Checkout'
import MartProductPage from './Pages/Mart/MartProductPage'
import Dashboard from './Components/DashboardComponents/Dashboard'
import FDHome from './Pages/FoodDelivery/FDHome'
import RestrauntPage from './Pages/FoodDelivery/RestrauntPage'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<MartHome/>}/>
    <Route path='/login' element={<MartHome/>}/>
    <Route path='/auth' element={<LoginPage/>}/>
    <Route path="/search" element={<SearchedPage  />}/>
    <Route path="/category/:categoryName" element={<MartCategory  />}/>
    <Route path="/products/:productName" element={<MartProductPage  />}/>
    <Route path="/restraunts/:restraunt" element={<RestrauntPage  />}/>
    <Route element={<ProtectedRoutes/>} >
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path="/mart/wishlist" element={<MartWishList  />}/>
      </Route>    
   </Routes>
   </BrowserRouter>
  )
}

export default App
