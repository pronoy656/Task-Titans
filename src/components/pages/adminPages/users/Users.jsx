import React, { useState } from 'react';
import { Search, UserCheck, FileText } from "lucide-react"
import { Card, CardContent } from '../../../ui/CardContent';
import { Menu, Pagination, Table } from 'antd';


const Users = () => {

     

    // For card data
     const metrics = [
    {
      title: "Total Users",
      value: "124,563",
      growth: "+12.5%",
      icon: UserCheck,
    },
    {
      title: "Total Tasker",
      value: "124,563",
      growth: "+12.5%",
      icon: UserCheck,
    },
    {
      title: "Total Poster",
      value: "124,563",
      growth: "+12.5%",
      icon: FileText,
    },
  ]

    // Table data for Poster
  const posterUserdata = [
  {
    key: "1",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    UserID: "25647",
  },
  {
    key: "2",
    name: "Michael Smith",
    email: "michael.smith@example.com",
    UserID: "89213",
  },
  {
    key: "3",
    name: "Sophia Williams",
    email: "sophia.williams@example.com",
    UserID: "67325",
  },
  {
    key: "4",
    name: "James Brown",
    email: "james.brown@example.com",
    UserID: "74129",
  },
  {
    key: "5",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    UserID: "58316",
  },
  {
    key: "6",
    name: "Daniel Miller",
    email: "daniel.miller@example.com",
    UserID: "93472",
  },
  {
    key: "7",
    name: "Olivia Wilson",
    email: "olivia.wilson@example.com",
    UserID: "41589",
  },
  {
    key: "8",
    name: "Ethan Martinez",
    email: "ethan.martinez@example.com",
    UserID: "72854",
  },
  {
    key: "9",
    name: "Ethan Martinez",
    email: "ethan.martinez@example.com",
    UserID: "72854",
  },
  {
    key: "10",
    name: "Ethan Martinez",
    email: "ethan.martinez@example.com",
    UserID: "72854",
  },
  {
    key: "11",
    name: "Ethan Martinez",
    email: "ethan.martinez@example.com",
    UserID: "72854",
  },
]

      // column label
  const [actionDropdown, setActionDropdown] = useState(null);

  const handleActionClick = (key) => {
    setActionDropdown(actionDropdown === key ? null : key);
  };

//   const handleCloseDropdown = () => {
//     setActionDropdown(null);
//   };

  // Optionally, add handlers for view profile and block
  const handleViewProfile = (record) => {
    // Implement view profile logic here

    alert(`View profile for ${record.name}`);
    setActionDropdown(null);
    console.log(record.UserID)
  
  };
  const handleBlock = (record) => {
    // Implement block logic here
    alert(`Block user ${record.name}`);
    setActionDropdown(null);
    console.log(record.UserID)
  };
  const columns = [
    {
      title: (
        <span style={{ fontSize: "18px", fontWeight: 500 }}>User Name</span>
      ),
      dataIndex: "name",
      key: "name",
      //text size bold for table data
      render: (text) => (
        <span style={{ fontSize: "16px", fontWeight: "500" }}>{text}</span>
      ),
    },
    {
      title: <span style={{ fontSize: "18px", fontWeight: 500 }}>Email</span>,
      dataIndex: "email",
      key: "email",
      render: (text) => (
        <span style={{ fontSize: "16px", fontWeight: "500",  }}>{text}</span>
      ),
    },
    {
      title: (
        <span style={{ fontSize: "18px", fontWeight: 500 }}>User ID</span>
      ),
      dataIndex: "UserID",
      key: "UserID",
      render: (text) => (
        <span style={{ fontSize: "16px", fontWeight: "500" }}>{text}</span>
      ),
    },
    {
      title: <span style={{ fontSize: "18px", fontWeight: 500 }}>Action</span>,
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <div className="relative flex justify-center items-center" style={{ minWidth: 40 }}>
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200"
            onClick={(e) => {
              e.stopPropagation();
              handleActionClick(record.key);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="4" r="1.5" fill="#333" />
              <circle cx="10" cy="10" r="1.5" fill="#333" />
              <circle cx="10" cy="16" r="1.5" fill="#333" />
            </svg>
          </button>
          {actionDropdown === record.key && (
            <div className="absolute right-0 top-full mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-20">
              <div
                className="px-4 py-2 cursor-pointer hover:bg-blue-100 text-sm text-gray-700"
                onClick={() => handleViewProfile(record)}
              >
                View Profile
              </div>
              <div
                className="px-4 py-2 cursor-pointer hover:bg-red-600 text-sm bg-red-500 text-white"
                onClick={() => handleBlock(record)}
              >
                Block
              </div>
            </div>
          )}
        </div>
      ),
    },
  ];

  // Table data for Tasker
  const taskerUserdata = [
    {
      key: "101",
      name: "Rahul Roy",
      email: "rahul.roy@example.com",
      UserID: "T1001",
    },
    {
      key: "102",
      name: "Priya Singh",
      email: "priya.singh@example.com",
      UserID: "T1002",
    },
    {
      key: "103",
      name: "Amit Kumar",
      email: "amit.kumar@example.com",
      UserID: "T1003",
    },
    {
      key: "104",
      name: "Sneha Das",
      email: "sneha.das@example.com",
      UserID: "T1004",
    },
    {
      key: "105",
      name: "Vikram Patel",
      email: "vikram.patel@example.com",
      UserID: "T1005",
    },
    {
      key: "106",
      name: "Anjali Mehra",
      email: "anjali.mehra@example.com",
      UserID: "T1006",
    },
  ];

  // Tab state for see different table with conditionally
  const [activeTab, setActiveTab] = useState('Poster');
  const userdata = activeTab === 'Poster' ? posterUserdata : taskerUserdata;
  
    // Close dropdown when clicking outside
    React.useEffect(() => {
      const handleClickOutside = () => {
        setActionDropdown(null);
      };
      if (actionDropdown !== null) {
        document.addEventListener('click', handleClickOutside);
      }
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [actionDropdown]);

    return (
    <div className='admin-page'>
     <div className=" p-2">
      <div className=" space-y-6">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-white shadow-sm border-0">
              <CardContent className="p-4">
                <div className="">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <metric.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="text-green-600 font-medium justify-end">{metric.growth}</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search Bar */}
       
        <div className="relative mb-6">
         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
        type="text"
        placeholder="Search here......"
        className="w-2xl pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        </div>
      </div>
      {/* Tabs for Poster/Tas ker */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-6 py-2 rounded-t-lg font-semibold border-b-2 transition-colors duration-200 ${activeTab === 'Poster' ? 'border-blue-500 text-blue-600 bg-blue-50' : 'border-transparent text-gray-500 bg-white'}`}
          onClick={() => setActiveTab('Poster')}
        >
          Poster
        </button>
        <button
          className={`px-6 py-2 rounded-t-lg font-semibold border-b-2 transition-colors duration-200 ${activeTab === 'Tasker' ? 'border-blue-500 text-blue-600 bg-blue-50' : 'border-transparent text-gray-500 bg-white'}`}
          onClick={() => setActiveTab('Tasker')}
        >
          Tasker
        </button>
      </div>
      <div>
        <div className="scrollbar-hide">
          <Table
            className="border border-[#F0F0F0] overflow-y-auto"
            dataSource={userdata}
            columns={columns}
            pagination={{ pageSize: 8, position: ["bottomRight"] }}
            scroll={{ x: "max-content" }}
          />
        </div>
      </div>
    </div>
    </div>
    );
};

export default Users;