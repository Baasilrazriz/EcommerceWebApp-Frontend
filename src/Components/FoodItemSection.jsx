import React from 'react';
import FoodItemCard from './FoodItemCard';

function FoodItemSection(props) {
    return (
        <div  className='px-[4.5rem] py-10  w-full'>
          <h1 className='text-[24px] font-[Open Sans] font-[700]'>  {props.id}</h1>
          <div className='py-10 flex gap-5 flex-wrap'>
          <FoodItemCard/>
          <FoodItemCard/>
          <FoodItemCard/>
          </div>
        </div>
    );
}

export default FoodItemSection;