import React from 'react'
import { NavLink } from 'react-router-dom'

function CategoryCard(props) {
    return (
        <>
        <NavLink to={`/mart/category/${props.name}`}>
        <div  className=' flex flex-col     h-40   w-44  hover:bg-gray-100 items-center justify-center border-2 shadow-lg overflow-hidden' >
            <img className='w-24 h-24 object-cover ' src="../assets/tomatoes.png" alt={props.name} srcset="" />
            <h1 className='text-lg text-center  my-2 '>{props.name}</h1>
        </div>
        </NavLink>
        </>
    )
}

export default CategoryCard
