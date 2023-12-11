import React from "react";
import MartHeader from "./MartHeader";
import { useParams } from "react-router-dom";
import Heading from "../../Components/Heading";
import { useDispatch, useSelector } from "react-redux";
import { addToCart} from "../../Features/Mart/cartSlice";
import ProductCard from "../../Components/ProductCard";
import { addTowishList } from "../../Features/Mart/wishSlice";
import Footer from "../../Components/Footer";
function MartCategory() {
    const dispatch = useDispatch();
  const { categoryName } = useParams()
  const category=categoryName

const categoryProducts=useSelector(state=>state.product.products)
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
                    {categoryProducts.map((product) => (
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
