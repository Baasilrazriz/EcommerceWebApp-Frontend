
import { createSlice } from '@reduxjs/toolkit';
const initialState={
  isRestrauntModalOpen: false,
  restraunts:[
    {
      id: 1,
      name: "OPTP",
      description:"We are famous for our natural hand-cut potato fries, served with our signature toppings, as well as a range of fried and grilled burgers, flavored wings, fried chicken and a seasonal seafood range",
      category: "Burgers",
      loc:"Block 12, Gulistan-e-Jauhar Karachi, Karachi City, Sindh, Pakistan",
      map:"blob:https://www.foodpanda.pk/f83ad57b-f2dc-46aa-adb0-95933b1a8e82", 
      image:
      "https://images.deliveryhero.io/image/fd-pk/LH/s6sw-hero.jpg?width=560&height=240&quality=45",
      restraunt_image:"https://images.deliveryhero.io/image/fd-pk/pk-logos/ca5vf-logo.jpg?width=200&height=200",
    },
    {
      id: 2,
      name: "The Big Pizza",
      description:"Biggest Pizza in Town! Yes, you heard it right we have shared here the complete details of The Big Pizza Karachi Menu",
      category: "Pizza",
      loc:"",
      image:
        "https://images.deliveryhero.io/image/fd-pk/LH/s9sw-hero.jpg?width=560&height=240&quality=45",
        restraunt_image:"https://thebigpizza.pk/_next/image?url=https%3A%2F%2Fconsole.indolj.io%2Fupload%2F1660313444-Logo-png.png&w=128&q=75"
        
    },

    
  ],
  prodInCat:[]
}
const restrauntSlice = createSlice({
  name: 'restraunt',
  initialState,
  reducers: { 
    openRestrauntModal: (state) => {
      
      state.isRestrauntModalOpen = true;
    },
    closeRestrauntModal: (state) => {
      state.isRestrauntModalOpen = false;
    }, 
},
});

export const { openRestrauntModal, closeRestrauntModal }= restrauntSlice.actions;
export default restrauntSlice.reducer;
