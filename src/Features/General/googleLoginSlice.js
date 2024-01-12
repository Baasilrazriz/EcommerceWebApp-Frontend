import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import { toast } from 'react-toastify';

export const sendEmail = createAsyncThunk(
  'WelcomeController/sendEmail',
  async ({email}, { rejectWithValue }) => {
    try {
      console.log(username)
      const response = await axios.post(`https://localhost:7158/WelcomeController`, {email});
      console.log(response.data)
      return response.data; // Assuming the server responds with the created seller data
    } catch (error) {
      return rejectWithValue(error.response.data); // Assuming the server responds with an error message
    }
  }
);
export const fetchGoogleUsers = createAsyncThunk('AuthGmail/fetchGoogleUsers', async () => {
    const response = await axios.get(`https://localhost:7158/AuthGmail`);
    console.log(response.data)
    return response.data;
  });
export const CreateGoogleuser = createAsyncThunk(
  'AuthGmail/CreateGoogleuser',
  async ({ email,name,image }, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://localhost:7158/AuthGmail/CreateUser', {
        email,
        name,
        image

      })
return response.data
  } catch (error) {
      console.log(rejectWithValue(error.response.data))
      return rejectWithValue(error.response.data)

    }
  }
)

const googleLoginSlice = createSlice({
  name: 'google',
  initialState: {
    
    userId:"",
    username:"",
    email:"",
    fetchGoogleUsers:"",
    CreateGoogleuser:""
  },
  reducers: {
  

    
  },
  extraReducers: (builder) => {
    builder
    .addCase(CreateGoogleuser.fulfilled, (state,action) => {    
      console.log(state.role,action.payload.role)
if (action.payload.role===state.role) {
  state.isAuthenticated = true;
  state.isLoginModalOpen=false; 
  state.isLoggedIn=true;
  state.userId=action.payload.id;   
  state.profilepic=action.payload.profilepic;   
  state.email=action.payload.email;   
  toast.success("Logged in successfully!", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    
  });
  document.body.style.overflowY = "scroll";  
}
else{
  toast.error("incorrect credentials ", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    
  });  
}
    })
    .addCase(CreateGoogleuser.rejected, (state) => {
      state.isAuthenticated = false;
      state.isLoggedIn=false;
      toast.error("incorrect credentials ", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
      });
    
      
    })
    .addCase(fetchGoogleUsers.fulfilled, (state,action) => {    
      console.log(state.role,action.payload.role)

  state.isAuthenticated = true;
  state.isLoginModalOpen=false; 
  state.isLoggedIn=true;
  state.userId=action.payload.id;   
  state.profilepic=action.payload.profilepic;   
  state.email=action.payload.email;   
  toast.success("Logged in successfully!", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    
  });
  document.body.style.overflowY = "scroll";  

    })
    .addCase(fetchGoogleUsers.pending, (state,action) => {    
      
      
  })  
    .addCase(fetchGoogleUsers.rejected, (state) => {
      state.isAuthenticated = false;
      state.isLoggedIn=false;
      toast.error("incorrect credentials ", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
      });
    
      
    })
},

});

export const { } = googleLoginSlice.actions;
export default googleLoginSlice.reducer;
