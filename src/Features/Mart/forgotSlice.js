
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';
export const validateUser = createAsyncThunk(
  'Forgot/validateUser',
  async ({username}, { rejectWithValue }) => {
    try {
      console.log(username)
      const response = await axios.post(` https://localhost:7158/Forgot/ValidateUsername`, {username});
      console.log(response.data)
      const email=response.data.email;
      const uname=response.data.userName;
      return {email,uname}; // Assuming the server responds with the created seller data
    } catch (error) {
      return rejectWithValue(error.response.data); // Assuming the server responds with an error message
    }
  }
);
export const SendOtp = createAsyncThunk(
  'Forgot/SendOtp',
  async ({username,email}, { rejectWithValue }) => {
    try {
      console.log(username)
      console.log(email)
      const response = await axios.post(`https://localhost:7158/Forgot/InititateRecovery`, {username,email});
      console.log(response.data)
return response.data
    } catch (error) {
      return rejectWithValue(error.response.data); // Assuming the server responds with an error message
    }
  }
);

const forgotSlice = createSlice({
  name: 'forgot',
  initialState: {
    step: 1, 
    username: '',
    email:'',
    validEmail:"",
    medium: '',
    otp: '',
    isForgotModalOpen:false,
    newPassword: '',
    selectedDropdownValue: '',
    OtpStatus:"",
    validStatus:"",
  },
  reducers: {
    
    setselectedDropdownValue: (state, action) => {
        state.selectedDropdownValue = action.payload;
      },
    setStep:(state,action)=>{
state.step=action.payload
    },
    setEmail: (state, action) => {
      state.validEmail = action.payload;
    },
    setMedium: (state, action) => {
      state.medium = action.payload;
    },
    setOTP: (state, action) => {
      state.otp = action.payload;
    },
    setNewPassword: (state, action) => {
      state.newPassword = action.payload;
    },
    openforgotModal: (state) => {
      state.isForgotModalOpen = true;
    },
    closeforgotModal: (state) => {
      state.isForgotModalOpen = false;
    },
  },
  extraReducers: {
    [validateUser.pending]: (state) => {
      state.validStatus = "pending";
      toast.loading
    },
    [validateUser.fulfilled]: (state, action) => {
      state.validStatus = "success";
      state.username=action.payload.uname;
      state.step=2;
state.email=action.payload.email
      toast.success("username found successfully ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        
      });
          
    },
    [validateUser.rejected]: (state, action) => {
      state.validStatus = "failed";
      toast.error("username not found ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        
      });
    },
    
    [SendOtp.pending]: (state) => {
      state.OtpStatus = "pending";
    },
    [SendOtp.fulfilled]: (state, action) => {
      state.OtpStatus = "success";      
      state.step=4;
state.email=action.payload.email
      toast.success("otp send successfully ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        
      });
          
    },
    [SendOtp.rejected]: (state, action) => {
      state.OtpStatus = "failed";
      toast.error("otp sending failed ... ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        
      });
    },
    
  },
});

export const {setselectedDropdownValue,openforgotModal, setEmail,closeforgotModal, setStep, setUsername, setMedium, setOTP, setNewPassword } = forgotSlice.actions;

export default forgotSlice.reducer;

