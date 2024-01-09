import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function SuccessMessage() {
    const notify = () => {
        // toast("Default Notification !");
    
        toast.success("Logged in successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        // toast.error("Error Notification !", {
        //   position: toast.POSITION.TOP_LEFT
        // });
    
        // toast.warn("Warning Notification !", {
        //   position: toast.POSITION.BOTTOM_LEFT
        // });
    
        // toast.info("Info Notification !", {
        //   position: toast.POSITION.BOTTOM_CENTER
        // });
    
        // toast("Custom Style Notification with css class!", {
        //   position: toast.POSITION.BOTTOM_RIGHT,
        //   className: 'foo-bar'
        // });
      };
    
       return (
          <>
            <button onClick={notify}>Notify</button>;
            <ToastContainer />
          </>
        );
}

export default SuccessMessage;