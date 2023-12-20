
import { createSlice } from '@reduxjs/toolkit';
const initialState={
     sections : [
        { name: 'Popular', href: '#popular', count: 6 },
        { name: 'Promotion', href: '#promotion', count: 1 },
        { name: 'Pau-Pau Faves', href: '#pau-pau-faves', count: 1 },
        { name: 'Strong Pepsi Deals', href: '#strong-pepsi-deals', count: 1 },
        { name: 'Meal Box', href: '#meal-box', count: 5 },
        { name: 'Family Deals', href: '#family-deals', count: 4 },
        { name: 'Chicky Meals', href: '#chicky-meals', count: 4 },
      ],
}
const menuSectionSlice = createSlice({
  name: 'menuSection',
  initialState,
  reducers: {    },
});


export default menuSectionSlice.reducer;
