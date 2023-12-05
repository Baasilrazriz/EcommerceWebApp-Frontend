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
import { addToCart } from "../../Features/Mart/cartSlice";
import {setProdInCat} from "../../Features/Mart/categorySlice"
function MartHome() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.cat);
  const [isCartOpen, setCartOpen] = useState(false);
  
  const toggleCart = () => {
    setCartOpen((prev) => !prev);
  };

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Olper's Milk Full Cream",
      price: 395,
      category: "Dairy Products",
      quantity: 1,
      image:
        "https://images.deliveryhero.io/image/darsktores-pk/8964000346549.jpg?width=75&height=75",
    },
    {
      id: 2,
      name: "Cola Next",
      price: 199,
      category: "Beverages",
      quantity: 15,
      image:
        "https://images.deliveryhero.io/image/darsktores-pk/Catagory_Banner222/41.jpg?height=96&dpi=1",
    },

    {
      id: 3,
      name: "Chocolates",
      price: 215,
      category: "Category B",
      quantity: 1,
      image:
        "https://images.deliveryhero.io/image/darsktores-pk/Category_Banner2/03.jpg?height=96&dpi=1",
    },
    {
      id: 4,
      name: "Kurlees",
      price: 73,
      category: "Snacks",
      quantity: 1,
      image:
        "https://images.deliveryhero.io/image/darsktores-pk/Category_Banner2/Snacks&conf12Septtile.jpg?height=96&dpi=1",
    },
    {
      id: 5,
      name: "Walls Chocolate",
      price: 199,
      category: "Ice Creams & Deserts",
      quantity: 15,
      image:
        "https://images.deliveryhero.io/image/darsktores-pk/Catagory_Banner222/34.jpg?height=96&dpi=1",
    }
    
  ]);

  
  
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
      <Banner />
      <Header toggleCart={toggleCart} />
      {isCartOpen && (
        <div className="absolute right-7   w-[25%] ">
          <Cart />
        </div>
      )}
      <div
        className={`mt-28 flex flex-row ${contentWidth}   px-10  justify-around `}
      >
        <div className="h-full w-full ">
          <div className="mt-20 mb-24 justify-center  flex gap-4 h-auto w-full ">
            <div className="">
              <Category />
            </div>
            <div className="w-[983px] h-[352px] rounded-xl overflow-hidden">
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
