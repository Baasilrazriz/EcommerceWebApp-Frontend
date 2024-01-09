import React from 'react';
import LandingNavbar from '../Components/LandingPageComponents/LandingNavbar';
import LandingCards from '../Components/LandingPageComponents/LandingCards';
import { NavLink } from 'react-router-dom';

function LandingPage(props) {
    return (
        <div className=' h-screen z-0  bg-gray-200'> 
            <LandingNavbar/>
            <div className='z-0 flex gap-20 mx-36 my-36'>
            <LandingCards title="Door  Delivery" link="/Fooddelivery/Home"  image="../assets/LandingPage/fast-food-6974507_1280 (1).jpg" desc=
"Savor the flavors of your favorite restaurants from the comfort of your home. Experience a world of culinary delights, freshly prepared and delivered swiftly to your doorstep with just a click!"/>
            <LandingCards title="Door  Mart" link='/mart/Home'  image="../assets/loginbg2.jpg" desc=
"Shop Smart with Our Door Mart: A World of Convenience at Your Fingertips! Explore a vast selection of groceries, essentials, and more, all delivered quickly and safely to your home. Effortless shopping, endless choices."/>
            
            </div>
        </div>
    );
}

export default LandingPage;