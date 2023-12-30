import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const apiUrl="https://localhost:7158/Product";
export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});
const initialState={
  products:[
   
    
  ],
  
}
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: { 
},
extraReducers: (builder) => {
  builder
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    })
    // .addCase(fetchCategoryNameById.fulfilled, (state, action) => {
    //   state.categories = action.payload;
    // })
},

});

export const { setProdInCat } = productSlice.actions;
export default productSlice.reducer;
