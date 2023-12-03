import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState={
  cartItems:[]
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
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
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
