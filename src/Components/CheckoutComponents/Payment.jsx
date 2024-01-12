import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Payment(props) {
    const [savedCard, setSavedCard] = useState('Mastercard ending 234');
    const [nameOnCard, setNameOnCard] = useState('Pomaline Moses Olanrewaju');
   
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const cardElement = elements.getElement(CardNumberElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
                name: nameOnCard,
            },
        });

        if (error) {
            alert('[error]', error);
        } else {
          
      toast.success("payment done successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        
      });
        }
        
    };  
    // Handlers for form inputs and dropdowns would go here
    // ...
  
    return (
      <div className="">
        <h2 className="text-2xl font-semibold mb-6">Payment Details</h2>
        
        {/* Saved Card Dropdown
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="saved-card">
            Use saved card
          </label>
          <select
            id="saved-card"
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            value={savedCard}
            onChange={(e) => setSavedCard(e.target.value)}
          >
            <option value="Mastercard ending 234">Mastercard ending 234</option>
            {/* Additional saved cards would go here */}
          {/* </select>
        </div> */}
     
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name-on-card">
            Name on card
          </label>
          <input
            type="text"
            id="name-on-card"
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
          />
        </div>
  

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Card number
          </label>
          <CardNumberElement className="block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
        </div>

        <div className="flex justify-between mb-6">
          {/* Expiration element */}
          <div className="w-1/3 mr-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Expiration
            </label>
            <CardExpiryElement className="block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
          </div>

          {/* CVC element */}
          <div className="w-1/3 ml-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              CVC
            </label>
            <CardCvcElement className="block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-6">
          <button className="px-6 py-2 border rounded-md text-gray-700 bg-white hover:bg-gray-100">
            Cancel order
          </button>
          <button onClick={handleSubmit} className="px-6 py-2 border rounded-md text-white bg-blue-500 hover:bg-blue-600">
            Pay Now
          </button>
        </div>
      </div>
    );
  };
  

export default Payment;