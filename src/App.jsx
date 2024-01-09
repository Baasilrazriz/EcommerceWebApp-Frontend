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
import LandingPage from './Pages/LandingPage'
import FDWishList from './Pages/FoodDelivery/FDWishList'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
  <div>
    <ToastContainer style={{ zIndex: 9999 }} />
     <BrowserRouter>
   <Routes>
  
    <Route path="/" element={<LandingPage/>}/>
    <Route path='/mart/Home' element={<MartHome/>}/>
    <Route path='/auth' element={<LoginPage/>}/>
    <Route path="/mart/search" element={<SearchedPage  />}/>
    <Route path="/mart/category/:categoryName" element={<MartCategory  />}/>
    <Route path="/mart/products/:productName" element={<MartProductPage  />}/>
    <Route path="/dashboard" element={<Dashboard/>}/>

    <Route path="/Fooddelivery/Home" element={<FDHome/>}/>
    <Route path="/Fooddelivery/restraunts/:restraunt" element={<RestrauntPage  />}/>
    <Route element={<ProtectedRoutes/>} >
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path="/Fooddelivery/wishlist" element={<FDWishList  />}/>
    <Route path="/mart/wishlist" element={<MartWishList  />}/>
      </Route>    
   </Routes>
   </BrowserRouter>
  </div>
  )
}

export default App
