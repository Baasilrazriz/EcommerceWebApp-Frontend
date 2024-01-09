import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchCategories = createAsyncThunk('Category/fetchCategories', async () => {
 try {
  const response = await axios.get("https://localhost:7158/Category");
  console.log(response.data)
  return response.data;
} catch (error) {
  return rejectWithValue(error.response.data);
}
});
  export const fetchProductByCategoryName = createAsyncThunk(
    'category/fetchCategoryNameById',
    async (categoryName, { rejectWithValue }) => {
      try {
        const response = await axios.get(`https://localhost:7158/ProductByCategories/GetProductsByCategory/${categoryName}`);
        console.log(response.data)
        return response.data; // Assuming the response contains the category name
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

const initialState={
  cat:[],
  prodInCat:[],
  catStatus:"",
}
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
      },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.cat = action.payload;
        state.catStatus = "success";
        console.log("category"+state.catStatus)
      })
      .addCase(fetchCategories.pending, (state) => {
        state.catStatus = "pending";
        
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.catStatus = "failed";
        console.log("category"+state.catStatus)
      })
      .addCase(fetchProductByCategoryName.fulfilled, (state, action) => {
        state.prodInCat = action.payload;
      })
  },
  
});


export default categorySlice.reducer;
