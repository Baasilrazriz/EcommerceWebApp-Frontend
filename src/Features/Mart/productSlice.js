import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const apiUrl="https://localhost:7158/Product";
export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const response = await axios.get(apiUrl);
  console.log(response.data)
  return response.data;
});
const initialState={
  products:[
   
    
  ],
  prodStatus:"",

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
      state.prodStatus = "success";
      console.log("product"+state.prodStatus)
    })
    .addCase(fetchProducts.pending, (state) => {
      // Optional: Add some state to track that the cart is being loaded
      state.prodStatus = "pending";

    })
    .addCase(fetchProducts.rejected, (state, action) => {
      // Handle the error state
      state.prodStatus = "failed"; // Set loading state to false
      console.log("product"+state.prodStatus)
    });

    // .addCase(fetchCategoryNameById.fulfilled, (state, action) => {
    //   state.categories = action.payload;
    // })
},

});

export const { setProdInCat } = productSlice.actions;
export default productSlice.reducer;
