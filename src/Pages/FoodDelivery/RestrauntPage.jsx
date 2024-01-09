import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MartHeader from "../Mart/MartHeader";
import Footer from "../../Components/GeneralComponents/Footer";
import { useDispatch, useSelector } from "react-redux";
import DiscountCard from "../../Components/FoodDeliveryComponents/DiscountCard";
import MenuBar from "../../Components/FoodDeliveryComponents/MenuBar";
import FoodItemSection from "../../Components/FoodDeliveryComponents/FoodItemSection";
import { openDiscountModal } from "../../Features/FoodDelivery/discountSlice";
import DiscountModal from "../../Components/Modals/DiscountModal";
import { openRestrauntModal } from "../../Features/FoodDelivery/restrauntSlice";
import RestrauntinfoModal from "../../Components/Modals/RestrauntinfoModal";
import { calculateAverageRating, countTotalReviews, openReviewModal } from "../../Features/FoodDelivery/reviewSlice";
import ReviewModal from "../../Components/Modals/ReviewModal";

function RestrauntPage() {
  const { restraunt } = useParams();
  const dispatch = useDispatch();
  const [isReviewModalReady, setIsReviewModalReady] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await dispatch(calculateAverageRating());
      await dispatch(countTotalReviews());
      setIsReviewModalReady(true);
    }

    fetchData();
  }, [dispatch]);
  const averageRating=useSelector(state=>state.review.averageRating);
  const totalReviewsCount=useSelector(state=>state.review.totalReviewsCount);
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const items = useSelector((state) => state.restraunt.restraunts);
  const restraunts = items.find((item) => item.name === restraunt);
  const sections = useSelector(state=>state.menuSection.sections)
  const isCartOpen= useSelector(state=>state.cart.isCartOpen)
 const discount=useSelector(state=>state.discount.deals);  
  const contentWidth = isCartOpen ? "w-[75%]" : "w-[100%]";
  const handleOpenDiscountModal = (dtitle,ddesc) => {
      document.body.style.overflowY = "hidden";
      dispatch(openDiscountModal());
      
      setTitle(dtitle);
      setDesc(ddesc)    
  };
  const handleOpenRestrauntModal = () => {
    document.body.style.overflowY = "hidden";
    dispatch(openRestrauntModal());
    
};
  const handleOpenReviewModal = () => {
    document.body.style.overflowY = "hidden";
    dispatch(openReviewModal());
    
};
  return (
    <div>
      <MartHeader />
      <div className={`mt-44 ${contentWidth}`}>
        {restraunt ? (
          <>
            <div className="p-5 px-20 w-full  h-full flex gap-5">
              <div className="mx-4 rounded-2xl h-40 w-[13rem] overflow-hidden shadow-sm">
                <img
                  src={restraunts.restraunt_image}
                  alt={restraunts.name}
                  className="h-full w-full  object-cover "
                />
              </div>
              <div className="  w-full    flex flex-col gap-5 justify-start mt-7">
                <div className="mr-10 flex justify-between">
                  <h1 className="text-[38px] font-[Open Sans] text-gray-800 font-[600]">
                    {restraunts.name}
                  </h1>
                  <div className="mt-[-1rem] flex flex-col gap-2">
                    <div className="flex ">
                      <div onClick={handleOpenRestrauntModal}>

                      <img 
                        className="mt-[-0.15rem]"
                        height={25}
                        width={25}
                        src="../../assets/FoodDelivery/star.png"
                        alt=""
                        />
                        </div>
                        
                      <h1 className=" text-[18px] font-[Open Sans] text-gray-800 font-[600]">
                      {averageRating.toFixed(1)}/5 <span className="text-gray-600">({totalReviewsCount}+)</span>
                      </h1>
                    </div>
                    <button onClick={handleOpenReviewModal} className=" ml-[0.5rem] text-[15px] font-[Open Sans] bg-gray-200 flex justify-center rounded-full p-1 shadow-md text-gray-800 font-[600] hover:bg-gray-400 ease-in transition-all hover:scale-110">
                      See Reviews
                    </button>
                    {isReviewModalReady && <ReviewModal restraunt={restraunt} />}
                  </div>
                </div>
                <div className="flex gap-2 mt-2 ">
                  <p className="text-[13px] font-[Open Sans] bg-red-100 rounded-full p-1 px-2 shadow-md flex flex-col justify-center text-red-700 font-[600]">
                    Rs.225 off
                  </p>

                  <div className=" p-1 px-2 flex justify-center gap-1">
                    <img
                      height={20}
                      width={20}
                      src="../../assets/FoodDelivery/motorbike.png"
                      alt=""
                    />
                    <p className="text-[14px] font-[Open Sans] flex flex-col justify-center     text-gray-700 font-[600]">
                      35 mins
                    </p>
                  </div>

                  <p className="text-[13px] font-[Open Sans]  bg-green-100 rounded-full p-1 px-2 shadow-md flex flex-col justify-center text-green-700 font-[600]">
                    Free Delivery
                  </p>
                  <div  onClick={handleOpenRestrauntModal} className="cursor-pointer p-1 px-2 flex justify-center gap-1 bg-gray-300 rounded-full hover:bg-gray-200  shadow-md  text-gray-700 font-[600] hover:scale-105 transition-all ease-in">
                   <p className="rounded-full border bg-gray-800 text-white py-[0.05rem] px-2">i</p>
                    <p className="text-[14px] font-[Open Sans] flex flex-col justify-center     text-gray-700 font-[600]">
                    More Detail     
                    </p>
                  </div>
<RestrauntinfoModal restraunt={restraunt}/>

                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <p>no {restraunt}</p>
          </>
        )}
        <hr />
        <div className=" py-10">
          <div className="px-24">
            <h1 className="text-[28px] font-[400] font-[Open Sans]">
              Available deals
            </h1>
            <div className="my-8 flex gap-5">
{discount? (discount.map(disc=>(<div className=" cursor-pointer"  onClick={()=>{handleOpenDiscountModal(disc.title,disc.desc)
}}><DiscountCard
                title={disc.title}
                desc={disc.desc}
              /></div>))  ):<h1 className="grid place-items-center  h-full w-full text-2xl text-red-700" >No discount available.</h1>}
         <DiscountModal title={title} desc={desc}/>
              
            </div>
            
          </div>
          <hr />
          <div className=" sticky top-36 z-20 ">
            <MenuBar />
          </div>
          {sections.map((section) => (  
          <div id={section.href.slice(1,Infinity)}>
              <FoodItemSection id={section.name} />
          </div>
              ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default RestrauntPage;
