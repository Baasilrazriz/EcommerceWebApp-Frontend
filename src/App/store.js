import { configureStore } from '@reduxjs/toolkit';
import bannerReducer from '../features/Mart/bannerSlice';
import headerReducer from '../Features/Mart/headerSlice'
import cartReducer from '../Features/Mart/cartSlice'
import categoryReducer from '../Features/Mart/categorySlice'
export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    header: headerReducer,
    cart: cartReducer,
category:categoryReducer
},
});
