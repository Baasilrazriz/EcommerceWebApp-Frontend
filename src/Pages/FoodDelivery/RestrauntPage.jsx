import React from "react";
import { useParams } from "react-router-dom";
import MartHeader from "../Mart/MartHeader";
import Footer from "../../Components/Footer";
import { useSelector } from "react-redux";
import DiscountCard from "../../Components/DiscountCard";

function RestrauntPage() {
  const { restraunt } = useParams();
  const items = useSelector((state) => state.restraunt.restraunts);
  const restraunts = items.find((item) => item.name === restraunt);
  return (
    <div>
      <MartHeader />
      <div className="mt-44 ">
        {restraunt ? (
          <>
            <div className="p-5 px-20 w-full  h-full flex gap-5">
              <div className="mx-4 rounded-2xl h-40 w-[13rem] overflow-hidden">
                <img
                  src={restraunts.restraunt_image}
                  alt={restraunts.name}
                  className="h-full w-full  "
                />
              </div>
              <div className="  w-full    flex flex-col gap-5 justify-start mt-7">
                <div className="mr-10 flex justify-between">
                  <h1 className="text-[38px] font-[Open Sans] text-gray-800 font-[600]">
                    {restraunts.name}{" "}
                  </h1>
                  <div className="flex flex-col gap-2">
                    <div className="flex ">
                      {" "}
                      <img
                        className="mt-[-0.15rem]"
                        height={25}
                        width={25}
                        src="../assets/FoodDelivery/star.png"
                        alt=""
                      />
                      <h1 className=" text-[18px] font-[Open Sans] text-gray-800 font-[600]">
                        4.2/5 <span className="text-gray-600">(15000+)</span>{" "}
                      </h1>
                    </div>
                    <button className="ml-[0.5rem] text-[15px] font-[Open Sans] bg-gray-200 flex justify-center rounded-full p-1 shadow-md text-gray-800 font-[600] hover:bg-gray-400 ease-in transition-all">
                      See Reviews
                    </button>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p className="text-[13px] font-[Open Sans] bg-red-100 rounded-full p-1 px-2 shadow-md flex flex-col justify-center text-red-700 font-[600]">
                    Rs.225 off
                  </p>

                  <div className=" p-1 px-2 flex justify-center gap-1">
                    <img
                      height={20}
                      width={20}
                      src="../assets/FoodDelivery/motorbike.png"
                      alt=""
                    />
                    <p className="text-[14px] font-[Open Sans] flex flex-col justify-center     text-gray-700 font-[600]">
                      35 mins
                    </p>
                  </div>

                  <p className="text-[13px] font-[Open Sans] bg-green-100 rounded-full p-1 px-2 shadow-md flex flex-col justify-center text-green-700 font-[600]">
                    Free Delivery
                  </p>
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
        <div className="px-24 py-10">
          <h1 className="text-[28px] font-[400] font-[Open Sans]">
            Available deals
          </h1>
          <div className="mt-8 flex gap-5">
          <DiscountCard />
          <DiscountCard />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default RestrauntPage;
