import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FixedSizeList as List } from 'react-window';

import { calculateAverageRating, closeReviewModal, countTotalReviews, openReviewModal, sortByAscendingRating, sortByDescendingDate, sortByDescendingRating } from '../../Features/FoodDelivery/reviewSlice';

import RatingComponent from '../GeneralComponents/RatingComponent';
import ProgressBar from '../GeneralComponents/ProgressBar';
import ReviewCard from '../FoodDeliveryComponents/ReviewCard';


 function  MyProfileModal(props) {
    const dispatch = useDispatch();
      
      

    const isReviewModalOpen = useSelector((state) => state.review.isReviewModalOpen);
    const averageRating=useSelector(state=>state.review.averageRating);
    const reviews=useSelector(state=>state.review.reviews)
    const totalReviewsCount=useSelector(state=>state.review.totalReviewsCount);
    const items = useSelector((state) => state.restraunt.restraunts);
    
    const restraunts = items.find((item) => item.name === props.restraunt);
    const handleClose = () => {
      dispatch(closeReviewModal());
      document.body.style.overflowY = "scroll";
      
    }
    return (
        <div>
         { isReviewModalOpen&& (
        <div className=" z-50 modal-overlay fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
          <div className={` login-modal bg-white transition-all ease-in    h-[32rem] w-[35rem] rounded-md overflow-hidden`}>
            <div className=''>
          <div className="flex justify-end mt-1 mr-1 "onClick={handleClose}>
                  <button
                    className="fixed  top-32 right-[32rem]  bg-red-500 text-white px-2 py-1 rounded-full transform transition-all duration-500 ease-in-out hover:scale-110   active:animate-bounce"
                    onClick={handleClose}
                  >
                    x
                  </button>
                </div>
           <div className='mx-5   text-gray-800 flex flex-col '>

           <h1 className=' text-3xl font-[700] text-gray-800  font-sans '>Reviews</h1>     
           <h1 className=' text-lg font-[700] text-gray-700  font-sans line-clamp-1 text-ellipsis '>{restraunts.name} </h1>     
    
           </div>
           <div className='bg-[#F7F7F7] h-full'>
           <div className={`px-5 py-5  `}>
<div className='h-40 flex rounded-xl bg-white border border-gray-400 shadow-sm overflow-hidden'>
  <div className='h-full w-1/2 '>
    <div className='py-10 px-6'>
     <h1 className='pl-1 text-3xl font-[Open Sans] font-[400] text-gray-800 '>{averageRating.toFixed(1)}</h1> 
      <RatingComponent rating={averageRating.toFixed(2)}/>
      <h1 className='pl-1   text-[14px] font-[Open Sans] font-[500] text-gray-800 '>All Rating({totalReviewsCount}+)</h1> 
    </div>
    
  </div>
  <div className='py-4 h-full w-1/2 '>
<div className='flex flex-col gap-2'>
<div className=' flex gap-1'><h1 className='text-[14px] flex flex-col mt-[0.2rem] justify-center'>5</h1><img src="../assets\FoodDelivery\star.png" width={20} alt="" srcset="" /><div className='w-44 flex flex-col justify-center'><ProgressBar value={40}/></div><div>40%</div> </div>
<div className=' flex gap-1'><h1 className='text-[14px] flex flex-col mt-[0.2rem] justify-center'>4</h1><img src="../assets\FoodDelivery\star.png" width={20} alt="" srcset="" /><div className='w-44 flex flex-col justify-center'><ProgressBar value={30}/></div><div>30%</div> </div>
<div className=' flex gap-1'><h1 className='text-[14px] flex flex-col mt-[0.2rem] justify-center'>3</h1><img src="../assets\FoodDelivery\star.png" width={20} alt="" srcset="" /><div className='w-44 flex flex-col justify-center'><ProgressBar value={20}/></div><div>20%</div> </div>
<div className=' flex gap-1'><h1 className='text-[14px] flex flex-col mt-[0.2rem] justify-center'>2</h1><img src="../assets\FoodDelivery\star.png" width={20} alt="" srcset="" /><div className='w-44 flex flex-col justify-center'><ProgressBar value={5}/></div><div>5%</div> </div>
<div className=' flex gap-1'><h1 className='text-[14px] flex flex-col mt-[0.2rem] justify-center'>1</h1><img src="../assets\FoodDelivery\star.png" width={20} alt="" srcset="" /><div className='w-44 flex flex-col justify-center'><ProgressBar value={5}/></div><div>5%</div> </div>

</div>
  </div>
</div>

<div className='py-5 flex gap-4'>
<button  onClick={handlelatest} className=" ml-[0.5rem]  text-[14px] font-[Open Sans] bg-gray-200 flex justify-center rounded-full px-4 py-2 shadow-md text-gray-800 font-[400] hover:bg-gray-400 ease-in transition-all hover:scale-110">
                      Newest</button>
<button  onClick={handleAscSort} className=" ml-[0.5rem] text-[14px] font-[Open Sans] bg-gray-200 flex justify-center rounded-full px-4 py-2 shadow-md text-gray-800 font-[400] hover:bg-gray-400 ease-in transition-all hover:scale-110">
                      Highest rating</button>
<button onClick={handleDescSort} className=" ml-[0.5rem] text-[14px] font-[Open Sans] bg-gray-200 flex justify-center rounded-full px-4 py-2 shadow-md text-gray-800 font-[400] hover:bg-gray-400 ease-in transition-all hover:scale-110">
Lowest rating</button>
</div>
<div className='  '>
              <List 
                height={170} // Adjust the height accordingly
                itemCount={reviews.length}
                itemSize={140} // Adjust the size of each item
                width={"103.5%"}
              >
                {Row}
              </List>
            </div>

</div>
           </div>




            </div>
            <div>
            </div>
          </div>
        </div>
      )}
        </div>
    );
}

export default MyProfileModal;