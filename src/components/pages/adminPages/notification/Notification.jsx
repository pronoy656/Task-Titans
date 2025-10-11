// import React from 'react';
// import { Search, User, AlertCircle, MessageSquare, CheckCircle } from "lucide-react"

// const notifications = [
//   {
//     id: 1,
//     icon: User,
//     iconColor: "text-gray-600",
//     bgColor: "bg-blue-50",
//     message: 'User "john@example.com" has successfully upgraded from Free to Pro.',
//     time: "2 min ago",
//   },
//   {
//     id: 2,
//     icon: AlertCircle,
//     iconColor: "text-red-500",
//     bgColor: "bg-blue-50",
//     message: 'User "sadia.user42@gmail.com" attempted to upgrade to Pro but encountered an issue',
//     time: "10 mins ago",
//   },
//   {
//     id: 3,
//     icon: MessageSquare,
//     iconColor: "text-yellow-500",
//     bgColor: "bg-blue-50",
//     message: 'User "rahim.khan12" submitted a new suggestion: "Please add a savings goal tracker."',
//     time: "30 min ago",
//   },
//   {
//     id: 4,
//     icon: CheckCircle,
//     iconColor: "text-green-500",
//     bgColor: "bg-blue-50",
//     message:
//       'User "tasnia_98" left a 5-star review on the Play Store: "Very useful app. Helped me track my expenses easily!"',
//     time: "2 hours ago",
//   },
//   {
//     id: 5,
//     icon: MessageSquare,
//     iconColor: "text-yellow-500",
//     bgColor: "bg-white",
//     message: 'User "robin_dev23" has submitted a request to review the app.',
//     time: "Yesterday",
//   },
// ]
// const Notification = () => {
//     return (
//         <div className='admin-page'>
//              <div className="p-6 bg-white">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-3xl font-semibold text-gray-900">Notifications</h1>
//         <button className="text-blue-600 hover:text-blue-700 font-medium">Mark all as read</button>
//       </div>

//       {/* Search Bar */}
//       <div className="relative mb-6">
//         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//         <input
//           type="text"
//           placeholder="Search here......"
//           className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//         />
//       </div>

//       {/* Notifications List */}
//       <div className="space-y-3">
//         {notifications.map((notification) => {
//           const IconComponent = notification.icon
//           return (
//             <div
//               key={notification.id}
//               className={`flex items-start gap-5 p-4 rounded-lg border border-gray-100 ${notification.bgColor}`}
//             >
//               <div className="flex-shrink-0 mt-0.5">
//                 <IconComponent className={`h-7 w-7 ${notification.iconColor}`} />
//               </div>
//               <div className="flex-1 min-w-0">
//                 <p className="font-medium text-gray-900 leading-relaxed">{notification.message}</p>
//                 <p className="text-sm font-medium text-gray-500 mt-1">{notification.time}</p>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//         </div>
//     );
// };

// export default Notification;
///////////////////////////////////////////////////////////

// src/pages/admin/Notification.jsx
// import React, { useState } from "react";
// import {
//   Search,
//   User,
//   AlertCircle,
//   MessageSquare,
//   CheckCircle,
// } from "lucide-react";
// import {
//   useGetAdminNotificationsQuery,
//   useMarkAllAsReadMutation,
//   useMarkSingleNotificationAsReadMutation,
// } from "../../../../redux/features/notificationApi/notificationApi";
// // import {
// //   useGetAdminNotificationsQuery,
// //   useMarkSingleNotificationAsReadMutation,
// //   useMarkAllAsReadMutation,
// // } from "../../redux/features/notification/notificationApi";

// const iconMap = {
//   user: User,
//   alert: AlertCircle,
//   message: MessageSquare,
//   check: CheckCircle,
// };

// const Notification = () => {
//   const [page, setPage] = useState(1);
//   const limit = 10;

//   // ✅ Fetch notifications
//   const { data, isLoading, isError } = useGetAdminNotificationsQuery({
//     page,
//     limit,
//   });

//   const [markSingleAsRead, { isLoading: markingSingle }] =
//     useMarkSingleNotificationAsReadMutation();
//   const [markAllAsRead, { isLoading: markingAll }] = useMarkAllAsReadMutation();

//   const notifications = data?.data?.data || [];
//   const pagination = data?.data?.pagination || {};
//   const unreadCount = data?.data?.unreadCount || 0;

//   // ✅ Handle marking a single notification as read
//   const handleMarkAsRead = async (id) => {
//     try {
//       await markSingleAsRead(id).unwrap();
//     } catch (error) {
//       console.error("Error marking notification as read:", error);
//     }
//   };

//   // ✅ Handle marking all notifications as read
//   const handleMarkAllAsRead = async () => {
//     try {
//       await markAllAsRead().unwrap();
//     } catch (error) {
//       console.error("Error marking all as read:", error);
//     }
//   };

//   if (isLoading)
//     return <p className="p-6 text-gray-500">Loading notifications...</p>;
//   if (isError)
//     return <p className="p-6 text-red-500">Failed to load notifications.</p>;

//   return (
//     <div className="admin-page">
//       <div className="p-6 bg-white">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl font-semibold text-gray-900">
//             Notifications{" "}
//             {unreadCount > 0 && (
//               <span className="text-sm text-blue-600 ml-2">
//                 ({unreadCount} unread)
//               </span>
//             )}
//           </h1>
//           <button
//             onClick={handleMarkAllAsRead}
//             disabled={markingAll}
//             className="text-blue-600 hover:text-blue-700 font-medium disabled:opacity-50"
//           >
//             {markingAll ? "Marking..." : "Mark all as read"}
//           </button>
//         </div>

//         {/* Search Bar */}
//         <div className="relative mb-6">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//           <input
//             type="text"
//             placeholder="Search here......"
//             className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//         </div>

//         {/* Notifications List */}
//         <div className="space-y-3">
//           {notifications.length > 0 ? (
//             notifications.map((notification) => {
//               const IconComponent = iconMap[notification.type] || MessageSquare;
//               return (
//                 <div
//                   key={notification.id}
//                   className={`flex items-start justify-between p-4 rounded-lg border border-gray-100 ${
//                     notification.isRead ? "bg-white" : "bg-blue-50"
//                   }`}
//                 >
//                   <div className="flex items-start gap-5">
//                     <div className="flex-shrink-0 mt-0.5">
//                       <IconComponent className="h-7 w-7 text-blue-500" />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <p className="font-medium text-gray-900 leading-relaxed">
//                         {notification.message || "No message"}
//                       </p>
//                       <p className="text-sm font-medium text-gray-500 mt-1">
//                         {notification.time || "Just now"}
//                       </p>
//                     </div>
//                   </div>

//                   {/* ✅ Mark Single as Read Button */}
//                   {!notification.isRead && (
//                     <button
//                       onClick={() => handleMarkAsRead(notification.id)}
//                       disabled={markingSingle}
//                       className="text-sm text-blue-600 hover:text-blue-700 font-medium disabled:opacity-50"
//                     >
//                       {markingSingle ? "..." : "Mark as read"}
//                     </button>
//                   )}
//                 </div>
//               );
//             })
//           ) : (
//             <p className="text-gray-500 text-center py-6">
//               No notifications found.
//             </p>
//           )}
//         </div>

//         {/* Pagination */}
//         {pagination.totalPage > 1 && (
//           <div className="flex justify-center items-center mt-6 gap-3">
//             <button
//               onClick={() => setPage((p) => Math.max(1, p - 1))}
//               disabled={page === 1}
//               className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 disabled:opacity-50"
//             >
//               Previous
//             </button>

//             <span className="text-gray-700">
//               Page {pagination.page} of {pagination.totalPage}
//             </span>

//             <button
//               onClick={() =>
//                 setPage((p) => Math.min(pagination.totalPage, p + 1))
//               }
//               disabled={page === pagination.totalPage}
//               className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Notification;

// src/pages/admin/Notification.jsx
import React, { useState } from "react";
import {
  Search,
  Bell,
  AlertCircle,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import {
  useGetAdminNotificationsQuery,
  useMarkAllAsReadMutation,
  useMarkSingleNotificationAsReadMutation,
} from "../../../../redux/features/notificationApi/notificationApi";

const iconMap = {
  ADMIN: Bell,
  alert: AlertCircle,
  message: MessageSquare,
  check: CheckCircle,
};

const Notification = () => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading, isError } = useGetAdminNotificationsQuery({
    page,
    limit,
  });
  const [markSingleAsRead, { isLoading: markingSingle }] =
    useMarkSingleNotificationAsReadMutation();
  const [markAllAsRead, { isLoading: markingAll }] = useMarkAllAsReadMutation();

  const notifications = data?.data?.data || [];
  const pagination = data?.data?.pagination || {};
  const unreadCount = data?.data?.unreadCount || 0;

  const handleMarkAsRead = async (id) => {
    try {
      await markSingleAsRead(id).unwrap();
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead().unwrap();
    } catch (error) {
      console.error("Error marking all as read:", error);
    }
  };

  if (isLoading)
    return <p className="p-6 text-gray-500">Loading notifications...</p>;
  if (isError)
    return <p className="p-6 text-red-500">Failed to load notifications.</p>;

  return (
    <div className="admin-page">
      <div className="p-6 bg-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">
            Notifications{" "}
            {unreadCount > 0 && (
              <span className="text-sm text-blue-600 ml-2">
                ({unreadCount} unread)
              </span>
            )}
          </h1>
          <button
            onClick={handleMarkAllAsRead}
            disabled={markingAll}
            className="text-blue-600 hover:text-blue-700 font-medium disabled:opacity-50"
          >
            {markingAll ? "Marking..." : "Mark all as read"}
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.length > 0 ? (
            notifications.map((notification) => {
              const IconComponent = iconMap[notification.type] || MessageSquare;
              return (
                <div
                  key={notification._id}
                  className={`flex items-start justify-between p-4 rounded-lg border border-gray-100 ${
                    notification.isRead ? "bg-white" : "bg-blue-50"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 mt-0.5">
                      <IconComponent className="h-7 w-7 text-blue-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900">
                        {notification.title}
                      </p>
                      <p className="text-gray-700">{notification.text}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(notification.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {!notification.isRead && (
                    <button
                      onClick={() => handleMarkAsRead(notification._id)}
                      disabled={markingSingle}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium disabled:opacity-50"
                    >
                      {markingSingle ? "..." : "Mark as read"}
                    </button>
                  )}
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 text-center py-6">
              No notifications found.
            </p>
          )}
        </div>

        {/* Pagination */}
        {pagination.totalPage > 1 && (
          <div className="flex justify-center items-center mt-6 gap-3">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 disabled:opacity-50"
            >
              Previous
            </button>

            <span className="text-gray-700">
              Page {pagination.page} of {pagination.totalPage}
            </span>

            <button
              onClick={() =>
                setPage((p) => Math.min(pagination.totalPage, p + 1))
              }
              disabled={page === pagination.totalPage}
              className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
