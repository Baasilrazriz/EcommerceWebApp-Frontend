import { GoogleLogin } from '@react-oauth/google'
import React from 'react'
import { useDispatch } from 'react-redux';
import { setEmail, setProfilePic, setUsernames } from '../Features/Mart/userSlice';
import { closeLoginModal, loggedIn } from '../Features/Mart/LoginSlice';
import { jwtDecode } from 'jwt-decode';


function GoogleButton() {
    const dispatch = useDispatch();
    return (
        <>
        <GoogleLogin
         onSuccess={credentialResponse => {
            const credentialResponseDecoded=jwtDecode(credentialResponse.credential)
    console.log(credentialResponseDecoded);
    dispatch(setUsernames(credentialResponseDecoded.given_name)) 
    dispatch(setEmail(credentialResponseDecoded.email))
    dispatch(setProfilePic(credentialResponseDecoded.picture))
    dispatch(loggedIn())
    dispatch(closeLoginModal())
    alert("success");
    document.body.style.overflowY = "scroll";

  }}
  onError={() => {
    console.log('Login Failed');
  }}
        />
        </>
    )
}

export default GoogleButton
