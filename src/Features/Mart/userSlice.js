import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'


export const loginUser = createAsyncThunk(
  'login/loginUser',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://localhost:7158/Auth/login', {
        username,
          password

      })
      
      let id,email,profilepic;
if(response.data.validUser.role==='Admin') {  
            try {
             
              const roleDataResponse = await axios.get(`https://localhost:7158/Admin/${response.data.validUser.userName}`);
              console.log(roleDataResponse.data)
              id = roleDataResponse.data.adminID;     
              profilepic=roleDataResponse.data.image;
              email=roleDataResponse.data.email
            }
              catch (error) {
                return rejectWithValue(error.response.data)
              }
            }
            else if(response.data.validUser.role==='Seller') {  
              try {
      
                const roleDataResponse = await axios.get(`https://localhost:7158/Seller/${response.data.validUser.userName}`);
                console.log(roleDataResponse.data)
                id = roleDataResponse.data.sellerID; 
                profilepic=roleDataResponse.data.image;   
              
                email=roleDataResponse.data.email
              }
                catch (error) {
                  return rejectWithValue(error.response.data)
                }
              }
              else if(response.data.validUser.role==='User') {  
                try {
      
                  const roleDataResponse = await axios.get(`https://localhost:7158/User/${response.data.validUser.userName}`);
                  console.log(roleDataResponse.data)
                  id = roleDataResponse.data.userID;   
                  profilepic=roleDataResponse.data.image;  
              
                  email=roleDataResponse.data.email
                }
                  catch (error) {
                    return rejectWithValue(error.response.data)
                  }
                }
                else if(response.data.validUser.role==='Rider') {  
                  try {
                    console.log("enter in rider")    
                    const roleDataResponse = await axios.get(`https://localhost:7158/Rider/${response.data.validUser.userName}`);
                    console.log(roleDataResponse.data)
                    id = roleDataResponse.data.riderID;  
                    profilepic=roleDataResponse.data.image;   
              
                email=roleDataResponse.data.email
                  }
                    catch (error) {
                      return rejectWithValue(error.response.data)
                    }
                  
  
    
      // Combine login data with role-specific data
      
       
    }
    console.log("end");
      return {id,profilepic,email,username}
  } catch (error) {
      console.log(rejectWithValue(error.response.data))
      return rejectWithValue(error.response.data)

    }
  }
)

const userSlice = createSlice({
  name: 'auth',
  initialState: {
    role:"",
    userId:"",
    username:"",
    email:"",
    isAuthenticated:false,
    isLoggedIn:false,
    isLoginModalOpen: false,
    profilepic:'',
    showPassword:false
  },
  reducers: {
    loggedIn: (state) => {
      state.isLoggedIn =true;
    },
    loggedOut: (state) => {
      state.isLoggedIn =false;
      state.isAuthenticated = false;
      state.userId=null;   
      state.profilepic=null;   
      state.email=null;   
state.username=null;

    },
    openLoginModal: (state) => {
      state.isLoginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.isLoginModalOpen = false;
    },
    togglePasswordVisibility:(state)=>{
      state.showPassword = !state.showPassword;
    },
    setProfilePic:(state,action)=>{
      state.profilepic = action.payload;
    },
    setEmail:(state,action)=>{
      state.email = action.payload;
    },
    setUserRole: (state, action) => {
      state.role = action.payload.role;
    },
    setUsernames: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    
    setUserId: (state, action) => {
      state.userId = action.payload;
    },

    
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginUser.fulfilled, (state,action) => {
      state.isAuthenticated = true;
      state.isLoginModalOpen=false;
      state.isLoggedIn=true;
      console.log("enter in extra reducer");
      state.userId=action.payload.id;   
      state.profilepic=action.payload.profilepic;   
      state.email=action.payload.email;   
      state.username=action.payload.username;
      console.log(action.payload.id)    
      console.log(state.username)
      console.log(action.payload.email)
      console.log(action.payload.profilepic)  
      document.body.style.overflowY = "scroll";  
    })
    .addCase(loginUser.rejected, (state) => {
      state.isAuthenticated = false;
      state.isLoggedIn=false;
      alert(`incorrect credentials or something went wrong ${username} AND ${password}`);
    })
    
  },
  
});
export const {openLoginModal, closeLoginModal,loggedIn,loggedOut,setUserId,setProfilePic, setUserRole,setEmail, setUsernames, setPassword,togglePasswordVisibility } = userSlice.actions;
export default userSlice.reducer;
