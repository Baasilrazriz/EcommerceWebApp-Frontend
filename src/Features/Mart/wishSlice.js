import { createSlice } from '@reduxjs/toolkit';

const initialState={
    wishList:[],
  
}
const wishSlice = createSlice({
  name: 'wish',
  initialState,
  reducers: {
    addTowishList: (state, action) => {
      const existingItem = state.wishList.find((item) => item.id === action.payload.id);
      if (existingItem) {
        alert("already in the wishlist")
      } else {
        const items={
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            image: action.payload.image,
            quantity: action.payload.quantity,
        }
        state.wishList.push(items)
      }
      },
      removeItem: (state, action) => {
        state.wishList = state.wishList.filter((item) => item.id !== action.payload.id);
      },
   
    },
      
});

export const { addTowishList,removeItem } = wishSlice.actions;
export default wishSlice.reducer;
