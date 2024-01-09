import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MartHeader from '../Mart/MartHeader';

import { addTowishList } from '../../Features/Mart/wishSlice';
import RestrauntCard from '../FoodDelivery/RestrauntPage';
import Heading from '../../Components/GeneralComponents/Heading';

function FDWishList() {
    const dispatch = useDispatch();
    const wishlist=useSelector(state=>state.wish.fdwhishlist)
    return (
        <>
      <MartHeader />
      <div className="my-28 mx-14">
            
             
                <div key= "wishlist" className=" pt-20">
                  <Heading
                    title="WishList"
                    tagline={`Explore your WishList`}
                  />
                  <div className="product-section my-10 flex flex-row  flex-wrap gap-10 ">
                    {wishlist.map((product) => (
                       <RestrauntCard
                       image={product.image}
                       name={product.name}
                       description={product.description}
                       handleAddToWishList={()=>{
                         dispatch(addTowishList({
                           id: product.id,
                           name: product.name,
                           price: product.price,
                           image: product.image,
                           quantity:product.quantity,
                     }))}}
                     />
                    ))}
                  </div>
                </div>
             
            
          </div>
    </>  
    )
}

export default FDWishList
