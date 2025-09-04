import { Table, Tag } from "antd";

const TaskerInformationTable = ({ data }) => {
  const columns = [
    {
      title: "Task Title",
      dataIndex: ["taskId", "title"],
      key: "title",
      align: "center",
    },
    {
      title: "Task Description",
      dataIndex: ["taskId", "description"],
      key: "description",
      align: "center",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
    },
    {
      title: "Task Start Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => new Date(date).toLocaleDateString(),
      align: "center",
    },
  ];

  return <Table dataSource={data} columns={columns} rowKey="_id" />;
};

export default TaskerInformationTable;
