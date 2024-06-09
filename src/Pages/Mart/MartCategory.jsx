
import React, { useEffect } from "react";
import MartHeader from "./MartHeader";
import { toast } from 'react-toastify';

import { useParams } from "react-router-dom";
import Heading from "../../Components/GeneralComponents/Heading";
import { useDispatch, useSelector } from "react-redux";
import { addToCart} from "../../Features/Mart/cartSlice";
import ProductCard from "../../Components/MartComponents/ProductCard";
import { addTowishList } from "../../Features/Mart/wishSlice";
import Footer from "../../Components/GeneralComponents/Footer";
import { fetchProductByCategoryName } from "../../Features/Mart/categorySlice";
function MartCategory() {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const { categoryName } = useParams()
  const prodInCategoryStatus = useSelector((state) => state.category.prodInCategoryStatus);
  const category=categoryName
  useEffect(() => {
    if(prodInCategoryStatus==="")
    { 
      dispatch(fetchProductByCategoryName(category));
      

    }
    
  }, [prodInCategoryStatus,dispatch]); 
const items=useSelector(state=>state.category.prodInCat)
  return (
    <>
      <MartHeader />
      <div className="my-28 mx-14">
                <div key={category} className="pt-20">
                  <Heading
                    title={category}
                    tagline={`Explore our ${category} products`}
                  />
                  <div className="product-section my-10 flex flex-row  flex-wrap gap-5 ">
                    {prodInCategoryStatus==="pending"?(
                    <><div class="w-full h-[30vh] grid place-content-center">
                 <p class="text-center">loading products...</p>
             </div></>):prodInCategoryStatus==="success"?(items.map((product) => (
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
                    ))):(<>                   
                      <div class="w-full h-[30vh] grid place-content-center">
                 <p class="text-center">No products found.</p>
             
             </div>
   </>)}
                  </div>
                </div>
             
            
          </div>
          <Footer/>
    </>
  );
}

export default MartCategory;
