
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';
export const validateUser = createAsyncThunk(
  'Forgot/validateUser',
  async ({username}, { rejectWithValue }) => {
    try {
      console.log(username)
      const response = await axios.post(` https://localhost:7158/Forgot/ValidateUsername`, {username});
      
      const email=response.data.email;
      const uname=response.data.userName;
      const userID=response.data.userID;
      return {email,uname,userID}; // Assuming the server responds with the created seller data
    } catch (error) {
      return rejectWithValue(error.response.data); // Assuming the server responds with an error message
    }
  }
);
export const SendOtp = createAsyncThunk(
  'Forgot/SendOtp',
  async ({username,email}, { rejectWithValue }) => {
    try {
      const response = await axios.post(`https://localhost:7158/Forgot/InititateRecovery`, {username,email});
      
return response.data
    } catch (error) {
      return rejectWithValue(error.response.data); // Assuming the server responds with an error message
    }
  }
);
export const validateOtp = createAsyncThunk(
  'Forgot/validateOtp',
  async ({username,otp}, { rejectWithValue }) => {
    try {
      
      const response = await axios.post(`https://localhost:7158/Forgot/ValidateOTP`, {username,otp});
      
return response.data
    } catch (error) {
      return rejectWithValue(error.response.data); // Assuming the server responds with an error message
    }
  }
);
export const updatePassword = createAsyncThunk(
  'User/updatePassword',
  async ({userId,password}, { rejectWithValue }) => {
    try {
      console.log(userId)
      console.log(password)
      const response = await axios.patch(`https://localhost:7158/User/${userId}`, {password});
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
    userId:'',
    email:'',
    encryptedemail:"",
    medium: '',
    otp: '',
    isForgotModalOpen:false,
    newPassword: '',
    selectedDropdownValue: '',
    OtpStatus:"",
    validStatus:"",
    OtpCheckStatus:"",
    updatePasswordStatus:"",
  },
  reducers: {
    
    setselectedDropdownValue: (state, action) => {
        state.selectedDropdownValue = action.payload;
      },
    setStep:(state,action)=>{
state.step=action.payload
    },
   
    setMedium: (state, action) => {
      state.medium = action.payload;
    },
   
    setEncryptedEmail: (state, action) => {
      state.encryptedemail = action.payload;
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
    },
    [validateUser.fulfilled]: (state, action) => {
      state.validStatus = "success";
      state.username=action.payload.uname;
      state.userId=action.payload.userID;
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
    [validateUser.rejected]: (state) => {
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
    [validateOtp.pending]: (state) => {
      state.OtpCheckStatus = "pending";
    },
    [validateOtp.fulfilled]: (state, action) => {
      state.OtpCheckStatus = "success";      
      state.step=5;          
    },
    [validateOtp.rejected]: (state, action) => {
      state.OtpCheckStatus = "failed";
    },
    [updatePassword.pending]: (state) => {
      state.updatePasswordStatus = "pending";
    },
    [updatePassword.fulfilled]: (state, action) => {
      state.updatePasswordStatus = "success";      
      state.step=5;          
    },
    [updatePassword.rejected]: (state, action) => {
      state.updatePasswordStatus = "failed";
    },
    
  },
});

export const {setselectedDropdownValue,openforgotModal, setEncryptedEmail,closeforgotModal, setStep, setUsername, setMedium, setOTP, setNewPassword } = forgotSlice.actions;

export default forgotSlice.reducer;

