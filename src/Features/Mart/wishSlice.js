import { createSlice } from '@reduxjs/toolkit';

export const fetchWishlist = createAsyncThunk(
  'cart/fetchWishlist',
  async (userId, { rejectWithValue }) => {
    try {
      console.log("entering fetch whichlist")
      const response = await axios.get(`https://localhost:7158/Wishlist/GetUserWishlist/${userId}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const addTowishList = createAsyncThunk(
  'cart/addTowishList',
  async ({userId,prodId}, { rejectWithValue }) => {
    try {
      console.log("entering post whishlist")
        const response = await axios.post('https://localhost:7158/Wishlist', {
          prodId,
          userId
        })
  
      console.log(response.data)
      return response.data; // Assuming the response contains the cart items
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState={
    wishList:[],
    fetchwishListStatus:"",
    addwhishListStatus:"",
}
const wishSlice = createSlice({
  name: 'wish',
  initialState,
  reducers: {
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
      removeItem: (state, action) => {
        state.wishList = state.wishList.filter((item) => item.id !== action.payload.id);
      },
   
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchWishlist.pending, (state) => {
          // Optional: Add some state to track that the cart is being loaded
          state.fetchwishListStatus = "pending";
        })
        .addCase(fetchWishlist.fulfilled, (state, action) => {
          // Set the cart items to the fetched data
      console.log(action.payload)
          state.wishList = action.payload;
          state.fetchwishListStatus = "success"; // Set loading state to false
        })
        .addCase(fetchWishlist.rejected, (state, action) => {
          // Handle the error state
          state.fetchwishListStatus = "failed"; // Set loading state to false
          state.error = action.payload; // You might want to store the error message in the state

        })
        .addCase(addTowishList.pending, (state) => {
          // Optional: Add some state to track that the cart is being loaded
          state.addwhishListStatus = "pending";
        })
        .addCase(addTowishList.fulfilled, (state, action) => {
          // Set the cart items to the fetched data
      console.log(action.payload)
          state.addwhishListStatus = "success"; // Set loading state to false
        })
        .addCase(addTowishList.rejected, (state, action) => {
          // Handle the error state
          state.addwhishListStatus = "failed"; // Set loading state to false
          state.error = action.payload; // You might want to store the error message in the state
        })
  
      },  
        
});

export const {removeItem } = wishSlice.actions;
export default wishSlice.reducer;
