
import { createSlice } from '@reduxjs/toolkit';
const initialState={
  products:[
    {
      id: 1,
      name: "Olper's Milk Full Cream",
      price: 395,
      category: "Dairy Products",
      quantity: 1,
      image:
        "https://images.deliveryhero.io/image/darsktores-pk/8964000346549.jpg?width=75&height=75",
    },
    {
      id: 2,
      name: "Cola Next",
      price: 199,
      category: "Beverages",
      quantity: 15,
      image:
        "https://images.deliveryhero.io/image/darsktores-pk/Catagory_Banner222/41.jpg?height=96&dpi=1",
    },

    {
      id: 3,
      name: "Chocolates",
      price: 215,
      category: "Category B",
      quantity: 1,
      image:
        "https://images.deliveryhero.io/image/darsktores-pk/Category_Banner2/03.jpg?height=96&dpi=1",
    },
    {
      id: 4,
      name: "Kurlees",
      price: 73,
      category: "Snacks",
      quantity: 1,
      image:
        "https://images.deliveryhero.io/image/darsktores-pk/Category_Banner2/Snacks&conf12Septtile.jpg?height=96&dpi=1",
    },
    {
      id: 5,
      name: "Walls Chocolate",
      price: 199,
      category: "Ice Creams & Deserts",
      quantity: 15,
      image:
        "https://images.deliveryhero.io/image/darsktores-pk/Catagory_Banner222/34.jpg?height=96&dpi=1",
    }
    
  ],
  prodInCat:[]
}
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: { 
    setProdInCat: (state, action) => { 
    state.prodInCat.push(action.payload)
    

  },  
},
});

export const { setProdInCat } = productSlice.actions;
export default productSlice.reducer;
