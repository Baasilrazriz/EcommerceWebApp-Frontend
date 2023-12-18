
import { createSlice } from '@reduxjs/toolkit';
const initialState={
  Cuisine : [
        { name: 'Pizza', image: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg' },
        { name: 'Broast', image: 'https://cdn.pixabay.com/photo/2022/05/17/04/57/broasted-chicken-7201660_1280.jpg'},
        { name: 'Nihari', image: 'https://cdn.pixabay.com/photo/2020/08/17/21/31/nihari-5496504_1280.jpg'},
        { name: 'Burger', image: 'https://cdn.pixabay.com/photo/2021/06/04/11/55/burger-6309618_640.jpg'},
        { name: 'Biryani', image: 'https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043064_640.jpg'},
        { name: 'pasta', image: 'https://cdn.pixabay.com/photo/2016/03/17/22/56/pasta-1264056_640.jpg'},
        { name: 'Fries', image: 'https://cdn.pixabay.com/photo/2016/04/25/01/58/french-fries-1351062_640.jpg'},
        { name: 'Karahi', image: 'https://cdn.pixabay.com/photo/2022/06/10/05/20/chicken-karahi-7253714_1280.jpg'},
        { name: 'Shawarma', image: 'https://cdn.pixabay.com/photo/2021/01/06/10/11/shawarma-5893935_640.jpg'},
        { name: 'Ice-Cream', image: 'https://cdn.pixabay.com/photo/2017/08/03/14/38/ice-cream-2576622_640.jpg'},
        { name: 'Halwa Puri', image: 'https://cdn.pixabay.com/photo/2014/07/11/22/01/puris-390536_640.jpg'},
      ],
  
}
const CuisineSlice = createSlice({
  name: 'cuisine',
  initialState,
  reducers: {    },
});


export default CuisineSlice.reducer;
