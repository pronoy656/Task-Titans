// // import React, { useState, useEffect } from "react";
// // import { Search, UserCheck, FileText } from "lucide-react";
// // import { Card, CardContent } from "../../../ui/CardContent";
// // import { Table } from "antd";
// // import { useGetAllUsersQuery } from "../../../../redux/features/auth/authApi";

// // const Users = () => {
// //   const [activeTab, setActiveTab] = useState(""); // default first tab
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [page, setPage] = useState(1);
// //   const limit = 8;

// //   const { data, isLoading } = useGetAllUsersQuery({
// //     ...(activeTab !== "ALL" ? { role: activeTab } : {}), // send role only if not ALL
// //     page,
// //     limit,
// //     ...(searchTerm ? { searchTerm } : {}),
// //   });

// //   console.log(data);

// //   const stats = data?.data?.stats || {};

// //   const metrics = [
// //     {
// //       title: "Total Users",
// //       value: stats.totalUsers || 0,
// //       growth: `${stats.monthlyGrowth || 0}%`,
// //       icon: UserCheck,
// //     },
// //     {
// //       title: "Total Tasker",
// //       value: stats.totalTaskers || 0,
// //       growth: `${stats.monthlyGrowth || 0}%`,
// //       icon: UserCheck,
// //     },
// //     {
// //       title: "Total Poster",
// //       value: stats.totalPosters || 0,
// //       growth: `${stats.monthlyGrowth || 0}%`,
// //       icon: FileText,
// //     },
// //   ];

// //   const userdata =
// //     data?.data?.users?.map((user) => ({
// //       key: user._id,
// //       name: user.name,
// //       email: user.email,
// //       UserID: user._id,
// //       role: user.role,
// //     })) || [];

// //   const [actionDropdown, setActionDropdown] = useState(null);

// //   const handleActionClick = (key) =>
// //     setActionDropdown(actionDropdown === key ? null : key);

// //   const handleViewProfile = (record) => {
// //     alert(`View profile for ${record.name}`);
// //     setActionDropdown(null);
// //   };

// //   const handleBlock = (record) => {
// //     alert(`Block user ${record.name}`);
// //     setActionDropdown(null);
// //   };

// //   const columns = [
// //     {
// //       title: "User Name",
// //       dataIndex: "name",
// //       key: "name",
// //       render: (text) => <span style={{ fontSize: "16px" }}>{text}</span>,
// //     },
// //     {
// //       title: "Email",
// //       dataIndex: "email",
// //       key: "email",
// //       render: (text) => <span style={{ fontSize: "16px" }}>{text}</span>,
// //     },
// //     {
// //       title: "User ID",
// //       dataIndex: "UserID",
// //       key: "UserID",
// //       render: (text) => <span style={{ fontSize: "16px" }}>{text}</span>,
// //     },
// //     {
// //       title: "Role",
// //       dataIndex: "role",
// //       key: "role",
// //       render: (role) => (
// //         <span
// //           className={`px-2 py-1 rounded text-white ${
// //             role === "POSTER"
// //               ? "bg-blue-500"
// //               : role === "TASKER"
// //               ? "bg-green-500"
// //               : "bg-gray-500"
// //           }`}
// //           style={{ fontSize: "16px" }}
// //         >
// //           {role}
// //         </span>
// //       ),
// //     },
// //     {
// //       title: "Action",
// //       dataIndex: "action",
// //       key: "action",
// //       align: "center",
// //       render: (_, record) => (
// //         <div style={{ position: "relative" }}>
// //           <button
// //             onClick={(e) => {
// //               e.stopPropagation();
// //               handleActionClick(record.key);
// //             }}
// //           >
// //             •••
// //           </button>
// //           {actionDropdown === record.key && (
// //             <div className="absolute right-0 top-full mt-2 w-32 bg-white border rounded shadow-lg z-20">
// //               <div
// //                 className="px-4 py-2 cursor-pointer hover:bg-blue-100"
// //                 onClick={() => handleViewProfile(record)}
// //               >
// //                 View Profile
// //               </div>
// //               <div
// //                 className="px-4 py-2 cursor-pointer hover:bg-red-600 bg-red-500 text-white"
// //                 onClick={() => handleBlock(record)}
// //               >
// //                 Block
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       ),
// //     },
// //   ];

// //   // Close dropdown
// //   useEffect(() => {
// //     const handleClickOutside = () => setActionDropdown(null);
// //     if (actionDropdown !== null)
// //       document.addEventListener("click", handleClickOutside);
// //     return () => document.removeEventListener("click", handleClickOutside);
// //   }, [actionDropdown]);

// //   if (isLoading)
// //     return (
// //       <div className="admin-page p-2">
// //         {/* Metrics Skeleton */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// //           {[1, 2, 3].map((_, index) => (
// //             <div
// //               key={index}
// //               className="bg-white shadow-sm border-0 rounded p-4 animate-pulse"
// //             >
// //               <div className="flex items-center justify-between mb-4">
// //                 <div className="w-10 h-10 bg-gray-200 rounded-full" />
// //                 <div className="w-12 h-4 bg-gray-200 rounded" />
// //               </div>
// //               <div className="space-y-2">
// //                 <div className="w-3/4 h-4 bg-gray-200 rounded" />
// //                 <div className="w-1/2 h-6 bg-gray-200 rounded" />
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Search Skeleton */}
// //         <div className="relative mb-6">
// //           <div className="w-2xl h-12 bg-gray-200 rounded-lg animate-pulse mx-auto" />
// //         </div>

// //         {/* Tabs Skeleton */}
// //         <div className="flex space-x-4 mb-4">
// //           {[1, 2, 3].map((_, index) => (
// //             <div
// //               key={index}
// //               className="w-20 h-10 bg-gray-200 rounded-t-lg animate-pulse"
// //             />
// //           ))}
// //         </div>

// //         {/* Table Skeleton */}
// //         <div className="space-y-2">
// //           {Array.from({ length: limit }).map((_, index) => (
// //             <div
// //               key={index}
// //               className="flex space-x-4 border-b border-gray-200 p-3 animate-pulse"
// //             >
// //               <div className="w-1/4 h-6 bg-gray-200 rounded" />
// //               <div className="w-1/4 h-6 bg-gray-200 rounded" />
// //               <div className="w-1/4 h-6 bg-gray-200 rounded" />
// //               <div className="w-1/4 h-6 bg-gray-200 rounded" />
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     );

// //   // if (error) return <p>Error loading users</p>;

// //   return (
// //     <div className="admin-page p-2">
// //       {/* Metrics */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// //         {metrics.map((metric, index) => (
// //           <Card key={index} className="bg-white shadow-sm border-0">
// //             <CardContent className="p-4">
// //               <div className="space-y-2">
// //                 <div className="flex items-center justify-between">
// //                   <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
// //                     <metric.icon className="w-6 h-6 text-blue-600" />
// //                   </div>
// //                   <span className="text-green-600 font-medium">
// //                     {metric.growth}
// //                   </span>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
// //                   <p className="text-2xl font-bold text-gray-900">
// //                     {metric.value}
// //                   </p>
// //                 </div>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         ))}
// //       </div>

// //       {/* Search */}
// //       <div className="relative mb-6">
// //         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
// //         <input
// //           type="text"
// //           placeholder="Search here..."
// //           className="w-2xl pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //         />
// //       </div>

// //       {/* Tabs */}
// //       <div className="flex space-x-4 mb-4">
// //         {["POSTER", "TASKER", "ALL"].map((tab) => (
// //           <button
// //             key={tab}
// //             className={`px-6 py-2 rounded-t-lg font-semibold border-b-2 transition-colors duration-200 ${
// //               activeTab === tab
// //                 ? "border-blue-500 text-blue-600 bg-blue-50"
// //                 : "border-transparent text-gray-500 bg-white"
// //             }`}
// //             onClick={() => {
// //               setActiveTab(tab);
// //               setPage(1);
// //             }}
// //           >
// //             {tab}
// //           </button>
// //         ))}
// //       </div>

// //       {/* Table */}
// //       <Table
// //         className="border border-[#F0F0F0] overflow-y-auto"
// //         dataSource={userdata}
// //         columns={columns}
// //         pagination={{
// //           pageSize: limit,
// //           current: page,
// //           total: data?.pagination?.total,
// //           onChange: (newPage) => setPage(newPage),
// //           position: ["bottomRight"],
// //         }}
// //         scroll={{ x: "max-content" }}
// //         rowClassName={() => "custom-table-row"}
// //       />

// //       <style>{`
// //         .custom-table-row td {
// //           padding-top: 12px !important;
// //           padding-bottom: 12px !important;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default Users;

// import React, { useState, useEffect } from "react";
// import { Search, UserCheck, FileText } from "lucide-react";
// import { Card } from "../../../ui/Card";
// import { CardContent } from "../../../ui/CardContent";
// import { Table } from "antd";
// import {
//   useGetUsersQuery,
//   useGetUsersStatsQuery,
// } from "../../../../redux/features/users/usersapi";

// const Users = () => {
//   const [activeTab, setActiveTab] = useState("ALL");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [page, setPage] = useState(1);
//   const limit = 10;

//   // Table data
//   const { data, isLoading } = useGetUsersQuery({
//     ...(activeTab !== "ALL" ? { role: activeTab } : {}),
//     page,
//     limit,
//     ...(searchTerm ? { searchTerm } : {}),
//   });

//   // Stats data
//   const { data: statsData, isLoading: statsLoading } = useGetUsersStatsQuery();

//   console.log("Users:", data);
//   console.log("Stats:", statsData);

//   // Metrics from stats API
//   const stats = statsData?.data || {};
//   const metrics = [
//     {
//       title: "Total Users",
//       value: stats.allUsers?.total || 0,
//       growth: stats.allUsers?.formattedGrowth || "0%",
//       growthType: stats.allUsers?.growthType || "neutral",
//       icon: UserCheck,
//     },
//     {
//       title: "Total Taskers",
//       value: stats.taskers?.total || 0,
//       growth: stats.taskers?.formattedGrowth || "0%",
//       growthType: stats.taskers?.growthType || "neutral",
//       icon: UserCheck,
//     },
//     {
//       title: "Total Posters",
//       value: stats.posters?.total || 0,
//       growth: stats.posters?.formattedGrowth || "0%",
//       growthType: stats.posters?.growthType || "neutral",
//       icon: FileText,
//     },
//   ];

//   // Transform API users
//   const userdata =
//     data?.data?.map((user) => ({
//       key: user._id,
//       name: user.name,
//       email: user.email,
//       UserID: user._id,
//       role: user.role,
//       status: user.status,
//       verified: user.verified,
//       createdAt: new Date(user.createdAt).toLocaleDateString(),
//       image: user.image,
//     })) || [];

//   const [actionDropdown, setActionDropdown] = useState(null);

//   const handleActionClick = (key) =>
//     setActionDropdown(actionDropdown === key ? null : key);

//   const handleViewProfile = (record) => {
//     alert(`View profile for ${record.name}`);
//     setActionDropdown(null);
//   };

//   const handleBlock = (record) => {
//     alert(`Block user ${record.name}`);
//     setActionDropdown(null);
//   };

//   // Table columns
//   const columns = [
//     {
//       title: "Profile",
//       dataIndex: "image",
//       key: "image",
//       render: (img) => (
//         <img
//           src={img}
//           alt="profile"
//           className="w-10 h-10 rounded-full object-cover"
//         />
//       ),
//     },
//     {
//       title: "User Name",
//       dataIndex: "name",
//       key: "name",
//       render: (text) => <span style={{ fontSize: "16px" }}>{text}</span>,
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//       render: (text) => <span style={{ fontSize: "16px" }}>{text}</span>,
//     },
//     {
//       title: "User ID",
//       dataIndex: "UserID",
//       key: "UserID",
//       render: (text) => (
//         <span style={{ fontSize: "14px", color: "#555" }}>{text}</span>
//       ),
//     },
//     {
//       title: "Role",
//       dataIndex: "role",
//       key: "role",
//       render: (role) => (
//         <span
//           className={`px-2 py-1 rounded text-white ${
//             role === "POSTER"
//               ? "bg-blue-500"
//               : role === "TASKER"
//               ? "bg-green-500"
//               : "bg-gray-500"
//           }`}
//           style={{ fontSize: "14px" }}
//         >
//           {role}
//         </span>
//       ),
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (status) => (
//         <span
//           className={`px-2 py-1 rounded ${
//             status === "ACTIVE"
//               ? "bg-green-100 text-green-700"
//               : "bg-red-100 text-red-700"
//           }`}
//           style={{ fontSize: "14px", fontWeight: "bold" }}
//         >
//           {status}
//         </span>
//       ),
//     },
//     {
//       title: "Verified",
//       dataIndex: "verified",
//       key: "verified",
//       render: (verified) => (
//         <span
//           className={`px-2 py-1 rounded ${
//             verified
//               ? "bg-green-100 text-green-700"
//               : "bg-yellow-100 text-yellow-700"
//           }`}
//           style={{ fontSize: "14px", fontWeight: "bold" }}
//         >
//           {verified ? "Yes" : "No"}
//         </span>
//       ),
//     },
//     {
//       title: "Created At",
//       dataIndex: "createdAt",
//       key: "createdAt",
//       render: (date) => <span style={{ fontSize: "14px" }}>{date}</span>,
//     },
//     {
//       title: "Action",
//       key: "action",
//       align: "center",
//       render: (_, record) => (
//         <div style={{ position: "relative" }}>
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               handleActionClick(record.key);
//             }}
//           >
//             •••
//           </button>
//           {actionDropdown === record.key && (
//             <div className="absolute right-0 top-full mt-2 w-32 bg-white border rounded shadow-lg z-20">
//               <div
//                 className="px-4 py-2 cursor-pointer hover:bg-blue-100"
//                 onClick={() => handleViewProfile(record)}
//               >
//                 View Profile
//               </div>
//               <div
//                 className="px-4 py-2 cursor-pointer hover:bg-red-600 bg-red-500 text-white"
//                 onClick={() => handleBlock(record)}
//               >
//                 Block
//               </div>
//             </div>
//           )}
//         </div>
//       ),
//     },
//   ];

//   // Close dropdown
//   useEffect(() => {
//     const handleClickOutside = () => setActionDropdown(null);
//     if (actionDropdown !== null)
//       document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, [actionDropdown]);

//   if (isLoading || statsLoading)
//     return (
//       <div className="admin-page p-2">
//         <p>Loading users...</p>
//       </div>
//     );

//   return (
//     <div className="admin-page p-2">
//       {/* Metrics */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         {metrics.map((metric, index) => {
//           const growthColor =
//             metric.growthType === "increase"
//               ? "text-green-600"
//               : metric.growthType === "decrease"
//               ? "text-red-600"
//               : "text-gray-600";

//           return (
//             <Card key={index} className="bg-white shadow-sm border-0">
//               <CardContent className="p-4">
//                 <div className="space-y-2">
//                   <div className="flex items-center justify-between">
//                     <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                       <metric.icon className="w-6 h-6 text-blue-600" />
//                     </div>
//                     <span className={`${growthColor} font-medium`}>
//                       {metric.growth}
//                     </span>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
//                     <p className="text-2xl font-bold text-gray-900">
//                       {metric.value}
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           );
//         })}
//       </div>

//       {/* Search */}
//       <div className="relative mb-6">
//         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//         <input
//           type="text"
//           placeholder="Search here..."
//           className="w-2xl pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-4">
//         {["POSTER", "TASKER", "ALL"].map((tab) => (
//           <button
//             key={tab}
//             className={`px-6 py-2 rounded-t-lg font-semibold border-b-2 transition-colors duration-200 ${
//               activeTab === tab
//                 ? "border-blue-500 text-blue-600 bg-blue-50"
//                 : "border-transparent text-gray-500 bg-white"
//             }`}
//             onClick={() => {
//               setActiveTab(tab);
//               setPage(1);
//             }}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Table */}
//       <Table
//         className="border border-[#F0F0F0] overflow-y-auto"
//         dataSource={userdata}
//         columns={columns}
//         pagination={{
//           pageSize: limit,
//           current: page,
//           total: data?.pagination?.total,
//           onChange: (newPage) => setPage(newPage),
//           position: ["bottomRight"],
//         }}
//         scroll={{ x: "max-content" }}
//         rowClassName={() => "custom-table-row"}
//       />

//       <style>{`
//         .custom-table-row td {
//           padding-top: 12px !important;
//           padding-bottom: 12px !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Users;
// import React, { useState, useEffect } from "react";
// import { Search, UserCheck, FileText } from "lucide-react";
// import { Card } from "../../../ui/Card";
// import { CardContent } from "../../../ui/CardContent";
// import { Table } from "antd";
// import {
//   useGetUsersQuery,
//   useGetUsersStatsQuery,
// } from "../../../../redux/features/users/usersapi";

// const Users = () => {
//   const [activeTab, setActiveTab] = useState("ALL");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [page, setPage] = useState(1);
//   const limit = 10;

//   // Fetch users
//   const { data, isLoading } = useGetUsersQuery({
//     ...(activeTab !== "ALL" ? { role: activeTab } : {}),
//     page,
//     limit,
//     ...(searchTerm ? { searchTerm } : {}),
//   });

//   // Fetch stats
//   const { data: statsData, isLoading: statsLoading } = useGetUsersStatsQuery();

//   console.log("Users:", data);
//   console.log("Stats:", statsData);

//   // Metrics from stats API
//   const stats = statsData?.data || {};
//   const metrics = [
//     {
//       title: "Total Users",
//       value: stats.allUsers?.total || 0,
//       growth: stats.allUsers?.formattedGrowth || "0%",
//       growthType: stats.allUsers?.growthType || "neutral",
//       icon: UserCheck,
//     },
//     {
//       title: "Total Taskers",
//       value: stats.taskers?.total || 0,
//       growth: stats.taskers?.formattedGrowth || "0%",
//       growthType: stats.taskers?.growthType || "neutral",
//       icon: UserCheck,
//     },
//     {
//       title: "Total Posters",
//       value: stats.posters?.total || 0,
//       growth: stats.posters?.formattedGrowth || "0%",
//       growthType: stats.posters?.growthType || "neutral",
//       icon: FileText,
//     },
//   ];

//   // User table data
//   const userdata =
//     data?.data?.map((user) => ({
//       key: user._id,
//       name: user.name,
//       email: user.email,
//       userID: user._id,
//       role: user.role,
//       image: user.image,
//       status: user.status,
//       verified: user.verified,
//       createdAt: new Date(user.createdAt).toLocaleDateString(),
//     })) || [];

//   // Action dropdown state
//   const [actionDropdown, setActionDropdown] = useState(null);
//   const handleActionClick = (key) =>
//     setActionDropdown(actionDropdown === key ? null : key);

//   const handleViewProfile = (record) => {
//     alert(`View profile for ${record.name}`);
//     setActionDropdown(null);
//   };

//   const handleBlock = (record) => {
//     alert(`Block user ${record.name}`);
//     setActionDropdown(null);
//   };

//   // Table columns
//   const columns = [
//     {
//       title: "Avatar",
//       dataIndex: "image",
//       key: "image",
//       render: (img) => (
//         <img
//           src={img}
//           alt="avatar"
//           className="w-10 h-10 rounded-full object-cover mx-auto"
//         />
//       ),
//       align: "center",
//     },
//     {
//       title: "User Name",
//       dataIndex: "name",
//       key: "name",
//       render: (text) => <span style={{ fontSize: "16px" }}>{text}</span>,
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//       render: (text) => <span style={{ fontSize: "16px" }}>{text}</span>,
//     },
//     {
//       title: "User ID",
//       dataIndex: "userID",
//       key: "userID",
//       render: (text) => (
//         <span style={{ fontSize: "14px", color: "#555" }}>{text}</span>
//       ),
//     },
//     {
//       title: "Role",
//       dataIndex: "role",
//       key: "role",
//       render: (role) => (
//         <span
//           className={`px-2 py-1 rounded text-white ${
//             role === "POSTER"
//               ? "bg-blue-500"
//               : role === "TASKER"
//               ? "bg-green-500"
//               : "bg-gray-500"
//           }`}
//           style={{ fontSize: "14px" }}
//         >
//           {role}
//         </span>
//       ),
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (status) => (
//         <span
//           className={`px-2 py-1 rounded text-white ${
//             status === "ACTIVE" ? "bg-green-500" : "bg-red-500"
//           }`}
//           style={{ fontSize: "14px" }}
//         >
//           {status}
//         </span>
//       ),
//     },
//     {
//       title: "Verified",
//       dataIndex: "verified",
//       key: "verified",
//       render: (verified) => (
//         <span
//           className={`px-2 py-1 rounded ${
//             verified
//               ? "bg-green-100 text-green-700"
//               : "bg-gray-100 text-gray-600"
//           }`}
//           style={{ fontSize: "14px" }}
//         >
//           {verified ? "Yes" : "No"}
//         </span>
//       ),
//     },
//     {
//       title: "Created At",
//       dataIndex: "createdAt",
//       key: "createdAt",
//       render: (text) => <span style={{ fontSize: "14px" }}>{text}</span>,
//     },
//     {
//       title: "Action",
//       dataIndex: "action",
//       key: "action",
//       align: "center",
//       render: (_, record) => (
//         <div style={{ position: "relative" }}>
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               handleActionClick(record.key);
//             }}
//           >
//             •••
//           </button>
//           {actionDropdown === record.key && (
//             <div className="absolute right-0 top-full mt-2 w-32 bg-white border rounded shadow-lg z-20">
//               <div
//                 className="px-4 py-2 cursor-pointer hover:bg-blue-100"
//                 onClick={() => handleViewProfile(record)}
//               >
//                 View Profile
//               </div>
//               <div
//                 className="px-4 py-2 cursor-pointer hover:bg-red-600 bg-red-500 text-white"
//                 onClick={() => handleBlock(record)}
//               >
//                 Block
//               </div>
//             </div>
//           )}
//         </div>
//       ),
//     },
//   ];

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = () => setActionDropdown(null);
//     if (actionDropdown !== null)
//       document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, [actionDropdown]);

//   if (isLoading || statsLoading) {
//     return <div className="p-4">Loading users...</div>;
//   }

//   return (
//     <div className="admin-page p-2">
//       {/* Metrics */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         {metrics.map((metric, index) => (
//           <Card key={index} className="bg-white shadow-sm border-0">
//             <CardContent className="p-4">
//               <div className="space-y-2">
//                 <div className="flex items-center justify-between">
//                   <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                     <metric.icon className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <span
//                     className={`font-medium ${
//                       metric.growthType === "increase"
//                         ? "text-green-600"
//                         : metric.growthType === "decrease"
//                         ? "text-red-600"
//                         : "text-gray-500"
//                     }`}
//                   >
//                     {metric.growth}
//                   </span>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
//                   <p className="text-2xl font-bold text-gray-900">
//                     {metric.value}
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Search */}
//       <div className="relative mb-6">
//         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//         <input
//           type="text"
//           placeholder="Search here..."
//           className="w-2xl pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           value={searchTerm}
//           onChange={(e) => {
//             setSearchTerm(e.target.value);
//             setPage(1);
//           }}
//         />
//       </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-4">
//         {["POSTER", "TASKER", "ALL"].map((tab) => (
//           <button
//             key={tab}
//             className={`px-6 py-2 rounded-t-lg font-semibold border-b-2 transition-colors duration-200 ${
//               activeTab === tab
//                 ? "border-blue-500 text-blue-600 bg-blue-50"
//                 : "border-transparent text-gray-500 bg-white"
//             }`}
//             onClick={() => {
//               setActiveTab(tab);
//               setPage(1);
//             }}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Table */}
//       <Table
//         className="border border-[#F0F0F0] overflow-y-auto rounded-lg shadow-sm"
//         dataSource={userdata}
//         columns={columns}
//         pagination={{
//           pageSize: limit,
//           current: page,
//           total: data?.pagination?.total,
//           onChange: (newPage) => setPage(newPage),
//           position: ["bottomRight"],
//         }}
//         scroll={{ x: "max-content" }}
//         rowClassName={() => "custom-table-row"}
//         size="middle"
//       />

//       <style>{`
//         .custom-table-row td {
//           padding-top: 12px !important;
//           padding-bottom: 12px !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Users;

// import React, { useState, useEffect } from "react";
// import { Search, UserCheck, FileText } from "lucide-react";
// import { Card } from "../../../ui/Card";
// import { CardContent } from "../../../ui/CardContent";
// import { Table } from "antd";
// import {
//   useGetUsersQuery,
//   useGetUsersStatsQuery,
// } from "../../../../redux/features/users/usersapi";

// const Users = () => {
//   const [activeTab, setActiveTab] = useState("ALL");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [page, setPage] = useState(1);
//   const limit = 10;

//   // Build query params
//   const queryParams = {
//     page,
//     limit,
//     ...(searchTerm ? { searchTerm } : {}),
//   };

//   if (activeTab !== "ALL") {
//     queryParams.role = activeTab; // add role only if tab != ALL
//   }

//   // Fetch users
//   const { data, isLoading } = useGetUsersQuery(queryParams);

//   // Fetch stats
//   const { data: statsData, isLoading: statsLoading } = useGetUsersStatsQuery();

//   const stats = statsData?.data || {};

//   const metrics = [
//     {
//       title: "Total Users",
//       value: stats.allUsers?.total || 0,
//       growth: stats.allUsers?.formattedGrowth || "0%",
//       growthType: stats.allUsers?.growthType || "neutral",
//       icon: UserCheck,
//     },
//     {
//       title: "Total Taskers",
//       value: stats.taskers?.total || 0,
//       growth: stats.taskers?.formattedGrowth || "0%",
//       growthType: stats.taskers?.growthType || "neutral",
//       icon: UserCheck,
//     },
//     {
//       title: "Total Posters",
//       value: stats.posters?.total || 0,
//       growth: stats.posters?.formattedGrowth || "0%",
//       growthType: stats.posters?.growthType || "neutral",
//       icon: FileText,
//     },
//   ];

//   // Map user data
//   const userdata =
//     data?.data?.map((user) => ({
//       key: user._id,
//       name: user.name,
//       email: user.email,
//       userID: user._id,
//       role: user.role,
//       image: user.image,
//       status: user.status,
//       verified: user.verified,
//       createdAt: new Date(user.createdAt).toLocaleDateString(),
//     })) || [];

//   // Action dropdown
//   const [actionDropdown, setActionDropdown] = useState(null);

//   const handleActionClick = (key) =>
//     setActionDropdown(actionDropdown === key ? null : key);

//   const handleViewProfile = (record) => {
//     alert(`View profile for ${record.name}`);
//     setActionDropdown(null);
//   };

//   const handleBlock = (record) => {
//     alert(`Block user ${record.name}`);
//     setActionDropdown(null);
//   };

//   // Table columns
//   const columns = [
//     {
//       title: "Avatar",
//       dataIndex: "image",
//       key: "image",
//       render: (img) => (
//         <img
//           src={img}
//           alt="avatar"
//           className="w-10 h-10 rounded-full object-cover mx-auto"
//         />
//       ),
//       align: "center",
//     },
//     {
//       title: "User Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//     },
//     {
//       title: "User ID",
//       dataIndex: "userID",
//       key: "userID",
//     },
//     {
//       title: "Role",
//       dataIndex: "role",
//       key: "role",
//       render: (role) => (
//         <span
//           className={`px-2 py-1 rounded text-white ${
//             role === "POSTER"
//               ? "bg-blue-500"
//               : role === "TASKER"
//               ? "bg-green-500"
//               : "bg-gray-500"
//           }`}
//         >
//           {role}
//         </span>
//       ),
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (status) => (
//         <span
//           className={`px-2 py-1 rounded text-white ${
//             status === "ACTIVE" ? "bg-green-500" : "bg-red-500"
//           }`}
//         >
//           {status}
//         </span>
//       ),
//     },
//     {
//       title: "Verified",
//       dataIndex: "verified",
//       key: "verified",
//       render: (verified) => (
//         <span
//           className={`px-2 py-1 rounded ${
//             verified
//               ? "bg-green-100 text-green-700"
//               : "bg-gray-100 text-gray-600"
//           }`}
//         >
//           {verified ? "Yes" : "No"}
//         </span>
//       ),
//     },
//     {
//       title: "Created At",
//       dataIndex: "createdAt",
//       key: "createdAt",
//     },
//     {
//       title: "Action",
//       key: "action",
//       align: "center",
//       render: (_, record) => (
//         <div style={{ position: "relative" }}>
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               handleActionClick(record.key);
//             }}
//           >
//             •••
//           </button>
//           {actionDropdown === record.key && (
//             <div className="absolute right-0 top-full mt-2 w-32 bg-white border rounded shadow-lg z-20">
//               <div
//                 className="px-4 py-2 cursor-pointer hover:bg-blue-100"
//                 onClick={() => handleViewProfile(record)}
//               >
//                 View Profile
//               </div>
//               <div
//                 className="px-4 py-2 cursor-pointer hover:bg-red-600 bg-red-500 text-white"
//                 onClick={() => handleBlock(record)}
//               >
//                 Block
//               </div>
//             </div>
//           )}
//         </div>
//       ),
//     },
//   ];

//   // Close dropdown
//   useEffect(() => {
//     const handleClickOutside = () => setActionDropdown(null);
//     if (actionDropdown !== null)
//       document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, [actionDropdown]);

//   if (isLoading || statsLoading) {
//     return <div className="p-4">Loading users...</div>;
//   }

//   return (
//     <div className="admin-page p-2">
//       {/* Metrics */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         {metrics.map((metric, index) => (
//           <Card key={index} className="bg-white shadow-sm border-0">
//             <CardContent className="p-4">
//               <div className="space-y-2">
//                 <div className="flex items-center justify-between">
//                   <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                     <metric.icon className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <span
//                     className={`font-medium ${
//                       metric.growthType === "increase"
//                         ? "text-green-600"
//                         : metric.growthType === "decrease"
//                         ? "text-red-600"
//                         : "text-gray-500"
//                     }`}
//                   >
//                     {metric.growth}
//                   </span>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
//                   <p className="text-2xl font-bold text-gray-900">
//                     {metric.value}
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Search */}
//       <div className="relative mb-6">
//         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//         <input
//           type="text"
//           placeholder="Search here..."
//           className="w-2xl pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           value={searchTerm}
//           onChange={(e) => {
//             setSearchTerm(e.target.value);
//             setPage(1);
//           }}
//         />
//       </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-4">
//         {["POSTER", "TASKER", "ALL"].map((tab) => (
//           <button
//             key={tab}
//             className={`px-6 py-2 rounded-t-lg font-semibold border-b-2 transition-colors duration-200 ${
//               activeTab === tab
//                 ? "border-blue-500 text-blue-600 bg-blue-50"
//                 : "border-transparent text-gray-500 bg-white"
//             }`}
//             onClick={() => {
//               setActiveTab(tab);
//               setPage(1);
//             }}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Table */}
//       <Table
//         className="border border-[#F0F0F0] overflow-y-auto rounded-lg shadow-sm"
//         dataSource={userdata}
//         columns={columns}
//         pagination={{
//           pageSize: limit,
//           current: page,
//           total: data?.pagination?.total,
//           onChange: (newPage) => setPage(newPage),
//           position: ["bottomRight"],
//         }}
//         scroll={{ x: "max-content" }}
//         rowClassName={() => "custom-table-row"}
//         size="middle"
//       />
//     </div>
//   );
// };

// export default Users;

import React, { useState, useEffect } from "react";
import { Search, UserCheck, FileText } from "lucide-react";
import { Card } from "../../../ui/Card";
import { CardContent } from "../../../ui/CardContent";
import { Table } from "antd";
import {
  useGetUsersQuery,
  useGetUsersStatsQuery,
} from "../../../../redux/features/users/usersapi";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const limit = 10;

  // ✅ Fetch users
  const { data, isLoading } = useGetUsersQuery({
    page,
    limit,
    role: activeTab !== "ALL" ? activeTab : undefined, // ALL হলে role পাঠাবে না
    searchTerm,
  });

  // ✅ Fetch stats
  const { data: statsData, isLoading: statsLoading } = useGetUsersStatsQuery();

  const stats = statsData?.data || {};

  const metrics = [
    {
      title: "Total Users",
      value: stats.allUsers?.total || 0,
      growth: stats.allUsers?.formattedGrowth || "0%",
      growthType: stats.allUsers?.growthType || "neutral",
      icon: UserCheck,
    },
    {
      title: "Total Taskers",
      value: stats.taskers?.total || 0,
      growth: stats.taskers?.formattedGrowth || "0%",
      growthType: stats.taskers?.growthType || "neutral",
      icon: UserCheck,
    },
    {
      title: "Total Posters",
      value: stats.posters?.total || 0,
      growth: stats.posters?.formattedGrowth || "0%",
      growthType: stats.posters?.growthType || "neutral",
      icon: FileText,
    },
  ];

  // ✅ Map user data
  const userdata =
    data?.data?.map((user) => ({
      key: user._id,
      name: user.name,
      email: user.email,
      userID: user._id,
      role: user.role,
      image: user.image,
      status: user.status,
      verified: user.verified,
      createdAt: new Date(user.createdAt).toLocaleDateString(),
    })) || [];

  // ✅ Action dropdown
  const [actionDropdown, setActionDropdown] = useState(null);

  const handleActionClick = (key) =>
    setActionDropdown(actionDropdown === key ? null : key);

  const handleViewProfile = (record) => {
    if (record.role === "TASKER") {
      navigate(`/Tasker-information/${record.userID}`);
    } else if (record.role === "POSTER") {
      navigate(`/poster-information/${record.userID}`);
    } else {
      console.warn("Unknown role:", record.role);
    }
    setActionDropdown(null);
  };

  const handleBlock = (record) => {
    alert(`Block user ${record.name}`);
    setActionDropdown(null);
  };

  // ✅ Table columns
  const columns = [
    {
      title: "Avatar",
      dataIndex: "image",
      key: "image",
      render: (img) => (
        <img
          src={img}
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover mx-auto"
        />
      ),
      align: "center",
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "User ID",
      dataIndex: "userID",
      key: "userID",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <span
          className={`px-2 py-1 rounded text-white ${
            role === "POSTER"
              ? "bg-blue-500"
              : role === "TASKER"
              ? "bg-green-500"
              : "bg-gray-500"
          }`}
        >
          {role}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className={`px-2 py-1 rounded text-white ${
            status === "ACTIVE" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Verified",
      dataIndex: "verified",
      key: "verified",
      render: (verified) => (
        <span
          className={`px-2 py-1 rounded ${
            verified
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {verified ? "Yes" : "No"}
        </span>
      ),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <div style={{ position: "relative" }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleActionClick(record.key);
            }}
          >
            •••
          </button>
          {actionDropdown === record.key && (
            <div className="absolute right-0 top-full mt-2 w-32 bg-white border rounded shadow-lg z-20">
              <div
                className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                onClick={() => handleViewProfile(record)}
              >
                View Profile
              </div>
              <div
                className="px-4 py-2 cursor-pointer hover:bg-red-600 bg-red-500 text-white"
                onClick={() => handleBlock(record)}
              >
                Block
              </div>
            </div>
          )}
        </div>
      ),
    },
  ];

  // ✅ Close dropdown
  useEffect(() => {
    const handleClickOutside = () => setActionDropdown(null);
    if (actionDropdown !== null)
      document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [actionDropdown]);

  if (isLoading || statsLoading) {
    return <div className="p-4">Loading users...</div>;
  }

  return (
    <div className="admin-page p-2">
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="bg-white shadow-sm border-0">
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span
                    className={`font-medium ${
                      metric.growthType === "increase"
                        ? "text-green-600"
                        : metric.growthType === "decrease"
                        ? "text-red-600"
                        : "text-gray-500"
                    }`}
                  >
                    {metric.growth}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metric.value}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          placeholder="Search here..."
          className="w-2xl pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1);
          }}
        />
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        {["POSTER", "TASKER", "ALL"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-t-lg font-semibold border-b-2 transition-colors duration-200 ${
              activeTab === tab
                ? "border-blue-500 text-blue-600 bg-blue-50"
                : "border-transparent text-gray-500 bg-white"
            }`}
            onClick={() => {
              setActiveTab(tab);
              setPage(1);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <Table
        className="border border-[#F0F0F0] overflow-y-auto rounded-lg shadow-sm"
        dataSource={userdata}
        columns={columns}
        pagination={{
          pageSize: limit,
          current: page,
          total: data?.pagination?.total,
          onChange: (newPage) => setPage(newPage),
          position: ["bottomRight"],
        }}
        scroll={{ x: "max-content" }}
        rowClassName={() => "custom-table-row"}
        size="middle"
      />
    </div>
  );
};

export default Users;
