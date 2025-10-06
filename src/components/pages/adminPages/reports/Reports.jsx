import React, { useState } from "react";
import { createPortal } from "react-dom";

import {
  UserCheck,
  FileText,
  MoreVertical,
  Eye,
  AlertTriangle,
  BarChart,
  AlertTriangleIcon,
  FileTextIcon,
} from "lucide-react";
import { Card } from "../../../ui/Card";
import { CardContent } from "../../../ui/CardContent";
import { Table, Tag } from "antd";
import {
  useGetReportsQuery,
  useGetReportsStatsQuery,
} from "../../../../redux/features/reports/reportApi";

const Reports = () => {
  const [page, setPage] = useState(1);
  const limit = 10;

  // Fetch reports table
  const { data, isLoading } = useGetReportsQuery({ page, limit });

  // Fetch reports stats
  const { data: statsData, isLoading: statsLoading } =
    useGetReportsStatsQuery();

  console.log("Reports:", data);
  console.log("Stats:", statsData);

  // Metrics Cards (from stats API)
  const metrics = [
    {
      title: "Total Reports",
      value: statsData?.data?.allReports?.total ?? 0,
      growth: statsData?.data?.allReports?.formattedGrowth ?? "0%",
      icon: UserCheck,
    },
    {
      title: "Resolved Reports",
      value: statsData?.data?.resolved?.total ?? 0,
      growth: statsData?.data?.resolved?.formattedGrowth ?? "0%",
      icon: FileTextIcon,
    },
    {
      title: "Pending Reports",
      value: statsData?.data?.pending?.total ?? 0,
      growth: statsData?.data?.pending?.formattedGrowth ?? "0%",
      icon: AlertTriangleIcon,
    },
    {
      title: "Reviewed Reports", // ✅ নতুন ফিল্ড যুক্ত করলাম
      value: statsData?.data?.reviewed?.total ?? 0,
      growth: statsData?.data?.reviewed?.formattedGrowth ?? "0%",
      icon: BarChart, // যেকোনো icon বসাতে পারো (lucide-react থেকে)
    },
  ];

  // Action dropdown state
  const [actionDropdown, setActionDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const handleActionClick = (e, key) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect(); // button position in viewport
    setDropdownPosition({
      top: rect.bottom + window.scrollY,
      left: rect.right - 120,
    }); // adjust width
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
            onClick={(e) => handleActionClick(e, record.key)}
          >
            <MoreVertical className="w-5 h-5 text-gray-700" />
          </button>
          {actionDropdown === record.key &&
            createPortal(
              <div
                style={{
                  position: "absolute",
                  top: dropdownPosition.top,
                  left: dropdownPosition.left,
                  width: 120,
                  background: "#fff",
                  border: "1px solid #e5e5e5",
                  borderRadius: 8,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                  zIndex: 9999,
                }}
              >
                <div
                  className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-blue-100"
                  onClick={() => handleView(record)}
                >
                  <Eye className="w-4 h-4 text-blue-500" />
                  <span>View</span>
                </div>
              </div>,
              document.body
            )}
        </div>
      ),
    },
  ];

  if (isLoading || statsLoading) {
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
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
                  <p className="text-lg font-semibold text-gray-600 mb-1">
                    {metric.title}
                  </p>
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
        className="border border-[#F0F0F0]  rounded-lg shadow-sm"
        dataSource={tableData}
        columns={columns}
        pagination={{
          pageSize: limit,
          current: page,
          total: data?.pagination?.total,
          onChange: (newPage) => setPage(newPage),
          position: ["bottomRight"],
        }}
        scroll={{ x: "max-content", y: 400 }}
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
