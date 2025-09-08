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
  const { data, isLoading, refetch } = useGetUsersQuery({
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

  // ✅ Block User
  const handleBlock = async (record) => {
    try {
      const res = await fetch(
        `http://10.10.7.33:5000/api/v1/user/${record.userID}/block`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YThhODUxY2FiNDBmMDU1MGViMDQ3MyIsInJvbGUiOiJTVVBFUl9BRE1JTiIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJpYXQiOjE3NTczNTUwODksImV4cCI6MTc1NzQ0MTQ4OX0.u-7QbDqcyXvGwcTV6eMtt4pPpDIOJt7zvU2IDFplWso`,
          },
        }
      );
      const result = await res.json();
      if (result.success) {
        await refetch(); // 🔥 Refresh Users table
      }
      setActionDropdown(null);
    } catch (err) {
      console.error("Error blocking user:", err);
    }
  };

  // ✅ Unblock User
  const handleUnblock = async (record) => {
    try {
      const res = await fetch(
        `http://10.10.7.33:5000/api/v1/user/${record.userID}/unblock`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YThhODUxY2FiNDBmMDU1MGViMDQ3MyIsInJvbGUiOiJTVVBFUl9BRE1JTiIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJpYXQiOjE3NTczNTUwODksImV4cCI6MTc1NzQ0MTQ4OX0.u-7QbDqcyXvGwcTV6eMtt4pPpDIOJt7zvU2IDFplWso`,
          },
        }
      );
      const result = await res.json();
      if (result.success) {
        await refetch(); // 🔥 Refresh Users table
      }
      setActionDropdown(null);
    } catch (err) {
      console.error("Error unblocking user:", err);
    }
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
      render: (_, record) => {
        if (record.status === "RESTRICTED") {
          // 🔴 Blocked case
          return (
            <div style={{ position: "relative" }}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleActionClick(record.key);
                }}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Blocked
              </button>
              {actionDropdown === record.key && (
                <div className="absolute right-0 top-full mt-2 w-32 bg-white border rounded shadow-lg z-20">
                  <div
                    className="px-4 py-2 cursor-pointer hover:bg-green-500 hover:text-white"
                    onClick={() => handleUnblock(record)}
                  >
                    Unblock
                  </div>
                </div>
              )}
            </div>
          );
        } else {
          // 🟢 Active case
          return (
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
          );
        }
      },
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
