// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { CiCamera } from "react-icons/ci";
// import { GoPencil } from "react-icons/go";
// import { IoLockClosedOutline } from "react-icons/io5";

// const AdminProfile = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   return (
//     <div>
//       <div className=" flex items-center bg-white px-2 py-1 rounded-md gap-5 border min-w-[50px]">
//         <button onClick={() => setDropdownOpen(!dropdownOpen)}>
//           <img
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//             src="/jon-doe.jpg"
//             alt="Admin"
//             className="w-10 h-10 sm:w-10 sm:h-10 rounded-full object-cover"
//           />
//         </button>
//         <div>
//           <span className="text-black hidden sm:flex font-medium text-lg sm:text-base whitespace-nowrap">
//             Jhon doe
//           </span>
//           <span>Admin</span>
//         </div>
//       </div>
//       {dropdownOpen && (
//         <div className="absolute top-full right-4 mt-2 w-48 bg-white border border-[#454B6066] rounded-md shadow-md z-50">
//           <Link
//             to="/change-photo"
//             className="block px-4 py-2 hover:bg-[#EDF8F9] text-[#454B60] font-medium"
//           >
//             <div className="flex items-center gap-2">
//               <CiCamera className="text-xl font-bold" />
//               Change Photo
//             </div>
//           </Link>
//           <div className="border border-[#454B6066]"></div>
//           <Link
//             to="/change-name"
//             className="block px-4 py-2  hover:bg-[#EDF8F9] text-[#454B60] font-medium"
//           >
//             <div className="flex items-center gap-2">
//               <GoPencil className="text-xl font-bold" />
//               Change Name
//             </div>
//           </Link>
//           <div className="border border-[#454B6066]"></div>
//           <button
//             className="w-full text-left px-4 py-2  hover:bg-[#EDF8F9] text-[#454B60] font-medium"
//             onClick={() => {
//               console.log("Logout clicked");
//             }}
//           >
//             <Link to="/forget-password">
//               <div className="flex items-center gap-2">
//                 <IoLockClosedOutline className="text-xl font-bold" />
//                 Change Password
//               </div>
//             </Link>
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminProfile;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiCamera } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { IoLockClosedOutline } from "react-icons/io5";
import { useGetUserProfileQuery } from "../../../redux/features/updateImage/updateImage";
// import { useGetUserProfileQuery } from "@/redux/features/user/userApi";

const AdminProfile = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // ✅ Fetch user profile data
  const { data, isLoading, error } = useGetUserProfileQuery();

  if (isLoading) {
    return <div>Loading profile...</div>;
  }

  if (error) {
    return <div className="text-red-500">Failed to load profile</div>;
  }

  // ✅ Extract data
  const user = data?.data;
  console.log(user);

  // Default image if user image not found
  const profileImage = user?.image
    ? `${import.meta.env.VITE_IMAGE_URL}${user.image}`
    : "/default-avatar.png";

  return (
    <div className="relative">
      <div className="flex items-center bg-white px-2 py-1 rounded-md gap-5 border min-w-[50px]">
        <button onClick={() => setDropdownOpen(!dropdownOpen)}>
          <img
            src={profileImage}
            alt="Admin"
            className="w-10 h-10 sm:w-10 sm:h-10 rounded-full object-cover"
          />
        </button>

        <div>
          <span className="text-black hidden sm:flex font-medium text-lg sm:text-base whitespace-nowrap">
            {user?.name || "Admin"}
          </span>
          <span className="text-gray-600 text-sm">{user?.role || "USER"}</span>
        </div>
      </div>

      {dropdownOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-[#454B6066] rounded-md shadow-md z-50">
          <Link
            to="/change-photo"
            className="block px-4 py-2 hover:bg-[#EDF8F9] text-[#454B60] font-medium"
          >
            <div className="flex items-center gap-2">
              <CiCamera className="text-xl font-bold" />
              Change Photo
            </div>
          </Link>

          <div className="border-t border-[#454B6066]"></div>

          <Link
            to="/change-name"
            className="block px-4 py-2 hover:bg-[#EDF8F9] text-[#454B60] font-medium"
          >
            <div className="flex items-center gap-2">
              <GoPencil className="text-xl font-bold" />
              Change Name
            </div>
          </Link>

          <div className="border-t border-[#454B6066]"></div>

          <Link
            to="/forget-password"
            className="block px-4 py-2 hover:bg-[#EDF8F9] text-[#454B60] font-medium"
          >
            <div className="flex items-center gap-2">
              <IoLockClosedOutline className="text-xl font-bold" />
              Change Password
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
