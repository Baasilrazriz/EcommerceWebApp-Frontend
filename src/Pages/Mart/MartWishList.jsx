import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MartHeader from './MartHeader';
import Heading from '../../Components/GeneralComponents/Heading';
import ProductCard from '../../Components/MartComponents/ProductCard';
import { addToCart } from '../../Features/Mart/cartSlice';
import { addTowishList } from '../../Features/Mart/wishSlice';

function MartWishList() {
    const dispatch = useDispatch();
    const wishlist=useSelector(state=>state.wish.wishList)
    return (
        <>
      <MartHeader />
      <div className="my-28 mx-14">
            
             
                <div key= "wishlist" className=" pt-20">
                  <Heading
                    title="WishList"
                    tagline={`Explore your WishList`}
                  />
                  <div className="product-section my-10 flex flex-row  flex-wrap gap-5 ">
                    {wishlist.map((product) => (
                      <ProductCard
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        handleAddToCart={() => {
                          dispatch(
                            addToCart({
                              id: product.id,
                              name: product.name,
                              price: product.price,
                              image: product.image,
                            })
                          );
                        }}
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

export default MartWishList
