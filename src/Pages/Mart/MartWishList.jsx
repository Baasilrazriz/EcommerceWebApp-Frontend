import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MartHeader from './MartHeader';
import Heading from '../../Components/GeneralComponents/Heading';
import ProductCard from '../../Components/MartComponents/ProductCard';
import { addToCart } from '../../Features/Mart/cartSlice';
import { addTowishList, fetchWishlist } from '../../Features/Mart/wishSlice';

function MartWishList() {
    const dispatch = useDispatch();
    // const fetchwishListStatus = useSelector((state) => state.wish.fetchwishListStatus);
    // const addwhishListStatus = useSelector((state) => state.wish.addwhishListStatus);
    const userId = useSelector((state) => state.auth.userId);
    // useEffect(() => {
    //   if (fetchwishListStatus==="success"||fetchwishListStatus==="pending") {
    //     console.log("whish fetch/ loaded") 
    //   }
    //   else
    //   {
    //     if(fetchwishListStatus===""||fetchwishListStatus==="failed")
    //     {
    //       dispatch(fetchWishlist(userId));
    //     }
    //   }
    //   if (addwhishListStatus==="success"||addwhishListStatus==="pending") {
    //     console.log("wish post/ loaded")
    //   }
    //   else{
    //     if(addwhishListStatus===""||addwhishListStatus==="failed")
    //     {
    //       dispatch(addTowishList());
    //     }
    //   }
    // }, [fetchwishListStatus,addwhishListStatus, dispatch]);
    const handleAddToCart=(prodId)=>{
      if (userId===null)
      {
        alert("Please login to add items to cart")
      }
      else
      {
        // dispatch(
        //   addToCart({
        //     prodId: product.productID,
        //     name: product.name,
        //     price: product.price,
        //     image: product.image,
        //   })
        // );
        const existingItem = cartItems.find((item) => item.id === prodId);
  
        if (existingItem) {
          // If the item exists, dispatch the putCart thunk
          alert("existingItem")
          // dispatch(putCart({ userId, prodId, quantity: existingItem.quantity + 1 }));
        } else {
          // If the item does not exist, dispatch the postCart thunk
          dispatch(addToCart({ userId, prodId,quantity:1}));
        }
          //postcart
        //   const items={
        //     id: action.payload.id,
        //     name: action.payload.name,
        //     price: action.payload.price,
        //     image: action.payload.image,
        //     quantity: 1,
        // }
        // state.cartItems.push(items)
      }
    
  }    
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
                   {wishlist.length>0?(<>
                    {wishlist.map((product) => (
                      <ProductCard
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        handleAddToCart={() => {
                          handleAddToCart(handleAddToCart(product.id))                         
                        }}
                      />
                    ))}
                   </>):<>
                   
                   <div class="w-full h-[30vh] grid place-content-center">
              <p class="text-center">No products found.</p>
          
          </div>
                   </>}

                  </div>
                </div>
             
            
          </div>
    </>  
    )
}

export default MartWishList
