import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiCamera } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { IoLockClosedOutline } from "react-icons/io5";




const AdminProfile = () => {
     const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
       <div>
          <div className=" flex items-center bg-white px-2 py-1 rounded-md gap-5 border min-w-[50px]"
          >
            <button onClick={() => setDropdownOpen(!dropdownOpen)}  >
            <img onClick={() => setDropdownOpen(!dropdownOpen)}
              src="/jon-doe.jpg"
              alt="Admin"
              className="w-10 h-10 sm:w-10 sm:h-10 rounded-full object-cover"
             
            /></button>
            <div>
            <span className="text-black hidden sm:flex font-medium text-lg sm:text-base whitespace-nowrap">
             Jhon doe
            </span>
            <span>Admin</span>
            </div>
          
          </div>
           {dropdownOpen && (
              <div className="absolute top-full right-4 mt-2 w-48 bg-white border border-[#454B6066] rounded-md shadow-md z-50">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-[#EDF8F9] text-[#454B60] font-medium"
                >
                 <div className='flex items-center gap-2'>
                   <CiCamera  className='text-xl font-bold'/>
                 Change Photo
                 </div>
                </Link>
                <div className='border border-[#454B6066]'></div>
                <Link
                  to="/signin/subscription-plan"
                  className="block px-4 py-2  hover:bg-[#EDF8F9] text-[#454B60] font-medium"
                >
                 <div className='flex items-center gap-2'>
                   <GoPencil className='text-xl font-bold'/>

                  Change Name
                 </div>
                </Link>
                <div className='border border-[#454B6066]'></div>
                <button
                  className="w-full text-left px-4 py-2  hover:bg-[#EDF8F9] text-[#454B60] font-medium"
                  onClick={() => {
                  
                    console.log("Logout clicked");
                  }}
                >
                 <div className='flex items-center gap-2'>
                   <IoLockClosedOutline className='text-xl font-bold'/>

                 Change Password
                 </div>
                </button>
              </div>
            )}
    </div>
    );
};

export default AdminProfile;