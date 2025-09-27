// import React from "react";
// import { DollarSign, Users, FileText, AlertTriangle } from "lucide-react";
// import Chart from "./Chart";
// import { useGetAllUsersQuery } from "../../../../redux/features/auth/authApi";

// const Dashboard = () => {
//   const { data } = useGetAllUsersQuery();
//   console.log(data);

//   const metrics = [
//     {
//       title: "Total Revenue",
//       value: "$124,563",
//       change: "+12.5%",
//       changeType: "positive",
//       icon: DollarSign,
//       iconColor: "text-blue-500",
//       iconBg: "bg-blue-50",
//     },
//     {
//       title: "Total Users",
//       value: "8,642",
//       change: "+8.3%",
//       changeType: "positive",
//       icon: Users,
//       iconColor: "text-blue-500",
//       iconBg: "bg-blue-50",
//     },
//     {
//       title: "Total Posts",
//       value: "15,842",
//       change: "+12.5%",
//       changeType: "positive",
//       icon: FileText,
//       iconColor: "text-blue-500",
//       iconBg: "bg-blue-50",
//     },
//     {
//       title: "Total Reports",
//       value: "15,842",
//       change: "-2.1%",
//       changeType: "negative",
//       icon: AlertTriangle,
//       iconColor: "text-blue-500",
//       iconBg: "bg-blue-50",
//     },
//   ];
//   return (
//     <div className="admin-page p-3">
//       {/* Overview calculation */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//         {metrics.map((metric, index) => {
//           const Icon = metric.icon;
//           return (
//             <div
//               key={index}
//               className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
//             >
//               <div className="flex items-center justify-between mb-4">
//                 <div className={`p-2 rounded-lg ${metric.iconBg}`}>
//                   <Icon className={`h-5 w-5 ${metric.iconColor}`} />
//                 </div>
//                 <span
//                   className={`text-sm font-medium ${
//                     metric.changeType === "positive"
//                       ? "text-green-600"
//                       : "text-red-600"
//                   }`}
//                 >
//                   {metric.change}
//                 </span>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-600 mb-1">
//                   {metric.title}
//                 </p>
//                 <p className="text-2xl font-bold text-gray-900">
//                   {metric.value}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div>
//         <Chart />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import { DollarSign, Users, FileText, AlertTriangle } from "lucide-react";
import Chart from "./Chart";
import { useGetDashboardStatsQuery } from "../../../../redux/features/dashBoardOverview/dashBoardOverview";
// import { useGetDashboardStatsQuery } from "../../../../redux/features/dashboard/dashboardApi";

const Dashboard = () => {
  const { data, isLoading, isError } = useGetDashboardStatsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  const stats = data?.data || {};

  const metrics = [
    {
      title: "Total Revenue",
      value: `$${stats.revenue?.total || 0}`,
      change: stats.revenue?.formattedGrowth || "0%",
      changeType:
        stats.revenue?.growthType === "increase"
          ? "positive"
          : stats.revenue?.growthType === "decrease"
          ? "negative"
          : "neutral",
      icon: DollarSign,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50",
    },
    {
      title: "Total Users",
      value: stats.allUsers?.total || 0,
      change: stats.allUsers?.formattedGrowth || "0%",
      changeType:
        stats.allUsers?.growthType === "increase"
          ? "positive"
          : stats.allUsers?.growthType === "decrease"
          ? "negative"
          : "neutral",
      icon: Users,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50",
    },
    {
      title: "Total Posts",
      value: stats.posts?.total || 0,
      change: stats.posts?.formattedGrowth || "0%",
      changeType:
        stats.posts?.growthType === "increase"
          ? "positive"
          : stats.posts?.growthType === "decrease"
          ? "negative"
          : "neutral",
      icon: FileText,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50",
    },
    {
      title: "Total Reports",
      value: stats.reports?.total || 0,
      change: stats.reports?.formattedGrowth || "0%",
      changeType:
        stats.reports?.growthType === "increase"
          ? "positive"
          : stats.reports?.growthType === "decrease"
          ? "negative"
          : "neutral",
      icon: AlertTriangle,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50",
    },
  ];

  return (
    <div className="admin-page p-3">
      {/* Overview calculation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${metric.iconBg}`}>
                  <Icon className={`h-5 w-5 ${metric.iconColor}`} />
                </div>
                <span
                  className={`text-sm font-medium ${
                    metric.changeType === "positive"
                      ? "text-green-600"
                      : metric.changeType === "negative"
                      ? "text-red-600"
                      : "text-gray-600"
                  }`}
                >
                  {metric.change}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {metric.title}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {metric.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
