import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../Features/Mart/signupSlice";
import { closeSignupModal } from "../../Features/Mart/signupSlice";
import SignupPage1 from "../SignUpComponents/SignupPage1";


function SignUpModal() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.signup.step);
  const isSignupModal = useSelector((state) => state.signup.isSignupModalOpen);
  const handleClose = () => {
    dispatch(closeSignupModal());
    document.body.style.overflowY = "scroll";
    dispatch(setStep(1));
  };
  return (
    <>
      {isSignupModal && (
        <div className=" z-20 modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
          <div className=" login-modal bg-white   h-[30rem] w-[55rem] rounded-md overflow-hidden">
            <div className="flex h-full w-full ">
              <div className=" w-[53%] ">
                <img
                  className="h-[32rem]  object-fill"
                  src="../assets\loginbg1.jpg"
                  alt=""
                  srcset=""
                />
              </div>

              <div className=" w-[47%]    ">
                <div className="flex justify-end mt-1 mr-1"onClick={handleClose}>
                  <button
                    className="absolute top-30 right-[21rem]  bg-red-500 text-white px-2 py-1 rounded-full transform transition-all duration-500 ease-in-out hover:scale-110   active:animate-bounce"
                    onClick={handleClose}
                  >
                    x
                  </button>
                </div>
                <h1 className=" font-bold text-gray-700 text-4xl flex justify-center">
                  Signup
                </h1>
           <div className="">
            <SignupPage1/>
           </div>
           
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUpModal;
