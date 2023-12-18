
import { createSlice } from '@reduxjs/toolkit';
const initialState={
  restraunts:[
    {
      id: 1,
      name: "OPTP",
      description:"We are famous for our natural hand-cut potato fries, served with our signature toppings, as well as a range of fried and grilled burgers, flavored wings, fried chicken and a seasonal seafood range",
      category: "Burgers",
      image:
      "https://images.deliveryhero.io/image/fd-pk/LH/s6sw-hero.jpg?width=560&height=240&quality=45",
    },
    {
      id: 2,
      name: "The Big Pizza",
      description:"Biggest Pizza in Town! Yes, you heard it right we have shared here the complete details of The Big Pizza Karachi Menu",
      category: "Pizza",
      image:
        "https://images.deliveryhero.io/image/fd-pk/LH/s9sw-hero.jpg?width=560&height=240&quality=45",
    },

    // {
    //   id: 3,
    //   name: "Chocolates",
    //   price: 215,
    //   category: "Category B",
    //   quantity: 1,
    //   image:
    //     "https://images.deliveryhero.io/image/darsktores-pk/Category_Banner2/03.jpg?height=96&dpi=1",
    // },
    // {
    //   id: 4,
    //   name: "Kurlees",
    //   price: 73,
    //   category: "Snacks",
    //   quantity: 1,
    //   image:
    //     "https://images.deliveryhero.io/image/darsktores-pk/Category_Banner2/Snacks&conf12Septtile.jpg?height=96&dpi=1",
    // },
    // {
    //   id: 5,
    //   name: "Walls Chocolate",
    //   price: 199,
    //   category: "Ice Creams & Deserts",
    //   quantity: 15,
    //   image:
    //     "https://images.deliveryhero.io/image/darsktores-pk/Catagory_Banner222/34.jpg?height=96&dpi=1",
    // },
    // {
    //   id: 6,
    //   name: "Tomatoes",
    //   price: 209,
    //   category: "Fruits & Vegetables",
    //   quantity: 15,
    //   image:
    //    "../assets/tomatoes.png",
    // }

    
  ],
  prodInCat:[]
}
const restrauntSlice = createSlice({
  name: 'restraunt',
  initialState,
  reducers: { 
    setProdInCat: (state, action) => { 
    state.prodInCat.push(action.payload)
    

  },  
},
});

export const { setProdInCat } = restrauntSlice.actions;
export default restrauntSlice.reducer;
