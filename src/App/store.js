import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "../Features/Mart/bannerSlice";
import headerReducer from "../Features/Mart/headerSlice";
import userReducer from "../Features/Mart/userSlice";
import cartReducer from "../Features/Mart/cartSlice";
import categoryReducer from "../Features/Mart/categorySlice";
import productReducer from "../Features/Mart/productSlice";
import wishReducer from "../Features/Mart/wishSlice";
import loginReducer from "../Features/Mart/LoginSlice";
import forgotReducer from "../Features/Mart/forgotSlice";
export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    header: headerReducer,
    cart: cartReducer,
    category: categoryReducer,
    user: userReducer,
    product: productReducer,
    wish: wishReducer,
    login: loginReducer,
    forgot: forgotReducer,
  },
});
