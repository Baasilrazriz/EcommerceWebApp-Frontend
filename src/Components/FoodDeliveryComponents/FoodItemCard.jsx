import React from 'react';
import { addToCart } from '../../Features/Mart/cartSlice';
import { useDispatch } from 'react-redux';

function FoodItemCard(props) {
    const dispatch = useDispatch();
    return (
        <div className='flex  py-4 px-4 h-48 w-[27.8rem] border border-black rounded-2xl shadow-md overflow-hidden'>
       <div className='flex flex-col '>
       <h1 className='text-[16px] font-[Open Sans] font-[600]'>Chicken Fillet Sandwich</h1>
        <p className='mt-4 text-[16px] line-clamp-3 text-ellipsis font-[Open Sans] text-gray-600    w-[16rem] text-justify  font-medium'>Wrap Yourself in Saudi Chicken Delight: Garlic Mayo, Hand-Cut Fries, and Pickles Unite in Pita!</p>
        <h1 className='text-[18px] font-[Open Sans] font-[600]  mt-12'>Rs.699</h1>
       </div>
       <div className='flex flex-col'>
       <div className=" rounded-2xl  w-44 overflow-hidden">
                <img
                  src="https://images.deliveryhero.io/image/fd-pk/Products/33168176.jpg??width=500"
                  alt="ok"
                  className="h-full w-full  "
                />
              </div>
              <button
        className="mx-[7.7rem] mb-[-4rem] text-green-500 hover:bg-green-800 hover:text-white border-2 bg-gray-800 rounded-full h-10 w-10 "
        onClick={ () => {
            dispatch(
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
              })
            );
          }}
      > 
  +      
      </button>
       </div>
        </div>
    );
}

export default FoodItemCard;