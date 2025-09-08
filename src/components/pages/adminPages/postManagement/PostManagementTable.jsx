import React, { useState, useEffect } from "react";
import { Table, Input } from "antd";
import { useGetAllTasksQuery } from "../../../../redux/features/postManagement/postManagementApi";
import { Search } from "lucide-react";

const PostManagementTable = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // For debounce

  // ✅ Fetch tasks from API
  const { data, isLoading } = useGetAllTasksQuery(
    { page, limit, searchTerm },
    { refetchOnMountOrArgChange: true } // refetch when params change
  );

  const tasks = data?.data || [];
  const pagination = data?.pagination || {};

  useEffect(() => {
    setSearchTerm(search); // Directly update the search term
    setPage(1); // Reset to the first page
  }, [search]); // Runs immediately when `search` changes

  // ✅ Table columns
  const columns = [
    { title: "Poster ID", dataIndex: "userId", key: "userId" },
    { title: "Post Title", dataIndex: "title", key: "title" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Task Location", dataIndex: "taskLocation", key: "taskLocation" },
    {
      title: "Budget",
      dataIndex: "taskBudget",
      key: "taskBudget",
      render: (val) => `$${val}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className={`px-2 py-1 rounded text-white ${
            status === "active"
              ? "bg-green-500"
              : status === "completed"
              ? "bg-blue-500"
              : "bg-red-500"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2">
          <button
            className="px-2 py-1 bg-blue-500 text-white rounded"
            onClick={() => alert(`Viewing: ${record.title}`)}
          >
            View
          </button>
          <button
            className="px-2 py-1 bg-red-500 text-white rounded"
            onClick={() => alert(`Deleting: ${record.title}`)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4">
      {/* Search Input */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          placeholder="Search here..."
          className="w-2xl pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <Table
        loading={isLoading}
        dataSource={tasks.map((task) => ({ ...task, key: task._id }))}
        columns={columns}
        pagination={{
          current: pagination.page || page,
          pageSize: pagination.limit || limit,
          total: pagination.total || 0,
          onChange: (newPage, newPageSize) => {
            setPage(newPage);
            setLimit(newPageSize);
          },
          position: ["bottomRight"],
        }}
      />
    </div>
  );
};

export default PostManagementTable;
