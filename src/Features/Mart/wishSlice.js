import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchWishlist = createAsyncThunk(
  'whishlist/fetchWishlist',
  async ({userID} , { rejectWithValue }) => {
    try {
      console.log("entering fetch whichlist "+userID)
      const response = await axios.get(`https://localhost:7158/Wishlist/GetUserWishlist/${userID}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error.response.data)
      return rejectWithValue(error.response.data);
    }
  }
);

export const addTowishList = createAsyncThunk(
  'whishlist/addTowishList',
  async ({productID,userID}, { rejectWithValue }) => {
    try {
      console.log("entering post whishlist")
      
      const response = await axios.post('https://localhost:7158/Wishlist', {
        productID,
          userID
        })
        console.log("here")
      console.log(response.data)
      return response.data; // Assuming the response contains the cart items
    } catch (error) {
      console.log(error.response.data)
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState={
    wishList:[],
    fdwhishlist:[],
    fetchwishListStatus:"",
    addwhishListStatus:false,
    wishlistOpen:"",
}
const wishSlice = createSlice({
  name: 'wish',
  initialState,
  reducers: {
    setWishlist:(state)=>
    {
      state.wishlistOpen=!state.wishlistOpen
    }
    // addTowishList: (state, action) => {
    //   const existingItem = state.wishList.find((item) => item.id === action.payload.id);
    //   if (existingItem) {
    //     alert("already in the wishlist")
    //   } else {
    //     const items={
    //         id: action.payload.id,
    //         name: action.payload.name,
    //         price: action.payload.price,
    //         image: action.payload.image,
    //         quantity: action.payload.quantity,
    //     }
    //     state.wishList.push(items)
    //   }
    //   },
   
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchWishlist.pending, (state) => {
          // Optional: Add some state to track that the cart is being loaded
          state.fetchwishListStatus = "pending";
          console.log(state.fetchwishListStatus)
        })
        .addCase(fetchWishlist.fulfilled, (state, action) => {
          // Set the cart items to the fetched data
      console.log(action.payload)
          state.wishList = action.payload;
          state.fetchwishListStatus = "success"; // Set loading state to false
          console.log(state.fetchwishListStatus)
        })
        .addCase(fetchWishlist.rejected, (state, action) => {
          // Handle the error state
          state.fetchwishListStatus = "failed"; // Set loading state to false

          console.log(state.fetchwishListStatus)

        })
        .addCase(addTowishList.pending, (state) => {
          // Optional: Add some state to track that the cart is being loaded
          state.addwhishListStatus = "pending";
          console.log(state.addwhishListStatus)
        })
        .addCase(addTowishList.fulfilled, (state, action) => {
          // Set the cart items to the fetched data
      console.log(action.payload)
          state.addwhishListStatus = "success"; // Set loading state to false
          console.log(state.addwhishListStatus)
        })
        .addCase(addTowishList.rejected, (state, action) => {
          // Handle the error state
          state.addwhishListStatus = "failed"; // Set loading state to false
          console.log(state.addwhishListStatus)
        })
  
      },  
        
});

export const {setWishlist } = wishSlice.actions;
export default wishSlice.reducer;
