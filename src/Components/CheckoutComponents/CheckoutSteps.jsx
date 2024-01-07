import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveStep } from '../../Features/General/navigationSlice';

function CheckoutSteps() {
    const steps = ['Account', 'Shipping', 'Payment'];
    const activeStep = useSelector((state) => state.navigation.activeStep);
    const dispatch = useDispatch();
  
    // Define the function to handle step click if needed
    // const handleStepClick = (step) => {
    //   dispatch(setActiveStep(step));
    // };
    const getStepStatus = (index) => {
        if (index < activeStep) return 'completed';
        if (index === activeStep) return 'active';
        return 'upcoming';
      };
    
    return (
        <div className="flex justify-center gap-1   ">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              {/* Step Name */}
              <div
                className={`text-base font-semibold ${
                  getStepStatus(index) === 'completed' ? 'text-blue-600' : 
                  getStepStatus(index) === 'active' ? 'text-blue-800' : 'text-gray-400'
                }`}
              >
                {step}
              </div>
              {/* Step Connector */}
              {index < steps.length - 1 && (
                <div className="ml-1 flex  items-center">
                  <div className={`w-8 border-t-2 ${
                    getStepStatus(index) === 'completed' ? 'border-blue-600' : 'border-gray-300'
                  }`}></div>

                  <div className={`h-6 w-6 rounded-full  flex items-center justify-center ml-2 ${
                    getStepStatus(index) === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    
                    {/* Check Icon for completed steps */}
                    {getStepStatus(index) === 'completed' && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    )}
                
                  </div>
                  <div className={`ml-1 w-8 border-t-2 ${
                    getStepStatus(index) === 'completed' ? 'border-blue-600' : 'border-gray-300'
                  }`}></div>
                  
                </div>
              )}
            </div>
            
          ))}
          
        </div>
      );
}

export default CheckoutSteps
