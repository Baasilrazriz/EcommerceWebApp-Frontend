import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const apiUrl="https://localhost:7158/Category";
export const fetchCategories = createAsyncThunk('Category/fetchCategories', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
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
      })
      .addCase(fetchProductByCategoryName.fulfilled, (state, action) => {
        state.prodInCat = action.payload;
      })
  },
  
});


export default categorySlice.reducer;
