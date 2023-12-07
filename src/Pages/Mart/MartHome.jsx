import Banner from "../../Components/Banner";
import Header from "../../Components/header";
import CarouselDefault from "../../Components/CarouselDefault";
import Category from "../../Components/Category";
import Heading from "../../Components/Heading";
import { useState } from "react";
import Cart from "../../Components/Cart";
import ProductCard from "../../Components/ProductCard";
import CategoryCard from "../../Components/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { addToCart,toggleCart } from "../../Features/Mart/cartSlice";
import MartHeader from "./MartHeader";
import { addTowishList } from "../../Features/Mart/wishSlice";

function MartHome() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.cat);
  const items= useSelector(state=>state.product.products);
  const isCartOpen= useSelector(state=>state.cart.isCartOpen)
  
  
  const contentWidth = isCartOpen ? "w-[75%]" : "w-[100%]";
  const groupedProducts = {};

  items.map((product) => {
    const { category } = product;
    if (!groupedProducts[category]) {
      groupedProducts[category] = [];
    }
    groupedProducts[category].push(product);
  });

  return (
    
    <div className="">
      <MartHeader/>
      <div
        className={`mt-28 flex flex-row ${contentWidth}   px-10  justify-around `}
      >
        <div className="h-full w-full ">
          <div className="mt-20 mb-24 justify-center  flex gap-4 h-auto w-full ">
            <div className="">
              <Category />
            </div>
            <div className="w-[983px] h-[352px] rounded-xl overflow-hidden z-1">
              <CarouselDefault />
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
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MartHome;
