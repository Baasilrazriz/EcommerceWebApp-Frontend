import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FixedSizeList as List } from 'react-window';

import { calculateAverageRating, closeReviewModal, countTotalReviews, openReviewModal, sortByAscendingRating, sortByDescendingDate, sortByDescendingRating } from '../../Features/FoodDelivery/reviewSlice';

import RatingComponent from '../GeneralComponents/RatingComponent';
import ProgressBar from '../GeneralComponents/ProgressBar';
import ReviewCard from '../FoodDeliveryComponents/ReviewCard';
import MyProfile from '../GeneralComponents/MyProfile';



 function  MyProfileModal(props) {
    const dispatch = useDispatch();
      
     const isProfileModalOpen = useSelector((state) => state.profile.isProfileModalOpen);
    
    // const handleClose = () => {
    //   dispatch(closeprofileModal());
    //   document.body.style.overflowY = "scroll";
      
    // }
    return (
      <>
      {isProfileModalOpen && (
  <MyProfile/>
      )}
    </>
    );
}

export default MyProfileModal;