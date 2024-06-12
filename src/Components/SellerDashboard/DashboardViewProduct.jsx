import React, { useEffect } from 'react';

import NavBar from '../../Components/DashboardComponents/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Features/Mart/productSlice';

function DashboardViewProduct(props) {
    const dispatch = useDispatch();
    const prodStatus= useSelector(state=>state.product.prodStatus);
    const items= useSelector(state=>state.product.products);
    useEffect(() => {
        if(prodStatus==="")
            {
              dispatch(fetchProducts());
            }
            
            else if(prodStatus==="failed")
            {
              toast.error("Failed to load products", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                
              });
              
            }
            
       
    }, [prodStatus])
    
    return (
        
        <>
        <div className=' border rounded-xl h-fit mt-3 p-2 w-full overflow-hidden    shadow-lg'>
     <NavBar/>
    
    </div>
     
    <div className=' border rounded-xl h-[39.8rem] mt-3 p-2 w-full     shadow-lg'>
 <h1 className="text-left text-4xl font-bold p-2 text-gray-800 px-5 ">View Sellers</h1>
 <div className='border border-gray-300 shadow-md mx-3 rounded-2xl my-2 h-[34rem] w-[73rem] overflow-x-auto overflow-y-auto scroll' >
 <table className="w-full min-w-[640px] table-auto   ">
        <thead className='border-2'>
          <tr >
            <th className="border border-blue-gray-50 py-3 px-3  text-center">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Image</p>
            </th>
          <th className="border border-blue-gray-50 py-3 px-3  text-center">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">ProductId</p>
            </th>
            <th className="border border-blue-gray-50 py-3 px-3  text-center">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">ProductName</p>
            </th>
            <th className="border border-blue-gray-50 py-3 px-3  text-center">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">ProductPrice</p>
            </th>
            <th className="border border-blue-gray-50 py-3 px-3  text-center">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Description</p>
            </th>
            <th className="border border-blue-gray-50 py-3 px-3  text-center">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Stock</p>
            </th>
            <th className="border border-blue-gray-50 py-3 px-3  text-center">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Discount</p>
            </th>
            <th className="border border-blue-gray-50 py-3 px-3  text-center">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">categoryName</p>
            </th>
            <th className="border border-blue-gray-50 py-3 px-3  text-center">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">vendorName</p>
            </th>
          
</tr>
        </thead>
        <tbody>
        {items.map((project) => (
    <tr key={project.productID}>
        
      <td className="border border-blue-gray-50 py-2 w-fit px-2 whitespace-nowrap text-center "> <div className='h-10 w-10 rounded-full overflow-hidden'><img  src={project.image} alt="" srcset="" className='h-full w-full object-cover'/></div>  </td>
      <td className="border border-blue-gray-50 py-2 w-fit px-2 whitespace-nowrap text-center ">   <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">{project.productID}</p></td>
      <td className="border border-blue-gray-50 py-2 w-fit px-2 whitespace-nowrap text-center ">   <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">{project.name}</p></td>
      <td className="border border-blue-gray-50 py-2 w-fit px-2 whitespace-nowrap text-center ">   <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">{project.price}</p></td>
      <td className="border border-blue-gray-50 py-2 w-fit px-2 whitespace-nowrap text-center ">   <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">{project.description}</p></td>
      <td className="border border-blue-gray-50 py-2 w-fit px-2 whitespace-nowrap text-center ">   <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">{project.stock}</p></td>
      <td className="border border-blue-gray-50 py-2 w-fit px-2 whitespace-nowrap text-center ">   <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">{project.discount}</p></td>
      <td className="border border-blue-gray-50 py-2 w-fit px-2 whitespace-nowrap text-center ">   <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">{project.categoryID}</p></td>
      <td className="border border-blue-gray-50 py-2 w-fit px-2 whitespace-nowrap text-center ">   <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">{project.vendorID}</p></td>
      
      {/* Add other data cells here for each property you want to display */}
    </tr>
  ))}
  
  
  
  

        </tbody>
        
      </table>  

 </div>

    </div>
 
   </>
 
 




        
  
    );
}

export default DashboardViewProduct;