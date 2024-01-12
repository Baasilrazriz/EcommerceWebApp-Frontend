import React from 'react';
import LandingNavbar from '../Components/LandingPageComponents/LandingNavbar';
import LandingCards from '../Components/LandingPageComponents/LandingCards';
import { NavLink } from 'react-router-dom';
import Footer from '../Components/GeneralComponents/Footer';

function LandingPage(props) {
    return (
        <div className=' h-screen z-0  '> 
            <div className='bg-white'>
            <LandingNavbar/>
            </div>
            <hr />
            <div className='h-full w-full '>
                <img src="../assets/8274197_3835559.jpg" alt="" />
            </div>
            <div className=' pt-10  bg-gray-200 '>
            <div className='px-20 pt-16  bg-gray-200'>
                        <label htmlFor="username" className='text-left text-6xl font-bold   text-gray-700'>Select any of our favourite </label> 
          </div>
                <div className='z-0 flex gap-20 px-36 pt-10 pb-36 '>
            <LandingCards title="Door  Delivery" link="/Fooddelivery/Home"  image="../assets/LandingPage/fast-food-6974507_1280 (1).jpg" desc=
"Savor the flavors of your favorite restaurants from the comfort of your home. Experience a world of culinary delights, freshly prepared and delivered swiftly to your doorstep with just a click!"/>
            <LandingCards title="Door  Mart" link='/mart/Home'  image="../assets/loginbg2.jpg" desc=
"Shop Smart with Our Door Mart: A World of Convenience at Your Fingertips! Explore a vast selection of groceries, essentials, and more, all delivered quickly and safely to your home. Effortless shopping, endless choices."/>
            
            </div>
            <div>
                <img src="../assets/10212.jpg" alt="" />
            </div>
            </div>
            <Footer/>
        </div>
    );
}

export default LandingPage;