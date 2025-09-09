// import { Table, Tag } from "antd";

// const PosterInformationTable = ({ data }) => {
//   const columns = [
//     {
//       title: "Task Title",
//       dataIndex: "title",
//       key: "title",
//       align: "center",
//     },
//     {
//       title: "Task Category",
//       dataIndex: "taskCategory",
//       key: "taskCategory",
//       align: "center",
//     },
//     {
//       title: "Description",
//       dataIndex: "description",
//       key: "description",
//       align: "center",
//     },
//     {
//       title: "Budget",
//       dataIndex: "taskBudget",
//       key: "taskBudget",
//       align: "center",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       align: "center",
//       render: (status) => {
//         let style = {};
//         if (status === "active") {
//           style = { backgroundColor: "#B3E5FF", color: "#007ACC" }; // brighter blue
//         } else if (status === "assigned") {
//           style = { backgroundColor: "#FFF2B8", color: "#D48806" }; // more vibrant yellow
//         } else if (status === "pending") {
//           style = { backgroundColor: "#FFB3B3", color: "#D32020" }; // brighter red
//         }

//         return (
//           <Tag
//             style={{
//               ...style,
//               fontWeight: "500",
//               fontSize: "16px", // increased font size
//               borderRadius: "8px",
//               padding: "6px 18px", // slightly larger padding
//             }}
//           >
//             {status}
//           </Tag>
//         );
//       },
//     },

//     {
//       title: "Created At",
//       dataIndex: "createdAt",
//       key: "createdAt",
//       render: (date) => new Date(date).toLocaleDateString(),
//       align: "center",
//     },
//   ];

//   return <Table dataSource={data} columns={columns} rowKey="_id" />;
// };

// export default PosterInformationTable;
import { Table, Tag, Card } from "antd";

const PosterInformationTable = ({ data }) => {
  const columns = [
    {
      title: "Task Title",
      dataIndex: "title",
      key: "title",
      align: "center",
      render: (text) => (
        <span className="font-semibold text-gray-800">{text}</span>
      ),
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
      ellipsis: true, // prevent overflow
    },
    {
      title: "Budget",
      dataIndex: "taskBudget",
      key: "taskBudget",
      align: "center",
      render: (budget) => (
        <span className="text-blue-600 font-medium">${budget}</span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status) => {
        let style = {};
        if (status === "active") {
          style = { backgroundColor: "#E6F7FF", color: "#1890FF" };
        } else if (status === "assigned") {
          style = { backgroundColor: "#FFFBE6", color: "#FAAD14" };
        } else if (status === "pending") {
          style = { backgroundColor: "#FFF1F0", color: "#F5222D" };
        }

        return (
          <Tag
            style={{
              ...style,
              fontWeight: "600",
              fontSize: "15px",
              borderRadius: "12px",
              padding: "6px 18px",
            }}
          >
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      align: "center",
      render: (date) => (
        <span className="text-gray-600">
          {new Date(date).toLocaleDateString()}
        </span>
      ),
    },
  ];

  return (
    <Card className="shadow-lg rounded-xl border border-gray-200">
      <Table
        dataSource={data}
        columns={columns}
        rowKey="_id"
        pagination={{ pageSize: 5 }}
        bordered={false}
        rowClassName={(_, index) =>
          index % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "hover:bg-gray-100"
        }
      />
    </Card>
  );
};

export default PosterInformationTable;
