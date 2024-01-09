import React from "react";

function DiscountCard(props) {
  
  return (
    <div className=" h-28 rounded-2xl w-[19rem]  bg-red-50 hover:scale-105 hover:bg-red-100 text-red-900 transition-all ease-in">
      <div className="p-4 w-66">
        <div className="flex gap-1">
          <img
            className="mt-[-0.15rem]"
            height={10}
            width={40}
            src="../../assets/FoodDelivery/discount.png"
            alt=""
          />
          <h1 className="flex flex-col justify-center text-[18px] font-[Open Sans] font-[600]">
{props.title}
          </h1>
        </div>
        <p className="ml-10 my-1 w-36 text-ellipsis line-clamp-2"> {props.desc}</p>
      </div>
    </div>
  );
}

export default DiscountCard;
