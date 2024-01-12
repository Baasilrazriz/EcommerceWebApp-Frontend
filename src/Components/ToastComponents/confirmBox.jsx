
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import { useState } from "react";
import { Button, Dialog, DialogDismiss, DialogHeading } from "@ariakit/react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setConfirm } from "../../Features/LandingPage/LandingPageSlice";


const confirm1 = () => {
    confirmDialog({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        defaultFocus: 'accept',
        accept,
        reject
    });
};


export default confirmBox;
    
