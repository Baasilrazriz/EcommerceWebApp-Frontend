import React, { useState } from 'react';
import { closeRestrauntModal } from '../../Features/FoodDelivery/restrauntSlice';
import { useDispatch, useSelector } from 'react-redux';

function RestrauntinfoModal(props) {
    
    const dispatch = useDispatch();
    const isRestrauntModalOpen = useSelector((state) => state.restraunt.isRestrauntModalOpen);
    
    const items = useSelector((state) => state.restraunt.restraunts);
    const [toggle,setToggle]=useState(false);
    const restraunts = items.find((item) => item.name === props.restraunt);
    const handleClose = () => {
      dispatch(closeRestrauntModal());
      document.body.style.overflowY = "scroll";
      
    };
    const handleTimeClick=()=>{
        setToggle(!toggle)
        
    };
     const contentHeight =toggle? "h-fit":"h-10";
    return (
        <div>
         { isRestrauntModalOpen&& (
        <div className=" z-50 modal-overlay fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
          <div className={` login-modal bg-white transition-all ease-in    h-[32rem] w-[35rem] rounded-md overflow-x-hidden overflow-y-auto`}>
            <div className=''>
          <div className="flex justify-end mt-1 mr-1 "onClick={handleClose}>
                  <button
                    className="relative top-1 right-1  bg-red-500 text-white px-2 py-1 rounded-full transform transition-all duration-500 ease-in-out hover:scale-110   active:animate-bounce"
                    onClick={handleClose}
                  >
                    x
                  </button>
                </div>
           <div className='mt-[-2rem]  text-gray-800 flex flex-col gap-7'>
<div >
<img className='h-full w-full object-cover' src={restraunts.image} alt="" srcset="" />
    </div>           
           <h1 className='mx-5 text-3xl font-[700] text-gray-800  font-sans '>{restraunts.name} </h1>     
    <hr />
           </div>
<div className={`mx-5 my-5  ${contentHeight}  overflow-hidden`}>
<div className={` p-1 flex justify-between`}>
<div className=' flex gap-3'>
<img src="../../assets/FoodDelivery/clock.png" height={10} width={30}  alt="clock" srcset="" />
<h1 className=' text-2xl font-[700] text-gray-800  font-sans '>Closed untill 12:00</h1>     
</div>
 <button onClick={handleTimeClick} className='rounded-full hover:scale-105 text-lg  font-medium   h-8  w-fit px-4 text-red-600 border border-gray-400 hover:shadow-xl '>view more <span className='relative top-[0.45rem]  text-2xl'>^</span></button> 
 
</div>
<p className='p-2  text-xl font-[500] text-gray-700  font-sans '>
 Monday - Sunday <br />
<p className='pl-1 text-gray-600 text-lg font-bold'>
00:00 - 02:00 <br />
12:00 - 23:59 <br />

</p>
 </p>
 
</div>
<hr />

<div className='mx-6 my-10'>
<div className=' flex gap-4 '>
<img src="../../assets/FoodDelivery/placeholder.png" height={10} width={30}  alt="clock" srcset="" />
<h1 className=' text-[18px] font-[700] text-gray-800  font-sans w-66'>{restraunts.loc}</h1>     
</div>
<div  className='my-5 mx-2 border rounded-lg overflow-hidden h-[15rem]'>
<iframe className='h-full w-full object-cover' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.35889150005!2d67.13159657482846!3d24.91984094287989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338fa4bb02883%3A0x29542a88d3b797fe!2sOPTP%20-%20Gulistan-e-Johar!5e0!3m2!1sen!2s!4v1703316479143!5m2!1sen!2s"></iframe>
</div>
</div>
<hr />
<div className='mx-6 my-5'>
  <h1 className=' text-2xl font-[700] text-gray-800  font-sans'>
Restraunt info
  </h1>
<p className='pl-1 text-base font-medium  text-gray-600 py-3 font-sans'>
Gulshan-e-Jamal ( Block 7, 8, 9 ) delivery is not available for this blocks , Sorry for inconvenience
</p>
</div>
<div className='mx-6 my-5'>
  <h1 className=' text-2xl font-[700] text-gray-800  font-sans'>
Delivery Fee 
 </h1>
<p className='pl-1  text-base font-medium  text-gray-600 py-3 font-sans'>
Delivery fee is charged based on time of the day and distance
</p>
</div>
<div className='mx-6 my-5'>
  <h1 className=' text-2xl font-[700] text-gray-800  font-sans'>
  Minimum order
  </h1>
<p className='pl-1 text-base font-medium  text-gray-600 py-3 font-sans'>
For orders below Rs. 249.00, we charge a small order fee.

</p>
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

export default RestrauntinfoModal;