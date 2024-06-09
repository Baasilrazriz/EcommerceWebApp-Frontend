import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const apiUrl="https://localhost:7158/Product";
export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});
const initialState={
  products:[],
  prodStatus:"",
i:0,
}
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: { 
},
extraReducers: (builder) => {
  builder
    .addCase(fetchProducts.fulfilled, (state, action) => {
      if(state.i===0)
      {
        state.products = action.payload;
        state.prodStatus = "success";
        console.log("fetch product :"+state.prodStatus)
        state.i++;
      }
      
    })
    .addCase(fetchProducts.pending, (state) => {
      
      state.prodStatus = "pending";
      console.log("fetch product:"+state.prodStatus)

    })
    .addCase(fetchProducts.rejected, (state, action) => {
      // Handle the error state
      state.prodStatus = "failed"; // Set loading state to false
      console.log("fetch product:"+state.prodStatus)
    });

    // .addCase(fetchCategoryNameById.fulfilled, (state, action) => {
    //   state.categories = action.payload;
    // })
},

});


export default productSlice.reducer;
