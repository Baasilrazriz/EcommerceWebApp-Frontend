import { accordion } from '@material-tailwind/react';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (userId, { rejectWithValue }) => {
    try {
  
      const response = await axios.get(`https://localhost:7158/Cart/GetUserCart/${userId}`);
      console.log(response.data)  
      return response.data; // Assuming the response contains the cart items
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({userID,productID,quantity}, { rejectWithValue }) => {
    try {
 
        const response = await axios.post('https://localhost:7158/Cart', {
          productID,
          userID,
          quantity
        })
  
      console.log(response.data)
      return response.data; // Assuming the response contains the cart items
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const UpdateCart = createAsyncThunk(
  'cart/UpdateCart',
  async ({ quantity, cart_id }, { rejectWithValue }) => {
    try {
      console.log("Entering put cart");
      const response = await axios.put(`https://localhost:7158/Cart/${cart_id}`, {
        quantity: quantity
      });

      console.log("Response Data:", response.data);
      return response.data; // Assuming the response contains the updated cart items
    } catch (error) {
      console.log("Error in UpdateCart:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState={
  cartItems:[],
  isCartOpen:false,
  code: '',
  isValid: false,
  isLoadingCart:"",
  fetchCartStatus:"",
  addCartStatus:"",
  amount: 0,
  error:"",
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state,action) => {
      if(action.payload!==null)
      {
        state.isCartOpen = !state.isCartOpen;
      }
     else if(action.payload===null)
      {
        alert("please login first")
      }

    },
setfetchCartStatus:(state,action)=>{
  state.fetchCartStatus=action.payload;
},
    removeItem: (state, action) => {
      
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
    applyDiscount: (state, action) => {
      // Assuming a fixed discount for example purposes
      const validDiscountCode = 'DISCOUNT20';
      const discountAmount = 20; // This could be a percentage or a fixed amount

      if (action.payload === validDiscountCode) {
        state.code = action.payload;
        state.isValid = true;
        state.amount = discountAmount;
      } else {
        state.code = '';
        state.isValid = false;
        state.amount = 0;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        // Optional: Add some state to track that the cart is being loaded
        state.fetchCartStatus = "pending";
        console.log("state.fetchCartStatus"+state.fetchCartStatus)
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        // Set the cart items to the fetched data
    console.log(action.payload)
        state.cartItems = action.payload;
        state.fetchCartStatus = "success"; // Set loading state to false
        console.log("state.fetchCartStatus"+state.fetchCartStatus)
      })
      .addCase(fetchCart.rejected, (state, action) => {
        // Handle the error state
        state.fetchCartStatus = "failed"; // Set loading state to false
        state.error = action.payload; // You might want to store the error message in the state
        console.log("state.fetchCartStatus"+state.fetchCartStatus)
      })
      .addCase(addToCart.pending, (state) => {
        // Optional: Add some state to track that the cart is being loaded
        state.addCartStatus = "pending";
        console.log("addCartStatus"+state.addCartStatus)
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        // Set the cart items to the fetched data
    console.log(action.payload)
        state.addCartStatus = "success"; // Set loading state to false
        console.log("addCartStatus"+state.addCartStatus)
        setTimeout(()=>{state.addCartStatus = ""},  5000)
       // Set loading state to false
      })
      .addCase(addToCart.rejected, (state, action) => {
        // Handle the error state
        state.addCartStatus = "failed"; // Set loading state to false
        console.log("addCartStatus"+state.addCartStatus)
      })
  },  
});

export const {toggleCart,applyDiscount,setfetchCartStatus, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
