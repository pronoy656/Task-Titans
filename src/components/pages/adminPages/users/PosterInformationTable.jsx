import { Table, Tag } from "antd";
// import { Tag } from "lucide-react";
import React from "react";

const PosterInformationTable = () => {
  //For data Show in Table
  const posterUserData = [
    {
      key: "1",
      TaskTitle: "Cleaning sofa",
      PostCategory: "Housekeeping",
      PaymentStatus: "Paid",
      TaskStartDate: "07/07/2025",
      TaskStatus: "Completed",
    },
    {
      key: "2",
      TaskTitle: "Cleaning sofa",
      PostCategory: "Gardening",
      PaymentStatus: "Pending",
      TaskStartDate: "07/07/2025",
      TaskStatus: "In complete",
    },
    {
      key: "3",
      TaskTitle: "Chair move",
      PostCategory: "Furniture Moving",
      PaymentStatus: "Paid",
      TaskStartDate: "07/07/2025",
      TaskStatus: "Completed",
    },
    {
      key: "4",
      TaskTitle: "Chair move",
      PostCategory: "Assembly",
      PaymentStatus: "Pending",
      TaskStartDate: "07/07/2025",
      TaskStatus: "Completed",
    },
    {
      key: "5",
      TaskTitle: "Chair move",
      PostCategory: "Repairs",
      PaymentStatus: "Pending",
      TaskStartDate: "07/07/2025",
      TaskStatus: "Completed",
    },
    {
      key: "6",
      TaskTitle: "Chair move",
      PostCategory: "Cleaning",
      PaymentStatus: "Paid",
      TaskStartDate: "07/07/2025",
      TaskStatus: "Completed",
    },
    {
      key: "7",
      TaskTitle: "Chair move",
      PostCategory: "Cleaning",
      PaymentStatus: "Paid",
      TaskStartDate: "07/07/2025",
      TaskStatus: "Completed",
    },
    {
      key: "8",
      TaskTitle: "Car Wash",
      PostCategory: "Automotive",
      PaymentStatus: "Pending",
      TaskStartDate: "08/07/2025",
      TaskStatus: "Completed",
    },
    {
      key: "9",
      TaskTitle: "Math Tutoring",
      PostCategory: "Education",
      PaymentStatus: "Paid",
      TaskStartDate: "08/07/2025",
      TaskStatus: "Completed",
    },
    {
      key: "10",
      TaskTitle: "Dog Walking",
      PostCategory: "Pet Care",
      PaymentStatus: "Paid",
      TaskStartDate: "08/07/2025",
      TaskStatus: "Completed",
    },
    {
      key: "11",
      TaskTitle: "Lawn Mowing",
      PostCategory: "Gardening",
      PaymentStatus: "Pending",
      TaskStartDate: "09/07/2025",
      TaskStatus: "Completed",
    },
    {
      key: "12",
      TaskTitle: "Painting Room",
      PostCategory: "Renovation",
      PaymentStatus: "Paid",
      TaskStartDate: "09/07/2025",
      TaskStatus: "Completed",
    },
    {
      key: "13",
      TaskTitle: "Photography",
      PostCategory: "Creative Arts",
      PaymentStatus: "Pending",
      TaskStartDate: "09/07/2025",
      TaskStatus: "Completed",
    },
    {
      key: "14",
      TaskTitle: "Cake Baking",
      PostCategory: "Food & Catering",
      PaymentStatus: "Paid",
      TaskStartDate: "10/07/2025",
      TaskStatus: "Completed",
    },
    {
      key: "15",
      TaskTitle: "Social Media Ads",
      PostCategory: "Digital Marketing",
      PaymentStatus: "Pending",
      TaskStartDate: "10/07/2025",
      TaskStatus: "Completed",
    },
    {
      key: "16",
      TaskTitle: "Yoga Class",
      PostCategory: "Fitness",
      PaymentStatus: "Paid",
      TaskStartDate: "10/07/2025",
      TaskStatus: "Completed",
    },
    {
      key: "17",
      TaskTitle: "Electrical Repair",
      PostCategory: "Handyman",
      PaymentStatus: "Pending",
      TaskStartDate: "11/07/2025",
      TaskStatus: "Completed",
    },
    {
      key: "18",
      TaskTitle: "Website Design",
      PostCategory: "Freelancing",
      PaymentStatus: "Paid",
      TaskStartDate: "11/07/2025",
      TaskStatus: "Completed",
    },
    {
      key: "19",
      TaskTitle: "Child Care",
      PostCategory: "Babysitting",
      PaymentStatus: "Pending",
      TaskStartDate: "11/07/2025",
      TaskStatus: "Completed",
    },
    {
      key: "20",
      TaskTitle: "Event Planning",
      PostCategory: "Event Management",
      PaymentStatus: "Paid",
      TaskStartDate: "12/07/2025",
      TaskStatus: "Completed",
    },
  ];
  // For table column
  const columns = [
    {
      title: (
        <span style={{ fontSize: "18px", fontWeight: 600 }}>Task Title</span>
      ),
      dataIndex: "TaskTitle",
      key: "TaskTitle",
      render: (text) => <span style={{ fontSize: "16px" }}>{text}</span>,
      align: "center",
      width: undefined,
    },
    {
      title: (
        <span style={{ fontSize: "18px", fontWeight: 600 }}>Post Category</span>
      ),
      dataIndex: "PostCategory",
      key: "PostCategory",
      render: (text) => <span style={{ fontSize: "16px" }}>{text}</span>,
      align: "center",
      width: undefined,
    },
    {
      title: (
        <span style={{ fontSize: "18px", fontWeight: 600 }}>
          Payment Status
        </span>
      ),
      dataIndex: "PaymentStatus",
      key: "PaymentStatus",
      align: "center",
      width: undefined,
      render: (PaymentStatus) => {
        let style = {};
        if (PaymentStatus === "Paid") {
          style = {
            backgroundColor: "#E6F7FF",
            color: "#1890FF",
            border: "1px solid #91D5FF",
          };
        } else if (PaymentStatus === "Pending") {
          style = {
            backgroundColor: "#FFFBE6",
            color: "#FAAD14",
            border: "1px solid #FFE58F",
          };
        } else {
          style = {
            backgroundColor: "#F5F5F5",
            color: "#000000",
            border: "1px solid #D9D9D9",
          };
        }
        return (
          <Tag
            style={{
              ...style,
              fontWeight: "semibold",
              borderRadius: "10px",
              padding: "2px 10px",
              fontSize: "16px",
            }}
          >
            {PaymentStatus}
          </Tag>
        );
      },
    },
    {
      title: (
        <span style={{ fontSize: "18px", fontWeight: 600 }}>
          Task Start Date
        </span>
      ),
      dataIndex: "TaskStartDate",
      key: "TaskStartDate",
      render: (text) => <span style={{ fontSize: "16px" }}>{text}</span>,
      align: "center",
      width: undefined,
    },
    {
      title: (
        <span style={{ fontSize: "18px", fontWeight: 600 }}>Task Status</span>
      ),
      dataIndex: "TaskStatus",
      key: "TaskStatus",
      align: "center",
      width: undefined,
      render: (TaskStatus) => {
        let style = {};
        if (TaskStatus === "Completed") {
          style = {
            backgroundColor: "#E6FFE6",
            color: "#00B500",
            border: "1px solid #91D5FF",
          };
        } else if (TaskStatus === "In complete") {
          style = {
            backgroundColor: "#FFFBE6",
            color: "#FAAD14",
            border: "1px solid #FFE58F",
          };
        } else {
          style = {
            backgroundColor: "#F5F5F5",
            color: "#000000",
            border: "1px solid #D9D9D9",
          };
        }
        return (
          <Tag
            style={{
              ...style,
              fontWeight: "semibold",
              borderRadius: "10px",
              padding: "2px 10px",
              fontSize: "16px",
            }}
          >
            {TaskStatus}
          </Tag>
        );
      },
    },
  ];

  return (
    <div>
      <Table
        className="border border-gray-200"
        dataSource={posterUserData}
        columns={columns}
      />
    </div>
  );
};

export default PosterInformationTable;
