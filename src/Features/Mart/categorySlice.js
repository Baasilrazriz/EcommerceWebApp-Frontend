
import { createSlice } from '@reduxjs/toolkit';
const initialState={
  cat:[
    {name:"Dairy Products"  ,image:"https://images.deliveryhero.io/image/darsktores-pk/Cat%20tile%20updated.png?height=96&dpi=1",link:"/dairyProducts"},
    {name:"Ice Creams & Deserts"    ,image:"https://images.deliveryhero.io/image/darsktores-pk/Catagory_Banner222/34.jpg?height=96&dpi=1",link:"/icecream"},
    {name:"Snacks"      ,image:"https://images.deliveryhero.io/image/darsktores-pk/Category_Banner2/Snacks&conf12Septtile.jpg?height=96&dpi=1",link:"/snacks"},
    {name:"Chocolates" ,image:"https://images.deliveryhero.io/image/darsktores-pk/Category_Banner2/03.jpg?height=96&dpi=1",link:"/chocolates"},
    {name:"Beverages",image:"https://images.deliveryhero.io/image/darsktores-pk/Catagory_Banner222/41.jpg?height=96&dpi=1",link:"/beverages"},
    {name:"Fruits & Vegetables",image:"https://images.deliveryhero.io/image/darsktores-pk/Category_Banner2/16.jpg?height=104&dpi=1",link:"/fruits&Veg"},
    {name:"Stationery"    ,image:"https://images.deliveryhero.io/image/darsktores-pk/Catagory_Banner222/31.jpg?height=96&dpi=1",link:"/stationery"} ,
    {name:"Toys & Games" ,image:"https://images.deliveryhero.io/image/darsktores-pk/Catagory_Banner222/26.jpg?height=96&dpi=1",link:"/toys"},
    {name:"Spices"  ,image:"https://images.deliveryhero.io/image/darsktores-pk/Spices&Recipes_tile_10sept.jpg?height=96&dpi=1",link:"/spices"},    
  ],
  prodInCat:[]
}
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setProdInCat:(state,action)=>{
      const cat=Object.groupBy(action.payload.item,({category})=>category);
      state.prodInCat.push(cat);
    }
    
  },
});

export const { setProdInCat } = categorySlice.actions;
export default categorySlice.reducer;
