// SearchResults.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/MartComponents/ProductCard";
import Heading from "../Components/GeneralComponents/Heading";
import MartHeader from "./Mart/MartHeader";
import { addToCart } from "../Features/Mart/cartSlice";
import { addTowishList } from "../Features/Mart/wishSlice";

const SearchedPage = () => {
    const dispatch=useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const items = useSelector((state) => state.product.products);

  // Filter products based on the search term
  const filteredProducts = items.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <MartHeader />
    <div className="my-28 mx-14">
          
           
              <div key= "wishlist" className=" pt-20">
                <Heading
                  title="Search Page"
                  tagline={`Search Results for "${searchTerm===""?"All":searchTerm}"`}
                />
                <div className="product-section my-10 flex flex-row  flex-wrap gap-5 ">
                {filteredProducts.length > 0 ? (
           filteredProducts.map((product) => (
     
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
             ))
         ) : (
            <div class="w-full h-[30vh] grid place-content-center">
              <p class="text-center">No products found.</p>
          
          </div>
          
        )}
                </div>
              </div>
    
          
        </div>
  </>  
    // <div>
    //   <h2 className="text-2xl font-semibold mb-4">Search Results for "{searchTerm}"</h2>
    //   <div className="product-section my-10 flex flex-row flex-wrap gap-5">
    //     {filteredProducts.length > 0 ? (
    //       filteredProducts.map((product) => (
    //         <ProductCard
    //           key={product.id}
    //           image={product.image}
    //           name={product.name}
    //           price={product.price}
    //           // Add other props as needed
    //         />
    //       ))
    //     ) : (
    //       <p>No products found.</p>
    //     )}
    //   </div>
    // </div>
  );
};

export default SearchedPage;
