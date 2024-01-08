import React, { useEffect } from 'react';
import MartHeader from './MartHeader';
import Footer from '../../Components/GeneralComponents/Footer';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTowishList, fetchWishlist } from '../../Features/Mart/wishSlice';
import { addToCart, fetchCart } from '../../Features/Mart/cartSlice';

function MartProductPage(props) {
    const dispatch = useDispatch();
    const { productName } = useParams()
    const addCartStatus= useSelector(state=>state.cart.fetchCartStatus)
    const addwhishListStatus = useSelector((state) => state.wish.addwhishListStatus);      
    const items= useSelector(state=>state.product.products);
    const userId = useSelector((state) => state.auth.userId);
    const wishlist=useSelector(state=>state.wish.wishList) 
    const product = items.find((item) => item.name === productName);
    const cartItems= useSelector(state=>state.cart.cartItems)
    async function handleAddToCart(prodId)
  {
      if (userId===null||userId==="")
      {
        alert("Please login to add items to cart")
      }
      else
      {
       
        const existingItem = cartItems.find((item) => item.productId === prodId);
  
        if (existingItem) {
          // If the item exists, dispatch the putCart thunk
          // dispatch(putCart({ userId, prodId, quantity: existingItem.quantity + 1 }));
          alert("existingItem  "+existingItem.productName+""+existingItem.productId)
        } else {
          // If the item does not exist, dispatch the postCart thunk
          
            if (addCartStatus==="success"||addCartStatus==="pending") {
              console.log("cart loaded")
            }
            else{
              if(addCartStatus===""||addCartStatus==="failed")
              {
                console.log(userId,prodId)
          await dispatch(addToCart({ userID:userId,productID:prodId,quantity:1}));
          dispatch(fetchCart(userId));
              }
        
            }
          
            
    
        }
      }
    
  }
  async function  handleAddToWhishList(prodId)
  {
    console.log("status:"+  addwhishListStatus)
      if (userId===null||userId==="")
      {
        alert("Please login to add items to wishlist")
      }
      else
      {
        const existingItem = wishlist.find((item) => item.productId === prodId);
        if (existingItem) {
          // If the item exists, dispatch the putCart thunk
          // dispatch(putCart({ userId, prodId, quantity: existingItem.quantity + 1 }));
          alert("existingItem")
        } else {
          // If the item does not exist, dispatch the postCart thunk
            if (addwhishListStatus==="success"||addwhishListStatus==="pending") {
              console.log("wishlist loaded")
            }
            else{
              if(addwhishListStatus===""||addwhishListStatus==="failed")
              {
                console.log(userId,prodId)
        await  dispatch(addTowishList({productID:prodId,userID:userId}));
        dispatch(fetchWishlist(userId))
              }
        
            }
        }
            
    
        }
      }
    
  























    return (
        <>
        <div className=' scroll'>
        <MartHeader/>
        <div className='mt-44'>
       
      {product?(<>  <div className=" bg-white m-11 font-poppins dark:bg-gray-800">
    <div className="px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="flex flex-wrap ">
            <div className="w-full px-4 md:w-1/2 ">
                {/* images */}
                <div className=" overflow-hidden ">
                    <div className="relative mb-6 h-96 ">
                        <img src={product.image} alt=""
                            className="object-contain w-full h-full lg:h-full "/>
                    </div>
                    <div className="flex-wrap hidden md:flex ">
                        <div className="w-1/2 p-2 sm:w-1/4">
                            <a href="#"
                                className="block border border-fuchsia-300 dark:border-transparent dark:hover:border-fuchsia-300 hover:border-fuchsia-300">
                                <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                    className="object-cover w-full lg:h-20"/>
                            </a>
                        </div>
                        <div className="w-1/2 p-2 sm:w-1/4">
                            <a href="#"
                                className="block border border-transparent dark:border-transparent dark:hover:border-fuchsia-300 hover:border-fuchsia-300">
                                <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                    className="object-cover w-full lg:h-20"/>
                            </a>
                        </div>
                        <div className="w-1/2 p-2 sm:w-1/4">
                            <a href="#"
                                className="block border border-transparent dark:border-transparent dark:hover:border-fuchsia-300 hover:border-fuchsia-300">
                                <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                    className="object-cover w-full lg:h-20"/>
                            </a>
                        </div>
                        <div className="w-1/2 p-2 sm:w-1/4">
                            <a href="#"
                                className="block border border-transparent dark:border-transparent dark:hover:border-fuchsia-300 hover:border-fuchsia-300">
                                <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                    className="object-cover w-full lg:h-20"/>
                            </a>
                        </div>
                    </div>
                </div>
                {/* images */}
            </div>
            <div className="w-full px-4 md:w-1/2 ">
                <div className="lg:pl-20">
                    <div className="mb-8 ">
                        <span className="text-lg font-medium text-rose-500 dark:text-rose-200">New</span>
                        <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                            {product.name}</h2>
                        <div className="flex items-center mb-6">
                            <ul className="flex mr-2">
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor"
                                            className="w-4 mr-1 text-fuchsia-500 dark:text-gray-400 bi bi-star "
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor"
                                            className="w-4 mr-1 text-fuchsia-500 dark:text-gray-400 bi bi-star "
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor"
                                            className="w-4 mr-1 text-fuchsia-500 dark:text-gray-400 bi bi-star "
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor"
                                            className="w-4 mr-1 text-fuchsia-500 dark:text-gray-400 bi bi-star "
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                            <p className="text-xs dark:text-gray-400 ">(2 customer reviews)</p>
                        </div>
                        <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                            Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                            Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                        </p>
                        <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                            <span>{product.price}</span>
                            <span
                                className="text-base font-normal text-gray-500 line-through dark:text-gray-400">$1500.99</span>
                        </p>
                        <p className="text-green-600 dark:text-green-300 ">7 in stock</p>
                    </div>
                    <div className="flex items-center mb-8">
                        <h2 className="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                            Colors:</h2>
                        <div className="flex flex-wrap -mx-2 -mb-2">
                            <button
                                className="p-1 mb-2 mr-2 border border-transparent hover:border-fuchsia-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                                <div className="w-6 h-6 bg-cyan-300"></div>
                            </button>
                            <button
                                className="p-1 mb-2 mr-2 border border-transparent hover:border-fuchsia-400 dark:border-gray-800 dark:hover:border-gray-400">
                                <div className="w-6 h-6 bg-green-300 "></div>
                            </button>
                            <button
                                className="p-1 mb-2 border border-transparent hover:border-fuchsia-400 dark:border-gray-800 dark:hover:border-gray-400">
                                <div className="w-6 h-6 bg-fuchsia-200 "></div>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center mb-8">
                        <h2 className="w-16 text-xl font-bold dark:text-gray-400">
                            Size:</h2>
                        <div className="flex flex-wrap -mx-2 -mb-2">
                            <button
                                className="py-1 mb-2 mr-1 border w-11 hover:border-fuchsia-400 dark:border-gray-400 hover:text-fuchsia-600 dark:hover:border-gray-300 dark:text-gray-400">XL
                            </button>
                            <button
                                className="py-1 mb-2 mr-1 border w-11 hover:border-fuchsia-400 hover:text-fuchsia-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">S
                            </button>
                            <button
                                className="py-1 mb-2 mr-1 border w-11 hover:border-fuchsia-400 hover:text-fuchsia-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">M
                            </button>
                            <button
                                className="py-1 mb-2 mr-1 border w-11 hover:border-fuchsia-400 hover:text-fuchsia-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">XS
                            </button>
                        </div>
                    </div>
                    <div className="w-32 mb-8 ">
                        <label for=""
                            className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
                        <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                            <button
                              
    // onClick={
    //     async () => {
    //     if(cart.quantity>1){
    //       dispatch(setfetchCartStatus(""));    
    //     try {
    //       await dispatch(UpdateCart({ quantity: item.quantity - 1, cart_id: item.cartId }));
    //        dispatch(fetchCart(userId));
    //     } catch (error) {
    //       console.error("Error updating cart:", error);
    //       // Handle error (show message to user, etc.)
    //     }
          
    //     }
   
    //   }
    // }
                                className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                <span className="m-auto text-2xl font-thin">-</span>
                            </button>
                            <input type="text"readOnly
                                className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                placeholder="1"/>
                            <button onClick={() => dispatch(incrementQuantity(product.id))}
                                className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                <span className="m-auto text-2xl font-thin">+</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center -mx-4 ">
                        <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                            <button  onClick={()=>{handleAddToCart(product.productID)}}
                                className="flex items-center justify-center w-full p-4 text-fuchsia-500 border border-fuchsia-500 rounded-md dark:text-gray-200 dark:border-fuchsia-600 hover:bg-fuchsia-600 hover:border-fuchsia-600 hover:text-gray-100 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:hover:border-fuchsia-700 dark:hover:text-gray-300">
                                Add to Cart
                            </button>
                        </div>
                        <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                            <button onClick={
                                ()=>{
                                    handleAddToWhishList(product.id)
                      }
                    }
                                className="flex items-center justify-center w-full p-4 text-fuchsia-500 border border-fuchsia-500 rounded-md dark:text-gray-200 dark:border-fuchsia-600 hover:bg-fuchsia-600 hover:border-fuchsia-600 hover:text-gray-100 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:hover:border-fuchsia-700 dark:hover:text-gray-300">
                                Add to wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></>):(<p>no {productName}</p>)}
        </div>
        <div className=''>
        <Footer/>
        </div>
        </div>
        </>
    );
}

export default MartProductPage;