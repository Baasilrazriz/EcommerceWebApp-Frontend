
import { createSlice } from '@reduxjs/toolkit';
const initialState={
  isDiscountModalOpen: false,
  deals : [
        {  title:"FREE DELIVERY" ,desc:"Valid for all items." },
        {  title:"Rs 225/- OFF " ,desc:"Valid for all selected items." },
      ],
  
}
const discountSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {   
    openDiscountModal: (state) => {
      
      state.isDiscountModalOpen = true;
    },
    closeDiscountModal: (state) => {
      state.isDiscountModalOpen = false;
    },
   },
});


export const { openDiscountModal, closeDiscountModal } = discountSlice.actions;
export default discountSlice.reducer;