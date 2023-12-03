
import { createSlice } from '@reduxjs/toolkit';
const initialState=[
    {name:"Dairy Products"  ,image:"https://images.deliveryhero.io/image/darsktores-pk/Cat%20tile%20updated.png?height=96&dpi=1",link:"/dairyProducts"},
    {name:"Ice Creams & Deserts"    ,image:"https://images.deliveryhero.io/image/darsktores-pk/Catagory_Banner222/34.jpg?height=96&dpi=1",link:"/icecream"},
    {name:"Snacks"      ,image:"https://images.deliveryhero.io/image/darsktores-pk/Category_Banner2/Snacks&conf12Septtile.jpg?height=96&dpi=1",link:"/snacks"},
    {name:"Chocolates" ,image:"https://images.deliveryhero.io/image/darsktores-pk/Category_Banner2/03.jpg?height=96&dpi=1",link:"/chocolates"},
    {name:"Beverages",image:"https://images.deliveryhero.io/image/darsktores-pk/Catagory_Banner222/41.jpg?height=96&dpi=1",link:"/beverages"},
    {name:"Tea & Cofee" ,image:"https://images.deliveryhero.io/image/darsktores-pk/PepsiHOB_oct23.png?height=104&dpi=1",link:"/tea"},
    {name:"Stationery"    ,image:"https://images.deliveryhero.io/image/darsktores-pk/Catagory_Banner222/31.jpg?height=96&dpi=1",link:"/stationery"} ,
    {name:"Toys & Games" ,image:"https://images.deliveryhero.io/image/darsktores-pk/Catagory_Banner222/26.jpg?height=96&dpi=1",link:"/toys"},
    {name:"Spices"  ,image:"https://images.deliveryhero.io/image/darsktores-pk/Spices&Recipes_tile_10sept.jpg?height=96&dpi=1",link:"/spices"}
  ]
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;
