import React, { useState } from 'react';
import { closeProfileModal } from '../../Features/Mart/profileSlice';
import { useDispatch, useSelector } from 'react-redux';

const MyProfile = () => {
  const dispatch = useDispatch();
  const profileInfo = useSelector((state) => state.profile.profileInfo);
  const [isEditable, setIsEditable] = useState(false);
  const [userInfo, setUserInfo] = useState(profileInfo);

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleUpdateClick = () => {
    setIsEditable(false);
    // Implement your update logic here
  };
  const handleClose = () => {
    dispatch(closeProfileModal());
    document.body.style.overflowY = "scroll";
    
  }
  return (
    <>
       <div className=" z-20 modal-overlay  fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
       <div className="bg-white shadow-lg w-[50rem] rounded-lg p-6 max-w-4xl px-16 h-[40rem] animate-fade-in-up border-2 border-white overflow-y-auto overflow-x-hidden scroll scroll-hide">
       <div
                  className="flex justify-end mt-1 mr-1 "
                  onClick={handleClose}
                >
                  <button
                    className="relative top-1 right-1  bg-red-500 text-white px-2 py-1 rounded-full transform transition-all duration-500 ease-in-out hover:scale-110   active:animate-bounce"
                    onClick={handleClose}
                  >
                    x
                  </button>
                </div>
                
        <div className="flex flex-col items-center mb-4">
          <img
            src={profileInfo.image} 
            alt="Profile"
            className="w-36 h-36 rounded-full shadow-lg mb-4 "
          />
        </div>
        <button
          onClick={handleEditClick}
          className="w-full bg-indigo-500 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-600 transition-all duration-300 mb-4"
        >
          Edit Info
        </button>
        <div className="w-full grid grid-cols-2 gap-4 text-white">
        {Object.keys(userInfo).map((key) => {
  if (key === 'password' || key === 'image') {
    return null; // Skip these fields
  }

  return (
    <div key={key} className="mb-4">
      <label className="block text-gray-300 capitalize">{key.replace('_', ' ')}</label>
      <input
        type="text"
        name={key}
        value={userInfo[key]}
        onChange={handleInputChange}
        readOnly={!isEditable}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          isEditable ? 'bg-white' : 'bg-gray-700'
        }`}
        placeholder={`Your ${key}`}
      />
    </div>
  );
})}
        </div>
      </div>
        </div>
    </>
  );
};

export default MyProfile;
