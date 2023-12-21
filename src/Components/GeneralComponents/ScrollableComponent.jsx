import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

function ScrollableComponent (props) {
  const scrollRef = useRef(null);



  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center space-x-2 m-10 ">
      <button
        onClick={() => scroll('left')}
        className="bg-red-500 text-white rounded-full px-3 py-2"
      >
        {'<'}
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth scrollbar-hide "
      >
        {props.categories.map((category, index) => (
          <div key={index} className="flex-none w-36 h-32 mx-1 overflow-hidden rounded-lg border shadow-lg ">
            <div className='h-24 hover:scale-110'>
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
            </div>
            <p className="text-center">{category.name}</p>
          </div>
        ))}
        
      </div>

      <button
        onClick={() => scroll('right')}
        className="bg-red-500 text-white rounded-full px-3 py-2"
      >
        {'>'}
      </button>
    </div>
  );
};

export default ScrollableComponent;

// import React, { useRef } from 'react';

// const ScrollableComponent = () => {
//   const scrollContainerRef = useRef(null);

//   const deals = [
//     {
//       id: 1,
//       title: "The New York Pizza",
//       image: "https://nyp.com.pk/admin//assets/uploads/items/NewYorkStyle/266.jpg",
//       rating: "4.1",
//       reviewCount: "4000+",
//       category: "Pasta",
//       deliveryTime: "35 min",
//       deliveryFee: "Free",
//       priceRange: "$$$",
//       tags: ["Featured", "Gift: Free delivery"]
//     },
//     {
//       id: 2,
//       title: "OTPP - Gulistan...",
//       image: "https://www.optp.biz/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F24%2Fdish_image%2F1701938970.png&w=128&q=90",
//       rating: "4.1",
//       reviewCount: "15000+",
//       category: "Fast Food",
//       deliveryTime: "20 min",
//       deliveryFee: "Free",
//       priceRange: "$$$",
//       tags: ["Rs. 225 off", "Gift: Free delivery"]
//     },
//     // ... Add more deals as needed
//   ];

//   const scroll = (direction) => {
//     if (scrollContainerRef.current) {
//       const { current: container } = scrollContainerRef;
//       const scrollAmount = container.offsetWidth / 2; // Scroll half the width of the container
//       container.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <div className="relative">
//       <h2 className="text-2xl font-bold text-red-600 mb-2 px-6">Cricket deals & discounts</h2>
//       <div className="flex items-center">
//         <button
//           onClick={() => scroll('left')}
//           className="absolute left-0 z-10 bg-red-500 text-white p-2 rounded-full focus:outline-none"
//           aria-label="Scroll left"
//         >
//           {'<'}
//         </button>
//         <div
//           ref={scrollContainerRef}
//           className="flex overflow-x-auto scroll-smooth scrollbar-hide mx-8"
//         >
//           {deals.map((deal) => (
//             <div key={deal.id} className="flex-none w-80 rounded-lg shadow-lg bg-white m-2 p-4">
//               <img
//                 className="h-40 w-full object-cover rounded-lg"
//                 src={deal.image}
//                 alt={deal.title}
//               />
//               <div className="mt-2">
//                 <div className="text-lg font-semibold truncate">{deal.title}</div>
//                 <div className="text-yellow-400">{`${deal.rating} (${deal.reviewCount})`}</div>
//                 <div className="text-gray-500">{deal.category}</div>
//                 <div className="flex justify-between items-center text-gray-600 text-sm mt-1">
//                   <span>{deal.deliveryTime}</span>
//                   <span>{deal.deliveryFee}</span>
//                 </div>
//                 <div className="mt-2 flex space-x-2">
//                   {deal.tags.map((tag, index) => (
//                     <span key={index} className="text-xs text-white bg-red-500 px-2 py-1 rounded-full">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={() => scroll('right')}
//           className="absolute right-0 z-10 bg-red-500 text-white p-2 rounded-full focus:outline-none"
//           aria-label="Scroll right"
//         >
//           {'>'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ScrollableComponent;