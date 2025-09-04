import { Table, Tag } from "antd";

const PosterInformationTable = ({ data }) => {
  const columns = [
    {
      title: "Task Title",
      dataIndex: "title",
      key: "title",
      align: "center",
    },
    {
      title: "Task Category",
      dataIndex: "taskCategory",
      key: "taskCategory",
      align: "center",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      align: "center",
    },
    {
      title: "Budget",
      dataIndex: "taskBudget",
      key: "taskBudget",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status) => {
        let style = {};
        if (status === "active") {
          style = { backgroundColor: "#B3E5FF", color: "#007ACC" }; // brighter blue
        } else if (status === "assigned") {
          style = { backgroundColor: "#FFF2B8", color: "#D48806" }; // more vibrant yellow
        } else if (status === "pending") {
          style = { backgroundColor: "#FFB3B3", color: "#D32020" }; // brighter red
        }

        return (
          <Tag
            style={{
              ...style,
              fontWeight: "500",
              fontSize: "16px", // increased font size
              borderRadius: "8px",
              padding: "6px 18px", // slightly larger padding
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
      render: (date) => new Date(date).toLocaleDateString(),
      align: "center",
    },
  ];

  return <Table dataSource={data} columns={columns} rowKey="_id" />;
};

export default PosterInformationTable;
