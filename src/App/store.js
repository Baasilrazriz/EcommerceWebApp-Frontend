import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "../Features/Mart/bannerSlice";
import headerReducer from "../Features/Mart/headerSlice";
import authReducer from "../Features/Mart/userSlice";
import cartReducer from "../Features/Mart/cartSlice";
import categoryReducer from "../Features/Mart/categorySlice";
import productReducer from "../Features/Mart/productSlice";
import wishReducer from "../Features/Mart/wishSlice";
import loginReducer from "../Features/Mart/LoginSlice";
import forgotReducer from "../Features/Mart/forgotSlice";
import searchReducer from "../Features/General/searchSlice"
import signupReducer from "../Features/Mart/signupSlice";
import CuisineReducer from "../Features/FoodDelivery/CuisineSlice";
import restrauntReducer from  "../Features/FoodDelivery/restrauntSlice";
import menuSectionReducer from  "../Features/FoodDelivery/menuSectionSlice";
import discountReducer from  "../Features/FoodDelivery/discountSlice";
import reviewReducer from "../Features/FoodDelivery/reviewSlice"
import carouselReducer from "../Features/General/carouselSlice"
import navigationReducer from "../Features/General/navigationSlice"
import adminDashboardReducer from "../Features/Dashboard/adminDashboardSlice"
import usersInfoReducer from "../Features/Dashboard/usersInfoSlice"
import riderReducer from "../Features/Dashboard/riderSlice";
import sellerReducer from "../Features/Dashboard/sellerSLice";
import landingPageReducer from "../Features/LandingPage/LandingPageSlice"
export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    header: headerReducer,
    cart: cartReducer,
    category: categoryReducer,
    auth: authReducer,
    product: productReducer,
    wish: wishReducer,
    login: loginReducer,
    forgot: forgotReducer,
    signup:signupReducer,
    search:searchReducer,
    navigation:navigationReducer,
    cuisine:CuisineReducer,
    carousel:carouselReducer,
    restraunt:restrauntReducer,
    menuSection:menuSectionReducer,
    discount:discountReducer,
    review:reviewReducer,
    adminDashboard:adminDashboardReducer,
    user:usersInfoReducer,
    seller:sellerReducer,
    rider:riderReducer,
    landingPage:landingPageReducer,
  },
});
