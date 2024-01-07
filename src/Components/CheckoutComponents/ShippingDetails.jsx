import React, { useState } from 'react';
import { goToNextStep } from '../../Features/General/navigationSlice';
import { useDispatch } from 'react-redux';

function ShippingDetails(props) {
    const dispatch=useDispatch()
    const [address, setAddress] = useState('123, Electric avenue');
    const [firstLine, setFirstLine] = useState('123');
    const [streetName, setStreetName] = useState('Electric avenue');
    const [postcode, setPostcode] = useState('ABC - 123');
    const [shipping, setShipping] = useState('Free delivery');
    const handlebuttonClick=(e)=>{
        e.preventDefault();
        dispatch(goToNextStep())
      }
    return (
        <div >
        <h2 className="text-2xl font-semibold mb-4">Shipping details</h2>
        
        {/* Saved Address Dropdown */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="saved-address">
            Use saved address
          </label>
          <select
            id="saved-address"
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          >
            <option value="123, Electric avenue">123, Electric avenue</option>
            {/* Additional saved addresses would go here */}
          </select>
        </div>
  
        {/* First Line of Address Input */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="first-line">
            First line of address
          </label>
          <input
            type="text"
            id="first-line"
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            value={firstLine}
            onChange={(e) => setFirstLine(e.target.value)}
          />
        </div>
  
        {/* Street Name Input */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="street-name">
            Street name
          </label>
          <input
            type="text"
            id="street-name"
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            value={streetName}
            onChange={(e) => setStreetName(e.target.value)}
          />
        </div>
  
        {/* Postcode and Shipping Dropdown */}
        <div className="flex justify-between mb-6">
          <div className="w-1/2 mr-2">
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="postcode">
              Postcode
            </label>
            <input
              type="text"
              id="postcode"
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="shipping">
              Select shipping
            </label>
            <select
              id="shipping"
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              value={shipping}
              onChange={(e) => setShipping(e.target.value)}
            >
              <option value="Free delivery">Free delivery</option>
              {/* Additional shipping options would go here */}
            </select>
          </div>
        </div>
  
        {/* Action Buttons */}
        <div className="flex justify-between">
          <button className="px-6 py-2 border rounded-md text-gray-700 bg-white hover:bg-gray-100">
            Cancel order
          </button>
          <button onClick={handlebuttonClick} className="px-6 py-2 border rounded-md text-white bg-blue-500 hover:bg-blue-600">
            Payment
          </button>
        </div>
      </div>
    );
}

export default ShippingDetails;