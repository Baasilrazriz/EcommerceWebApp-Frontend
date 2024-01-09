import React from 'react';
import MartHeader from  "../Mart/MartHeader";
import Footer from '../../Components/GeneralComponents/Footer';
import ScrollableComponent from '../../Components/GeneralComponents/ScrollableComponent';
import { useDispatch, useSelector } from 'react-redux';
import CarouselDefault from '../../Components/GeneralComponents/CarouselDefault';
import Heading from '../../Components/GeneralComponents/Heading';
import { addTowishList } from '../../Features/Mart/wishSlice';
import RestrauntCard from '../../Components/FoodDeliveryComponents/RestrauntCard';

function FDHome() {
  const categories=useSelector(state=>state.cuisine.Cuisine);
  const isCartOpen= useSelector(state=>state.cart.isCartOpen)
    const carousel=useSelector(state=>state.carousel.foodimages)
    const dispatch = useDispatch();
    const items= useSelector(state=>state.restraunt.restraunts);
  const contentWidth = isCartOpen ? "w-[75%]" : "w-[100%]";
 
    return (
        <div className=''>
 <MartHeader/> 
 <div className={`mt-44  ${contentWidth} `}>
 <div className='flex justify-center'>
 <div className="w-[983px] h-[352px] rounded-xl  overflow-hidden z-0">
              <CarouselDefault car={carousel} />
            </div>
 </div>
 <div className='mx-14 my-10'>
 <Heading title="Cuisines"/>
 <ScrollableComponent categories={categories}/>
 </div>
 <div className="my-5 mx-14">
                <div  className="">
                  <Heading
                    title="All Restraunts"
                    
                  />
                  <div className="product-section  my-10 flex flex-row  flex-wrap gap-10 ">
                    {items.map((product) => (
                      <RestrauntCard
                        image={product.image}
                        name={product.name}
                        description={product.description}
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
 </div>
 <Footer/>          
        </div>
    );
}

export default FDHome;