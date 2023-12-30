
import { createSlice } from '@reduxjs/toolkit';
const initialState={
  foodimages : [
        { name: 'Pizza', image: 'https://pizzamax.com.pk/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55083%2Fweb_splash%2F1685603645.jpg&w=1920&q=90' },
        { name: 'Broast', image: 'https://www.kfcpakistan.com/static/media/favorites-banner.afff26bc6d0127f68baa.png'},
        { name: 'Nihari', image: 'https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1697710299-header-2.jpg&w=1920&q=75'},
        { name: 'Burger', image: 'https://www.optp.biz/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F24%2Fweb_splash%2F1699075486.jpg&w=1920&q=90'},
        { name: 'Biryani', image: 'https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043064_640.jpg'},
        { name: 'pasta', image: 'https://cdn.pixabay.com/photo/2016/03/17/22/56/pasta-1264056_640.jpg'},
        { name: 'Fries', image: 'https://cdn.pixabay.com/photo/2016/04/25/01/58/french-fries-1351062_640.jpg'},
        { name: 'Karahi', image: 'https://cdn.pixabay.com/photo/2022/06/10/05/20/chicken-karahi-7253714_1280.jpg'},
        { name: 'Shawarma', image: 'https://cdn.pixabay.com/photo/2021/01/06/10/11/shawarma-5893935_640.jpg'},
        { name: 'Ice-Cream', image: 'https://cdn.pixabay.com/photo/2017/08/03/14/38/ice-cream-2576622_640.jpg'},
        { name: 'Halwa Puri', image: 'https://cdn.pixabay.com/photo/2014/07/11/22/01/puris-390536_640.jpg'},
      ],
      martimages : [
        { name: 'image 1', image: 'https://icms-image.slatic.net/images/ims-web/96e0df13-5792-4bdc-a9e8-145c1b15980c.jpg' },
        { name: 'image 2', image: 'https://icms-image.slatic.net/images/ims-web/c379ba7d-4c58-4064-a0d9-841d89d4483a.jpg'},
        { name: 'image 3', image: 'https://icms-image.slatic.net/images/ims-web/f9d85387-6808-44e5-af3e-383f377b686d.png'},
        { name: 'image 4', image: 'https://icms-image.slatic.net/images/ims-web/f9d85387-6808-44e5-af3e-383f377b686d.png'},
        { name: 'image 5', image: 'https://icms-image.slatic.net/images/ims-web/f9d85387-6808-44e5-af3e-383f377b686d.png'},
        { name: 'image  6', image: 'https://icms-image.slatic.net/images/ims-web/38e091fa-bcba-4a50-853f-da941f6900ad.jpg'}
      ],
  
}
const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers:{},
});


export default carouselSlice.reducer;
