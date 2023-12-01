import Banner from "./Components/banner"; 
import Header from "./Components/header";
import CarouselDefault from "./Components/CarouselDefault";

import Category from "./Components/Category";
import Footer from "./Components/Footer";
import Heading from "./Components/Heading";
import { useState } from "react";
import Cart from "./Components/Cart";
import ProductCard from "./Components/ProductCard";
import CategoryCard from "./Components/CategoryCard";


function App() {
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen((prev) => !prev);
  };
  const [quantity, setQuantity] = useState(1);
   const [category, setCategory] = useState([
    {name:"Woman’s Fashion"  ,image:"https://images.deliveryhero.io/image/darsktores-pk/PepsiHOB_oct23.png?height=104&dpi=1"},
    {name:"Men’s Fashion"    ,image:"https://images.deliveryhero.io/image/darsktores-pk/PepsiHOB_oct23.png?height=104&dpi=1"},
    {name:"Electronics"      ,image:"https://images.deliveryhero.io/image/darsktores-pk/PepsiHOB_oct23.png?height=104&dpi=1"},
    {name:"Home & Lifestyle" ,image:"https://images.deliveryhero.io/image/darsktores-pk/PepsiHOB_oct23.png?height=104&dpi=1"},
    {name:"Medicine"         ,image:"https://images.deliveryhero.io/image/darsktores-pk/PepsiHOB_oct23.png?height=104&dpi=1"},
    {name:"Sports & Outdoor" ,image:"https://images.deliveryhero.io/image/darsktores-pk/PepsiHOB_oct23.png?height=104&dpi=1"},
    {name:"Baby’s & Toys"    ,image:"https://images.deliveryhero.io/image/darsktores-pk/PepsiHOB_oct23.png?height=104&dpi=1"} ,
    {name:"Groceries & Pets" ,image:"https://images.deliveryhero.io/image/darsktores-pk/PepsiHOB_oct23.png?height=104&dpi=1"},
    {name:"Health & Beauty"  ,image:"https://images.deliveryhero.io/image/darsktores-pk/PepsiHOB_oct23.png?height=104&dpi=1"}
  ]);

 
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Olper's Milk Full Cream",
      price: 395,
      category: "Category A",
      quantity: 1,
      image:"https://images.deliveryhero.io/image/darsktores-pk/8964000346549.jpg?width=75&height=75",
    },
    {
      id: 2,
      name: "BrightFarms Fresh Tomato (Timatar) 1Kg",
      price: 199,
      category: "Category A",
      quantity: 15,
      image:"https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      id: 3,
      name: "Brightfields Fresh Eggs 6 pcs",
      price: 215,
      category: "Category B",
      quantity: 1,
      image:"https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Olper's Full Cream Milk Pouch Ecolean 250ml",
      price: 73,
      category: "Category B",
      quantity: 1,
      image:"https://images.deliveryhero.io/image/darsktores-pk/8964000346334.jpg?width=75&height=75",
    },
    {
      id: 5,
      name: "BrightFarms Fresh pot (Timatar) 1Kg",
      price: 199,
      category: "Category A",
      quantity: 15,
      image:"https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      name: "BrightFarms Fresh pot (Timatar) 1Kg",
      price: 199,
      category: "Category A",
      quantity: 15,
      image:"https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      name: "BrightFarms Fresh pot (Timatar) 1Kg",
      price: 199,
      category: "Category A",
      quantity: 15,
      image:"https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      name: "BrightFarms Fresh pot (Timatar) 1Kg",
      price: 199,
      category: "Category A",
      quantity: 15,
      image:"https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600",
    }
 
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId, productName, productPrice, productImage) => {
    const existingItem = cartItems.find((item) => item.id === productId);

    if (existingItem) {
      // If the item is already in the cart, update its quantity
      const updatedCart = cartItems.map((item) =>
        item.name === productName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartItems([
        ...cartItems,
        {
          id: productId,
          name: productName,
          price: productPrice,
          image: productImage,
          quantity: 1,
        },
      ]);
    }
  };
  const contentWidth = isCartOpen ? "w-[75%]" : "w-[100%]";
  const groupedProducts = {};

  items.map(product => {
    const { category } = product;
    if (!groupedProducts[category]) {
      groupedProducts[category] = [];
    }
    groupedProducts[category].push(product);
  });

  return (
    <div className="">
      <Banner />
      <Header isCartOpen={isCartOpen} toggleCart={toggleCart} />
      {isCartOpen && (
        <div className="absolute right-7   w-[25%] ">
          <Cart items={cartItems} setItems={setCartItems} />
        </div>
      )}
      <div
        className={`mt-28 flex flex-row ${contentWidth}   px-10  justify-around `}
      >
        <div className="h-full w-full ">
          <div className="mt-20 mb-24 justify-center  flex gap-4 h-auto w-full ">
            <div className="">
              <Category category={category} />
            </div>
            <div className="w-[983px] h-[352px] rounded-xl overflow-hidden">
              <CarouselDefault />
            </div>
          </div>
          <hr />
          <div className="mx-14 my-5">
          <Heading  title="Categories" tagline={`Explore our categories`}/>
              <div className=" my-10 flex flex-row  flex-wrap gap-5 ">
                        {category.map((cat) => (
                        <CategoryCard  name={cat.name} image={cat.image} />
                        ))}
              </div>
          </div>
          <div  className="my-5 mx-14">
          {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
              
              <div key={category} className="">
              <Heading  title={category} tagline={`Explore our ${category} products`}/>
              <div className="product-section my-10 flex flex-row  flex-wrap gap-5 ">
                        {categoryProducts.map((product) => (
                        <ProductCard  image={product.image} name={product.name} price={product.price} handleAddToCart={()=>{addToCart(product.id,product.name,product.price,product.image)}} />
                        
                        ))}
              </div>
            </div>
                
                
                        ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
