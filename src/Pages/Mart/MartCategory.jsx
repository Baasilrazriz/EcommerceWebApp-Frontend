import React, { useEffect } from "react";
import MartHeader from "./MartHeader";
import { useParams } from "react-router-dom";
import Heading from "../../Components/GeneralComponents/Heading";
import { useDispatch, useSelector } from "react-redux";
import { addToCart} from "../../Features/Mart/cartSlice";
import ProductCard from "../../Components/MartComponents/ProductCard";
import { addTowishList } from "../../Features/Mart/wishSlice";
import Footer from "../../Components/GeneralComponents/Footer";
import { fetchProductByCategoryName } from "../../Features/Mart/categorySlice";
function MartCategory() {
  const dispatch = useDispatch();
  const { categoryName } = useParams()
  const category=categoryName
  useEffect(() => {
    dispatch(fetchProductByCategoryName(category));
  }, [dispatch]);
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
                    {items.map((product) => (
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
          <Footer/>
    </>
  );
}

export default MartCategory;
