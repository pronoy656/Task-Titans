// import React, { useState } from "react";
// import { Search, UserCheck, FileText, MoreVertical, Eye } from "lucide-react";
// import { Card } from "../../../ui/Card";
// import { CardContent } from "../../../ui/CardContent";
// import { Table, Tag } from "antd";

// const Reports = () => {
//   // For card data
//   const metrics = [
//     {
//       title: "Total Reports",
//       value: "124,563",
//       growth: "+12.5%",
//       icon: UserCheck,
//     },
//     {
//       title: "Resolved Reports",
//       value: "124,563",
//       growth: "+12.5%",
//       icon: UserCheck,
//     },
//     {
//       title: "Dismiss Reports",
//       value: "124,563",
//       growth: "+12.5%",
//       icon: FileText,
//     },
//   ];

//   // Action dropdown state and handler
//   const [actionDropdown, setActionDropdown] = useState(null);
//   const handleActionClick = (key) => {
//     setActionDropdown(actionDropdown === key ? null : key);
//   };
//   const handleView = (record) => {
//     alert(`View report: ${record.reportID}`);
//     setActionDropdown(null);
//   };
//   // ...existing code...
//   // Table data
//   const posterUserdata = [
//     {
//       key: "9",
//       reportID: "123456",
//       email: "john.doe@gmail.com",
//       reporter: "John",
//       category: "Client complaint (Customer Service)",
//       taskStatus: "Resolved",
//       taskStartDate: "15/07/2025",
//     },
//     {
//       key: "10",
//       reportID: "567842",
//       email: "ava.martin@hotmail.com",
//       reporter: "Ava",
//       category: "Data mismatch (IT)",
//       taskStatus: "Pending",
//       taskStartDate: "16/07/2025",
//     },
//     {
//       key: "11",
//       reportID: "439812",
//       email: "william.anderson@gmail.com",
//       reporter: "William",
//       category: "Unauthorized access (Security)",
//       taskStatus: "Resolved",
//       taskStartDate: "17/07/2025",
//     },
//     {
//       key: "12",
//       reportID: "765421",
//       email: "mia.thompson@gmail.com",
//       reporter: "Mia",
//       category: "Training required (HR)",
//       taskStatus: "Dismiss",
//       taskStartDate: "18/07/2025",
//     },
//     {
//       key: "13",
//       reportID: "982134",
//       email: "benjamin.moore@yahoo.com",
//       reporter: "Benjamin",
//       category: "Performance issue (Employee)",
//       taskStatus: "Resolved",
//       taskStartDate: "19/07/2025",
//     },
//     {
//       key: "14",
//       reportID: "652391",
//       email: "charlotte.garcia@gmail.com",
//       reporter: "Charlotte",
//       category: "Duplicate entry (Database)",
//       taskStatus: "Pending",
//       taskStartDate: "20/07/2025",
//     },
//     {
//       key: "15",
//       reportID: "871245",
//       email: "lucas.martinez@hotmail.com",
//       reporter: "Lucas",
//       category: "Miscommunication (Team)",
//       taskStatus: "Resolved",
//       taskStartDate: "21/07/2025",
//     },
//     {
//       key: "16",
//       reportID: "739182",
//       email: "amelia.clark@gmail.com",
//       reporter: "Amelia",
//       category: "Fraudulent activity (Finance)",
//       taskStatus: "Dismiss",
//       taskStartDate: "22/07/2025",
//     },
//     {
//       key: "17",
//       reportID: "564891",
//       email: "henry.lewis@gmail.com",
//       reporter: "Henry",
//       category: "Software crash (IT)",
//       taskStatus: "Resolved",
//       taskStartDate: "23/07/2025",
//     },
//     {
//       key: "18",
//       reportID: "783912",
//       email: "harper.walker@gmail.com",
//       reporter: "Harper",
//       category: "Delay in approval (Management)",
//       taskStatus: "Pending",
//       taskStartDate: "24/07/2025",
//     },
//     {
//       key: "19",
//       reportID: "921345",
//       email: "alexander.hall@gmail.com",
//       reporter: "Alexander",
//       category: "Incorrect report (Analytics)",
//       taskStatus: "Dismiss",
//       taskStartDate: "25/07/2025",
//     },
//     {
//       key: "20",
//       reportID: "894512",
//       email: "ella.young@hotmail.com",
//       reporter: "Ella",
//       category: "Resource shortage (Operations)",
//       taskStatus: "Resolved",
//       taskStartDate: "26/07/2025",
//     },
//   ];

//   // Table Column
//   const columns = [
//     {
//       title: (
//         <span style={{ display: "block", textAlign: "center" }}>Report ID</span>
//       ),
//       dataIndex: "reportID",
//       key: "reportID",
//       align: "center",
//       render: (text) => (
//         <span
//           style={{ fontSize: "16px", display: "block", textAlign: "center" }}
//         >
//           {text}
//         </span>
//       ),
//     },
//     {
//       title: (
//         <span style={{ display: "block", textAlign: "center" }}>Email</span>
//       ),
//       dataIndex: "email",
//       key: "email",
//       align: "center",
//       render: (text) => (
//         <span
//           style={{ fontSize: "16px", display: "block", textAlign: "center" }}
//         >
//           {text}
//         </span>
//       ),
//     },
//     {
//       title: (
//         <span style={{ display: "block", textAlign: "center" }}>Reporter</span>
//       ),
//       dataIndex: "reporter",
//       key: "reporter",
//       align: "center",
//       render: (text) => (
//         <span
//           style={{ fontSize: "16px", display: "block", textAlign: "center" }}
//         >
//           {text}
//         </span>
//       ),
//     },
//     {
//       title: (
//         <span style={{ display: "block", textAlign: "center" }}>Category</span>
//       ),
//       dataIndex: "category",
//       key: "category",
//       align: "center",
//       render: (text) => (
//         <span
//           style={{ fontSize: "16px", display: "block", textAlign: "center" }}
//         >
//           {text}
//         </span>
//       ),
//     },
//     {
//       title: (
//         <span style={{ display: "block", textAlign: "center" }}>
//           Task Status
//         </span>
//       ),
//       dataIndex: "taskStatus",
//       key: "reporter",
//       align: "center",
//       render: (TaskStatus) => {
//         let style = {};
//         if (TaskStatus === "Resolved") {
//           style = {
//             backgroundColor: "#E6FFE6",
//             color: "#00B500",
//             border: "1px solid #91D5FF",
//           };
//         } else if (TaskStatus === "Dismiss") {
//           style = {
//             backgroundColor: "#FFE6E6",
//             color: "#FF0000",
//             border: "1px solid #FF0000",
//           };
//         } else if (TaskStatus === "Pending") {
//           style = {
//             backgroundColor: "#FFFBE6",
//             color: "#FAAD14",
//             border: "1px solid #FFE58F",
//           };
//         } else {
//           style = {
//             backgroundColor: "#F5F5F5",
//             color: "#000000",
//             border: "1px solid #D9D9D9",
//           };
//         }
//         return (
//           <Tag
//             style={{
//               ...style,
//               fontWeight: "semibold",
//               borderRadius: "10px",
//               padding: "2px",
//               fontSize: "16px",
//               display: "block",
//               textAlign: "center",
//             }}
//           >
//             {TaskStatus}
//           </Tag>
//         );
//       },
//     },
//     {
//       title: (
//         <span style={{ display: "block", textAlign: "center" }}>
//           Task Start Date
//         </span>
//       ),
//       dataIndex: "taskStartDate",
//       key: "taskStartDate",
//       align: "center",
//       render: (text) => (
//         <span
//           style={{ fontSize: "16px", display: "block", textAlign: "center" }}
//         >
//           {text}
//         </span>
//       ),
//     },
//     {
//       title: (
//         <span style={{ display: "block", textAlign: "center" }}>Action</span>
//       ),
//       dataIndex: "action",
//       key: "action",
//       align: "center",
//       render: (text, record) => (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             minHeight: 48,
//             minWidth: 40,
//             position: "relative",
//           }}
//         >
//           <button
//             className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//             onClick={(e) => {
//               e.stopPropagation();
//               handleActionClick(record.key);
//             }}
//           >
//             <MoreVertical className="w-5 h-5 text-gray-700" />
//           </button>
//           {actionDropdown === record.key && (
//             <div
//               style={{
//                 position: "absolute",
//                 right: 0,
//                 top: "110%",
//                 marginTop: 8,
//                 width: 120,
//                 background: "#fff",
//                 border: "1px solid #e5e5e5",
//                 borderRadius: 8,
//                 boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
//                 zIndex: 20,
//               }}
//             >
//               <div
//                 className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-blue-100 text-sm text-gray-700"
//                 onClick={() => handleView(record)}
//               >
//                 <Eye className="w-4 h-4 text-blue-500" />
//                 <span>View</span>
//               </div>
//             </div>
//           )}
//         </div>
//       ),
//     },
//   ];
//   return (
//     <div className="admin-page">
//       {/* Metrics Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {metrics.map((metric, index) => (
//           <Card key={index} className="bg-white shadow-sm border-0">
//             <CardContent className="p-4">
//               <div className="">
//                 <div className="space-y-2">
//                   <div className="flex items-center justify-between">
//                     <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                       <metric.icon className="w-6 h-6 text-blue-600" />
//                     </div>
//                     <span className="text-green-600 font-medium justify-end">
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
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//       {/* Table */}
//       <div>
//         <div className="scrollbar-hide">
//           <Table
//             className="border border-[#F0F0F0] overflow-y-auto custom-table-row mt-10"
//             dataSource={posterUserdata}
//             columns={columns}
//             pagination={{ pageSize: 8, position: ["bottomRight"] }}
//             scroll={{ x: "max-content" }}
//             rowClassName={() => "custom-table-row"}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// // Add custom CSS for minimal row gap
// const style = document.createElement("style");
// style.innerHTML = `
//   .custom-table-row td {
//     padding-top: 6px !important;
//     padding-bottom: 6px !important;
//   }
// `;
// document.head.appendChild(style);

// export default Reports;

import React, { useState } from "react";
import { Search, UserCheck, FileText, MoreVertical, Eye } from "lucide-react";
import { Card } from "../../../ui/Card";
import { CardContent } from "../../../ui/CardContent";
import { Table, Tag } from "antd";
import { useGetReportsQuery } from "../../../../redux/features/reports/reportApi";

const Reports = () => {
  const [page, setPage] = useState(1);
  const limit = 10;

  // Fetch reports dynamically
  const { data, isLoading } = useGetReportsQuery({ page, limit });
  console.log(data);

  // Metrics Cards
  const metrics = [
    {
      title: "Total Reports",
      value: data?.pagination?.total || 0,
      growth: "+12.5%",
      icon: UserCheck,
    },
    {
      title: "Resolved Reports",
      value: data?.data?.filter((r) => r.status === "resolved").length || 0,
      growth: "+5%",
      icon: UserCheck,
    },
    {
      title: "Pending Reports",
      value: data?.data?.filter((r) => r.status === "pending").length || 0,
      growth: "+2%",
      icon: FileText,
    },
  ];

  // Action dropdown state
  const [actionDropdown, setActionDropdown] = useState(null);
  const handleActionClick = (key) => {
    setActionDropdown(actionDropdown === key ? null : key);
  };
  const handleView = (record) => {
    alert(`View report: ${record.title}`);
    setActionDropdown(null);
  };

  // Transform API data for table
  const tableData =
    data?.data?.map((report) => ({
      key: report._id,
      reportID: report._id,
      title: report.title,
      description: report.description,
      reporter: report.reportedBy?.name,
      email: report.reportedBy?.email,
      role: report.reportedBy?.role,
      type: report.type,
      status: report.status,
      createdAt: new Date(report.createdAt).toLocaleDateString(),
    })) || [];

  // Table columns
  const columns = [
    {
      title: "Report ID",
      dataIndex: "reportID",
      key: "reportID",
      align: "center",
    },
    { title: "Title", dataIndex: "title", key: "title", align: "center" },
    {
      title: "Reporter",
      dataIndex: "reporter",
      key: "reporter",
      align: "center",
    },
    { title: "Email", dataIndex: "email", key: "email", align: "center" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status) => {
        let style = {};
        if (status === "resolved")
          style = { backgroundColor: "#E6FFE6", color: "#00B500" };
        else if (status === "dismiss")
          style = { backgroundColor: "#FFE6E6", color: "#FF0000" };
        else if (status === "pending")
          style = { backgroundColor: "#FFFBE6", color: "#FAAD14" };
        return (
          <Tag
            style={{
              ...style,
              fontWeight: "bold",
              borderRadius: 10,
              padding: "4px 12px",
              fontSize: 14,
              display: "block",
              textAlign: "center",
            }}
          >
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <div style={{ position: "relative" }}>
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200"
            onClick={(e) => {
              e.stopPropagation();
              handleActionClick(record.key);
            }}
          >
            <MoreVertical className="w-5 h-5 text-gray-700" />
          </button>
          {actionDropdown === record.key && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "110%",
                marginTop: 8,
                width: 120,
                background: "#fff",
                border: "1px solid #e5e5e5",
                borderRadius: 8,
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                zIndex: 20,
              }}
            >
              <div
                className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-blue-100"
                onClick={() => handleView(record)}
              >
                <Eye className="w-4 h-4 text-blue-500" />
                <span>View</span>
              </div>
            </div>
          )}
        </div>
      ),
    },
  ];

  if (isLoading) {
    return (
      <div className="admin-page p-4">
        {/* Metrics Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow-sm border-0 p-4 animate-pulse h-24 rounded-lg" />
          <div className="bg-white shadow-sm border-0 p-4 animate-pulse h-24 rounded-lg" />
          <div className="bg-white shadow-sm border-0 p-4 animate-pulse h-24 rounded-lg" />
        </div>

        {/* Table Skeleton */}
        <table className="w-full border-collapse border border-[#F0F0F0] rounded-lg">
          <thead>
            <tr>
              {Array(8)
                .fill(0)
                .map((_, i) => (
                  <th
                    key={i}
                    className="p-4 bg-gray-100 border-b border-gray-200"
                  >
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mx-auto" />
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {Array(10)
              .fill(0)
              .map((_, row) => (
                <tr key={row} className="hover:bg-gray-50">
                  {Array(8)
                    .fill(0)
                    .map((_, col) => (
                      <td key={col} className="p-4 text-center">
                        <div className="h-4 bg-gray-200 rounded animate-pulse mx-auto" />
                      </td>
                    ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="admin-page p-4">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="bg-white shadow-sm border-0">
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-green-600 font-medium">
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

      {/* Table */}
      <Table
        className="border border-[#F0F0F0] overflow-y-auto rounded-lg shadow-sm"
        dataSource={tableData}
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

      <style>{`
        .custom-table-row td {
          padding-top: 16px !important;
          padding-bottom: 16px !important;
          font-size: 16px;
        }
        .custom-table-row:hover {
          background-color: #f5f5f5;
        }
      `}</style>
    </div>
  );
};

export default Reports;
