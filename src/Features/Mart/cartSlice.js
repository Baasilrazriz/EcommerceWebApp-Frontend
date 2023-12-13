import { createSlice } from '@reduxjs/toolkit';

const initialState={
  cartItems:[],
  isCartOpen:false,
  code: '',
  isValid: false,
  amount: 0,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const items={
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          image: action.payload.image,
          quantity: 1,

      }
      state.cartItems.push(items)
  
      }
    },
    incrementQuantity: (state, action) => {
      
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
            item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
    applyDiscount: (state, action) => {
      // Assuming a fixed discount for example purposes
      const validDiscountCode = 'DISCOUNT20';
      const discountAmount = 20; // This could be a percentage or a fixed amount

      if (action.payload === validDiscountCode) {
        state.code = action.payload;
        state.isValid = true;
        state.amount = discountAmount;
      } else {
        state.code = '';
        state.isValid = false;
        state.amount = 0;
      }
    },
  },
});

export const {toggleCart,applyDiscount, addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
