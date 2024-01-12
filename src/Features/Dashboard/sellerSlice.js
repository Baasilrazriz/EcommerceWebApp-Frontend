// actions.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const addSeller = createAsyncThunk(
  'Seller/addSeller',
  async (SellerData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://localhost:7158/Seller/CreateSeller', SellerData);
      console.log(response.data)
      return response.data; // Assuming the server responds with the created seller data
    } catch (error) {
      return rejectWithValue(error.response.data); // Assuming the server responds with an error message
    }
  }
);
export const UpdateSeller = createAsyncThunk(
  'Seller/UpdateSeller',
  async (SellerData,userId, { rejectWithValue }) => {
    try {
      const response = await axios.put(`https://localhost:7158/Seller/${userId}`, SellerData);
      console.log(response.data)
      return response.data; // Assuming the server responds with the created seller data
    } catch (error) {
      return rejectWithValue(error.response.data); // Assuming the server responds with an error message
    }
  }
);
export const fetchSellers = createAsyncThunk(
  'Seller/fetchSellers', async () => {
  const response = await axios.get("https://localhost:7158/Seller");
  console.log(response.data)
  return response.data;
});
export const fetchSellerByUsername = createAsyncThunk(
  'Seller/fetchSellerByUsername',
  async (Username, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://localhost:7158/Seller/${Username}`);
      console.log(response.data)
      return response.data; // Assuming the response contains the category name
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const DeleteSeller = createAsyncThunk(
  'Seller/DeleteSeller',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`https://localhost:7158/Seller/${userId}`);
      console.log(response.data)
      return response.data; // Assuming the response contains the category name
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const sellerSlice = createSlice({
  name: 'seller',
  initialState: {
    Sellers:[],
    SellerByUsername:[],
    addSellerStatus:"",
    fetchSellerStatus:"",
    updateSellerStatus:"",
    deleteSellerStatus:"",
    fetchSellerBySellernameStatus:"",
  },
  reducers: {
    setSellerByUsername:(state)=>{
      state.SellerByUsername=[]
    }
  },
  extraReducers: {
    [addSeller.pending]: (state) => {
      state.addSellerStatus = "pending";
    },
    [addSeller.fulfilled]: (state, action) => {
      state.addSellerStatus = "success";
      state.error = null;
    },
    [addSeller.rejected]: (state, action) => {
      state.addSellerStatus = "failed";
      state.error = action.payload || 'Failed to add seller';
    },
    [fetchSellers.pending]: (state) => {
      state.fetchSellerStatus = "pending";
    },
    [fetchSellers.fulfilled]: (state, action) => {
      state.fetchSellerStatus = "success";
      state.Sellers = action.payload;
      state.error = null;
    },
    [fetchSellers.rejected]: (state, action) => {
      state.fetchSellerStatus = "failed";
      state.error = action.payload || 'Failed to add seller';
    },
    [fetchSellerByUsername.fulfilled]: (state, action) => {
      state.fetchSellerBySellernameStatus = "success";
      state.SellerBySellername = action.payload;
      state.error = null;
    },
    [UpdateSeller.fulfilled]: (state, action) => {
      state.updateSellerStatus = "success";
      state.error = null;
    },
    [DeleteSeller.fulfilled]: (state, action) => {
      state.deleteSellerStatus = "success";
      state.error = null;
    },

  },
});

export const {setSellerByUsername} = sellerSlice.actions;

export default sellerSlice.reducer;

