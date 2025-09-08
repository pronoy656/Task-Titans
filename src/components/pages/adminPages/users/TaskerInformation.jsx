// import React from "react";
// import { Card } from "../../../ui/Card";
// import { CardContent, CardHeader, CardTitle } from "../../../ui/CardContent";
// import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/Avatar";
// import PosterInformationTable from "./PosterInformationTable";
// import { Button } from "../../../ui/Button";
// import { Check, X } from "lucide-react";

// const TaskerInformation = () => {
//   //Admin Action Buttons
//   const handleUnblockUser = () => {
//     console.log("User Unblocked");
//   };

//   const handleBlockUser = () => {
//     console.log("Blocked User");
//   };

//   return (
//     <div className="admin-page">
//       <p className="text-center text-4xl font-semibold mb-3">
//         Tasker Information
//       </p>
//       <Card className="w-full max-w-7xl mx-auto border border-gray-200 py-7">
//         <CardHeader>
//           {/* <CardTitle className="text-center text-xl font-semibold mb-3">Tasker Information</CardTitle> */}
//         </CardHeader>
//         <CardContent>
//           <div className="flex items-start gap-6">
//             {/* Profile Image */}
//             <Avatar className="w-30 h-30 flex-shrink-0">
//               <AvatarImage
//                 src="/Tasker-profile.png"
//                 alt="John Doe"
//                 className="object-cover"
//               />
//               <AvatarFallback className="text-lg font-medium">
//                 JD
//               </AvatarFallback>
//             </Avatar>

//             {/* User Information Grid */}
//             <div className="flex-1 grid grid-cols-2 gap-x-[500px] gap-y-4">
//               <div>
//                 <p className="text-xl font-semibold text-muted-foreground mb-1">
//                   User Name
//                 </p>
//                 <p className="font-normal">John Doe</p>
//               </div>

//               <div>
//                 <p className="text-xl font-semibold text-muted-foreground mb-1">
//                   Email
//                 </p>
//                 <p className="font-normal">Example@gmail.com</p>
//               </div>

//               <div>
//                 <p className="text-xl font-semibold  text-muted-foreground mb-1">
//                   User ID
//                 </p>
//                 <p className="font-normal">#001</p>
//               </div>
//               <div>
//                 <p className="text-xl font-semibold  text-muted-foreground mb-1">
//                   Joining Date
//                 </p>
//                 <p className="font-normal">02/05/2025</p>
//               </div>
//             </div>
//           </div>
//           <div className="ml-35 mt-6">
//             <div>
//               <h2 className="text-xl font-semibold text-gray-900 mb-2">
//                 Badges
//               </h2>
//               <div className="flex flex-wrap gap-4">
//                 {/* Founder Titan Badge */}
//                 <div className="flex items-center gap-1.5 bg-blue-500 text-white px-4 py-3 rounded-full shadow-sm">
//                   <div className="w-6 h-6 flex items-center justify-center">
//                     <img src="/rewards.png" alt="" />
//                   </div>
//                   <span className="font-bold ">Founder Titan 1</span>
//                 </div>

//                 {/* First Hundred Titans Badge */}
//                 <div className="flex items-center gap-3 bg-white text-gray-800 px-4 py-3 rounded-full shadow-md border border-gray-200">
//                   <div className="w-6 h-6 flex items-center justify-center">
//                     {/* Medal/Trophy Icon */}
//                     <img src="/rewards.png" alt="" />
//                   </div>
//                   <span className="font-bold">First Hundred Titans 1</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* // For table Show */}
//       <div className="w-full max-w-7xl mx-auto mt-9">
//         <PosterInformationTable></PosterInformationTable>
//       </div>
//       <div className="w-full max-w-4xl mx-auto p-6">
//         <h2 className="text-3xl font-semibold mb-8 text-gray-800">
//           Admin Actions
//         </h2>

//         <div className="flex gap-4">
//           <Button
//             onClick={handleUnblockUser}
//             className="bg-green-500 hover:bg-green-600 text-white !px-24 py-7 !text-lg rounded-lg flex items-center gap-2 font-medium min-w-[160px]"
//           >
//             <Check className="w-6 h-6" />
//             Unblock User
//           </Button>

//           <Button
//             onClick={handleBlockUser}
//             className="bg-red-500 hover:bg-red-600  text-white !px-24 py-7 !text-lg rounded-lg flex items-center gap-2 font-semibold min-w-[160px]"
//           >
//             <X className="w-6 h-6" />
//             Block User
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskerInformation;

import React, { useEffect, useState } from "react";
import { Card } from "../../../ui/Card";
import { CardContent, CardHeader, CardTitle } from "../../../ui/CardContent";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/Avatar";
import PosterInformationTable from "./PosterInformationTable";
import { Button } from "../../../ui/Button";
import { Check, X } from "lucide-react";
import { useParams } from "react-router-dom";
import TaskerInformationTable from "./TaskerInformationTable";

const TaskerInformation = () => {
  const { id } = useParams(); // Get userID from URL
  const [userData, setUserData] = useState(null);
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(id);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `http://10.10.7.33:5000/api/v1/user/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YThhODUxY2FiNDBmMDU1MGViMDQ3MyIsInJvbGUiOiJTVVBFUl9BRE1JTiIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJpYXQiOjE3NTcyODExNzAsImV4cCI6MTc1NzM2NzU3MH0.Xtc12i968vhop88bN796TPY6aKEPNHezaTk9RQJp3OU`, // replace yourToken with your actual token
            },
          }
        );

        const data = await response.json(); // parse JSON
        console.log(data);

        if (data.success) {
          setUserData(data.data.user);
          setBids(data.data.bids);
        } else {
          console.error("Failed to fetch user data:", data.message);
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!userData) return <div>User not found</div>;

  return (
    <div className="admin-page">
      <Card className="max-w-4xl mx-auto my-6 p-6">
        <CardContent>
          <div className="flex gap-6 items-center">
            <Avatar className="w-20 h-20">
              <AvatarImage src={userData.image} alt={userData.name} />
              <AvatarFallback>{userData.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">{userData.name}</h2>
              <p>Email: {userData.email}</p>
              <p>User ID: {userData._id}</p>
              <p>Status: {userData.status}</p>
              <p>Verified: {userData.verified ? "Yes" : "No"}</p>
              <p>Role: {userData.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="max-w-7xl mx-auto mt-6">
        <h3 className="text-xl font-semibold mb-3">Tasker Bids</h3>
        <TaskerInformationTable data={bids} />
      </div>
    </div>
  );
};

export default TaskerInformation;
