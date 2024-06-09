import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { setProdInCat } from '../../Features/Mart/categorySlice';




function Category() {
  const dispatch = useDispatch();
  const categories=useSelector(state=>state.category.categories)
  const navigation=useNavigate()
  const handleCategory=async(name)=>{
    await dispatch(setProdInCat())
    navigation(`/mart/category/${name}`) 
  }

  return (
    <div className=" h-[22rem]   w-full rounded-lg overflow-x-hidden overflow-y-scroll scroll  border border-gray-400 shadow-2xl">
      <ul className='  flex-col items-start  gap-4 inline-flex   bg-white   w-60   '>
        {categories.map((cat, index) => (
          <li className="ml-2 w-full text-left hover:bg-gray-50  text-black text-base font-normal  font-['Poppins'] leading-normal" key={index}>
            <h1 onClick={()=>{handleCategory(cat.name)}} ClassName="text-blue-500" >{cat.name}</h1>
          </li>
      ))}
      
        
      </ul>
      
    </div>
  );
}

export default Category;
