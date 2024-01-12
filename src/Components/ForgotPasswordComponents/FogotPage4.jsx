import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOTP, setStep, validateOtp } from '../../Features/Mart/forgotSlice';

function ForgotPage4() {
  const dispatch = useDispatch();
  const otp = useSelector((state) => state.forgot.otp);
  
  const inputRefs = Array.from({ length: 4 }, () => useRef());

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    dispatch(setOTP(newOtp.join('')));

    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (index, value) => {
    if (!value && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(validateOtp(otp))
  };

  return (
    <div className="   ">
      <div className="mx-6 mt-20">
        <div className="flex flex-col gap-8">
        <div class="w-full  whitespace-nowrap   text-sm font-medium text-gray-400">
          <p>We have sent a code to your email ba**@dipainhouse.com</p>
        </div>

          
            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
              {inputRefs.map((ref, index) => (
                <div className= "w-16 h-16" key={index}>
                  <input
                    ref={ref}
                    value={otp[index] || ''}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => e.key === 'Backspace' && handleBackspace(index, e.target.value)}
                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 shadow-md text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="text"
                    maxLength="1"  // Allow only one character
                  />
                </div>
              ))}
            </div>

           <div className="mx-10 flex flex-col space-y-5">
              <div>
                <button
                  type="submit"
                  className=" flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
          onClick={handleSubmit}
          >
          
                  Verify OTP
                </button>
              </div>

              <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Didn't receive code?</p>{' '}
                <a className="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">
                  Resend
                </a>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default ForgotPage4;
