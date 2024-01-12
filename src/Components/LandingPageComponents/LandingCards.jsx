import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setModule } from '../../Features/LandingPage/LandingPageSlice';

function LandingCards(props) {
const dispatch=useDispatch()
    const nav=useNavigate();
    return (
        <div onClick={()=>{nav(props.link);dispatch(setModule(props.link)) }} className=' cursor-pointer relative flex gap-5   py-4 px-4  h-80 w-1/2 border border-black rounded-2xl shadow-md overflow-hidden hover:scale-105 bg-gray-800'>
       <div className='flex flex-col '>
       <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-blue-gray-600">{props.title}</span> </h1>
        <p className='mt-4 text-[16px] text-ellipsis font-[Open Sans] text-gray-500     w-[16rem] text-justify italic  font-medium'>{props.desc}</p>
       </div>
       <div className=' rounded-xl overflow-hidden'> <img src={props.image} className='h-full w-full object-cover'></img> </div>
       
        </div>
    );
}

export default LandingCards;
