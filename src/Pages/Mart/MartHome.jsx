
import CarouselDefault from "../../Components/GeneralComponents/CarouselDefault";
import Category from "../../Components/MartComponents/Category";
import Heading from "../../Components/GeneralComponents/Heading";
import ProductCard from "../../Components/MartComponents/ProductCard";
import CategoryCard from "../../Components/MartComponents/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { addToCart,toggleCart } from "../../Features/Mart/cartSlice";
import MartHeader from "./MartHeader";
import { addTowishList, fetchWishlist } from "../../Features/Mart/wishSlice";
import Footer from "../../Components/GeneralComponents/Footer";
import { useEffect } from "react";
import {  fetchProducts } from "../../Features/Mart/productSlice";
import { fetchCategories } from "../../Features/Mart/categorySlice";

function MartHome() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const prodStatus= useSelector(state=>state.product.prodStatus);
  const catStatus = useSelector((state) => state.category.catStatus);
  const categories = useSelector((state) => state.category.cat);
  const carousel=useSelector(state=>state.carousel.martimages)
  const items= useSelector(state=>state.product.products);
  const wishlist=useSelector(state=>state.wish.wishList)
  const isCartOpen= useSelector(state=>state.cart.isCartOpen)
  const cartItems= useSelector(state=>state.cart.cartItems)
  const addCartStatus= useSelector(state=>state.cart.fetchCartStatus)
  const addwhishListStatus = useSelector((state) => state.wish.addwhishListStatus);
  const fetchwishListStatus = useSelector((state) => state.wish.fetchwishListStatus);

  useEffect(() => {
    if (catStatus==="success"||catStatus==="pending") {
      console.log("cat loaded")
    }
    else
    {
      if(catStatus===""||catStatus==="failed")
      {
        dispatch(fetchCategories());
      }

    }
    if (prodStatus==="success"||prodStatus==="pending") {
      console.log("prod loaded")
    }
    else{
      if(prodStatus===""||prodStatus==="failed")
      {
        dispatch(fetchProducts());
      }
      console.log(fetchwishListStatus)
    if (fetchwishListStatus==="success"||fetchwishListStatus==="pending") {
      console.log("prod loaded")
    }
    else{
      if(fetchwishListStatus===""||fetchwishListStatus==="failed")
      {
        dispatch(fetchWishlist(userId));
      }
    }
    }
 
  }, [prodStatus,catStatus, dispatch]);
  
  function getCatNameById( catId) {
    const category = categories.find(cat => cat.categoryID === catId);
    return category ? category.name : null;
  }
  function handleAddToCart(prodId)
  {
      if (userId===null||userId==="")
      {
        alert("Please login to add items to cart")
      }
      else
      {
       
        const existingItem = cartItems.find((item) => item.productID === prodId);
  
        if (existingItem) {
          // If the item exists, dispatch the putCart thunk
          // dispatch(putCart({ userId, prodId, quantity: existingItem.quantity + 1 }));
          alert("existingItem")
        } else {
          // If the item does not exist, dispatch the postCart thunk
          
            if (addCartStatus==="success"||addCartStatus==="pending") {
              
            }
            else{
              if(addCartStatus===""||addCartStatus==="failed")
              {
                dispatch(addToCart({ userId, prodId,quantity:1}));
              }
        
            }
          
            
    
        }
      }
    
  }
  function handleAddToWhishList(prodId)
  {
      if (userId===null||userId==="")
      {
        alert("Please login to add items to wishlist")
      }
      else
      {
        const existingItem = wishlist.find((item) => item.productID === prodId);
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
                console.log("widshlist:"+addwhishListStatus)
                dispatch(addTowishList({prodId,userId}));
              }
        
            }
          
            
    
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
  const contentWidth = isCartOpen ? "w-[75%]" : "w-[100%]";
  const groupedProducts = {};

  items.map((product) => {
    const { categoryID } = product;
  const catName= getCatNameById(categoryID);
    if (!groupedProducts[catName]) {
      groupedProducts[catName] = [];
    }
    groupedProducts[catName].push(product);
  });

  return (
    
    <div className="">
      <MartHeader/>
      <div
        className={`mt-28 flex flex-row ${contentWidth}   px-10  j  ustify-around `}
      >
        <div className="h-full w-full ">
          <div className="mt-20 mb-24 justify-center  flex gap-4 h-auto w-full ">
            <div className="">
              <Category />
            </div>
            <div className="w-[983px] h-[352px] rounded-xl overflow-hidden z-0">
            <CarouselDefault car={carousel} />
            </div>
          </div>
          <hr />
          <div className="mx-14 my-5">
            <Heading title="Categories" tagline={`Explore our categories`} />
            <div className=" my-10 flex flex-row  flex-wrap gap-5 ">
              {categories.map((cat) => (
                <CategoryCard name={cat.name} image={cat.image} />
              ))}
            </div>
          </div>
          <div className="my-5 mx-14">
            {Object.entries(groupedProducts).map(
              ([category, categoryProducts]) => (
                <div key={category} className="">
                  <Heading
                    title={category}
                    tagline={`Explore our ${category} products`}
                  />
                  <div className="product-section my-10 flex flex-row  flex-wrap gap-5 ">
                    
                    {categoryProducts.map((product) => (
                      <ProductCard
                      id={product.productID}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        handleAddToCart={()=>{handleAddToCart(product.productID)}}
                        handleAddToWishList={()=>{handleAddToWhishList(product.productID)
                        }}
                      />
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default MartHome;
