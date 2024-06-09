import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk('Category/fetchCategories', async () => {
 try {
  const response = await axios.get("https://localhost:7158/Category");
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
        return response.data; // Assuming the response contains the category name
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

const initialState={
  categories:[
    // {name:"Dairy Products"  ,image:"https://images.deliveryhero.io/image/darsktores-pk/Cat%20tile%20updated.png?height=96&dpi=1",link:"/dairyProducts"},
    // {name:"Ice Creams & Deserts"    ,image:"https://images.deliveryhero.io/image/darsktores-pk/Catagory_Banner222/34.jpg?height=96&dpi=1",link:"/icecream"},
    // {name:"Snacks"      ,image:"https://images.deliveryhero.io/image/darsktores-pk/Category_Banner2/Snacks&conf12Septtile.jpg?height=96&dpi=1",link:"/snacks"},
    // {name:"Chocolates" ,image:"https://images.deliveryhero.io/image/darsktores-pk/Category_Banner2/03.jpg?height=96&dpi=1",link:"/chocolates"},
    // {name:"Beverages",image:"https://images.deliveryhero.io/image/darsktores-pk/Catagory_Banner222/41.jpg?height=96&dpi=1",link:"/beverages"},
    // {name:"Fruits & Vegetables",image:"https://images.deliveryhero.io/image/darsktores-pk/Category_Banner2/16.jpg?height=104&dpi=1",link:"/fruits&Veg"},
    // {name:"Stationery"    ,image:"https://images.deliveryhero.io/image/darsktores-pk/Catagory_Banner222/31.jpg?height=96&dpi=1",link:"/stationery"} ,
    // {name:"Toys & Games" ,image:"https://images.deliveryhero.io/image/darsktores-pk/Catagory_Banner222/26.jpg?height=96&dpi=1",link:"/toys"},
    // {name:"Spices"  ,image:"https://images.deliveryhero.io/image/darsktores-pk/Spices&Recipes_tile_10sept.jpg?height=96&dpi=1",link:"/spices"},    
  ],
  prodInCat:[],
  categoryStatus:"",
  prodInCategoryStatus:"",
  fetch:0,
  pic:0,
}
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
      },
      reducers:{
        setProdInCat: (state) => {
          state.prodInCat =[];
          state.prodInCategoryStatus = "";
        },
      },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        if(state.fetch===0)
        {
          state.categoryStatus = "success";
          state.categories = action.payload;
          console.log("fetch category :"+state.categoryStatus)
          state.fetch++;
        }
        
      
      })
      .addCase(fetchCategories.pending, (state) => {
        state.categoryStatus = "pending";
        console.log("fetch category :"+state.categoryStatus)
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.categoryStatus = "failed";
        console.log("fetch category :"+state.categoryStatus)
      })
      .addCase(fetchProductByCategoryName.fulfilled, (state, action) => {
        state.prodInCategoryStatus = "success";
        state.prodInCat=action.payload;
        console.log("fetch category by name :"+state.prodInCategoryStatus)
      })
      .addCase(fetchProductByCategoryName.pending, (state, action) => {
        state.prodInCategoryStatus = "pending";
        console.log("fetch category by name :"+state.prodInCategoryStatus)
      })
      .addCase(fetchProductByCategoryName.rejected, (state, action) => {
        state.prodInCategoryStatus = "failed";
        console.log("fetch category by name :"+state.prodInCategoryStatus)
      })
  },
  
});

export const {setProdInCat} = categorySlice.actions;
export default categorySlice.reducer;
