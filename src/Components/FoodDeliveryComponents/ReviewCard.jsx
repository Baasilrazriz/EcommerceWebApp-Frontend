import React from 'react';
import RatingComponent from '../GeneralComponents/RatingComponent';
 function ReviewCard(props) {
    return (
        <div className='' id={props.key}>
            <div className='flex flex-col gap-2 p-5 mx-5 h-[8rem] rounded-xl bg-white shadow-sm border border-gray-400 overflow-hidden'>
<h1 className='text-xl font-bold font-sans'>{props.name}</h1>
      <RatingComponent rating={props.rating}/>
<p className='text-lg  font-thin text-gray-700'>{props.desc}</p>
            </div>
        </div>
    );
}

export default ReviewCard;