import { Table } from 'antd';
import React, { useState } from 'react';

const PostManagementTable = () => {

const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
const [selectedFilter, setSelectedFilter] = useState(null);

// FIlter option dropdown
  const filterOptions = [
    "Cleaning & Housekeeping",
    "Lawn Care & Gardening",
    "Furniture Moving",
    "Mounting & Assembly",
    "Odd Tasks & Repairs",
  ];

// Table data source
  const dataSource = [
  {
    key: '1',
    name: 'Mike Johnson',
    PostTitle: 'Odd Tasks & Repairs',
    PostCategory: 'Housekeeping',
    PosterEmail: 'mike.johnson@example.com',
  },
  {
    key: '2',
    name: 'Sophia Lee',
    PostTitle: 'Guitar Lessons',
    PostCategory: 'Music',
    PosterEmail: 'sophia.lee@example.com',
  },
  {
    key: '3',
    name: 'Daniel Smith',
    PostTitle: 'Dog Walking Service',
    PostCategory: 'Pet Care',
    PosterEmail: 'daniel.smith@example.com',
  },
  {
    key: '4',
    name: 'Olivia Brown',
    PostTitle: 'Math Tutoring',
    PostCategory: 'Education',
    PosterEmail: 'olivia.brown@example.com',
  },
  {
    key: '5',
    name: 'James Wilson',
    PostTitle: 'Lawn Mowing Help',
    PostCategory: 'Gardening',
    PosterEmail: 'james.wilson@example.com',
  },
  {
    key: '6',
    name: 'Emily Davis',
    PostTitle: 'Cake Baking',
    PostCategory: 'Food & Catering',
    PosterEmail: 'emily.davis@example.com',
  },
  {
    key: '7',
    name: 'Matthew Taylor',
    PostTitle: 'Mobile App Debugging',
    PostCategory: 'Tech Support',
    PosterEmail: 'matthew.taylor@example.com',
  },
  {
    key: '8',
    name: 'Isabella White',
    PostTitle: 'Photography Session',
    PostCategory: 'Creative Arts',
    PosterEmail: 'isabella.white@example.com',
  },
  {
    key: '9',
    name: 'Ethan Miller',
    PostTitle: 'Furniture Assembly',
    PostCategory: 'Household',
    PosterEmail: 'ethan.miller@example.com',
  },
  {
    key: '10',
    name: 'Ava Martin',
    PostTitle: 'Yoga Instructor',
    PostCategory: 'Fitness',
    PosterEmail: 'ava.martin@example.com',
  },
  {
    key: '11',
    name: 'William Anderson',
    PostTitle: 'Car Wash & Detailing',
    PostCategory: 'Automotive',
    PosterEmail: 'william.anderson@example.com',
  },
  {
    key: '12',
    name: 'Mia Thompson',
    PostTitle: 'Child Care Support',
    PostCategory: 'Babysitting',
    PosterEmail: 'mia.thompson@example.com',
  },
  {
    key: '13',
    name: 'Benjamin Moore',
    PostTitle: 'Website Design',
    PostCategory: 'Freelancing',
    PosterEmail: 'benjamin.moore@example.com',
  },
  {
    key: '14',
    name: 'Charlotte Garcia',
    PostTitle: 'Makeup Artist Service',
    PostCategory: 'Beauty',
    PosterEmail: 'charlotte.garcia@example.com',
  },
  {
    key: '15',
    name: 'Lucas Martinez',
    PostTitle: 'Electrical Repairs',
    PostCategory: 'Handyman',
    PosterEmail: 'lucas.martinez@example.com',
  },
  {
    key: '16',
    name: 'Amelia Clark',
    PostTitle: 'Blog Writing',
    PostCategory: 'Content',
    PosterEmail: 'amelia.clark@example.com',
  },
  {
    key: '17',
    name: 'Henry Lewis',
    PostTitle: 'Piano Lessons',
    PostCategory: 'Music',
    PosterEmail: 'henry.lewis@example.com',
  },
  {
    key: '18',
    name: 'Harper Walker',
    PostTitle: 'Social Media Marketing',
    PostCategory: 'Digital Marketing',
    PosterEmail: 'harper.walker@example.com',
  },
  {
    key: '19',
    name: 'Alexander Hall',
    PostTitle: 'Home Painting',
    PostCategory: 'Renovation',
    PosterEmail: 'alexander.hall@example.com',
  },
  {
    key: '20',
    name: 'Ella Young',
    PostTitle: 'Event Planning',
    PostCategory: 'Event Management',
    PosterEmail: 'ella.young@example.com',
  },
];

//Table Columns
const columns = [
      {
        title: <span style={{ fontSize: '18px', fontWeight: 600,  }}>Poster Name</span>,
        dataIndex: 'name',
        key: 'name',
        render: (text) => <span style={{ fontSize: '16px', fontWeight: 400 }}>{text}</span>,
      },
      {
        title: <span style={{ fontSize: '18px', fontWeight: 600 }}>Post Title</span>,
        dataIndex: 'PostTitle',
        key: 'title',
        render: (text) => <span style={{ fontSize: '16px', fontWeight: 400 }}>{text}</span>,
      },
      {
        title: <span style={{ fontSize: '18px', fontWeight: 600 }}>Post Category</span>,
        dataIndex: 'PostCategory',
        key: 'Post category',
        render: (text) => <span style={{ fontSize: '16px', fontWeight: 400 }}>{text}</span>,
      },
      {
        title: <span style={{ fontSize: '18px', fontWeight: 600 }}>Poster Email</span>,
        dataIndex: 'PosterEmail',
        key: ' Poster Email',
        render: (text) => <span style={{ fontSize: '16px', fontWeight: 400 }}>{text}</span>,
      },
      {
        title: <span style={{ fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Action</span>,
        key: 'action',
        align: 'center',
        render: (text, record) => (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 48, minWidth: 40, position: 'relative' }}>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
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
                  onClick={() => handleViewPost(record)}
                >
                  View Post
                </div>
                <div
                  className="px-4 py-2 cursor-pointer hover:bg-red-100 text-sm text-red-600"
                  onClick={() => handleDelete(record)}
                >
                  Delete
                </div>
              </div>
            )}
          </div>
        ),
      },
    ];


  const [actionDropdown, setActionDropdown] = useState(null);

    const handleActionClick = (key) => {
      setActionDropdown(actionDropdown === key ? null : key);
    };

    const handleViewPost = (record) => {
      alert(`View post: ${record.PostTitle}`);
      setActionDropdown(null);
    };
    const handleDelete = (record) => {
      alert(`Delete post: ${record.PostTitle}`);
      setActionDropdown(null);
    };

  // Filtered data
  const filteredData = selectedFilter
    ? dataSource.filter(
        (item) =>
          item.PostTitle === selectedFilter ||
          item.PostCategory === selectedFilter
      )
    : dataSource;

  

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
      <div>
        {/* Filter Button outside and right aligned */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 16, position: 'relative' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button
              style={{
                padding: '8px 16px',
                fontSize: '16px',
                fontWeight: 500,
                borderRadius: 6,
                border: '1px solid #d9d9d9',
                background: '#fff',
                cursor: 'pointer',
                boxShadow: filterDropdownOpen ? '0 2px 8px rgba(0,0,0,0.12)' : 'none',
              }}
              onClick={() => setFilterDropdownOpen((open) => !open)}
            >
              Filter by
              <span style={{ marginLeft: 8, fontSize: 12 }}>▼</span>
            </button>
            {filterDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '110%',
                  right: 0,
                  minWidth: 220,
                  background: '#fff',
                  border: '1px solid #e5e5e5',
                  borderRadius: 8,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
                  zIndex: 100,
                }}
              >
                {filterOptions.map((option, idx) => (
                  <div
                    key={option}
                    style={{
                      padding: '10px 18px',
                      cursor: 'pointer',
                      background: selectedFilter === option ? '#f0f5ff' : '#fff',
                      fontWeight: selectedFilter === option ? 600 : 400,
                      borderBottom: idx !== filterOptions.length - 1 ? '2px solid #eee' : 'none',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#f5faff'}
                    onMouseLeave={e => e.currentTarget.style.background = selectedFilter === option ? '#f0f5ff' : '#fff'}
                    onClick={() => {
                      setSelectedFilter(option);
                      setFilterDropdownOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
                <div
                  style={{
                    padding: '10px 18px',
                    cursor: 'pointer',
                    color: '#888',
                    borderTop: '1px solid #eee',
                  }}
                  onClick={() => {
                    setSelectedFilter(null);
                    setFilterDropdownOpen(false);
                  }}
                >
                  Clear Filter
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Table */}
        <div>
        <Table
          dataSource={filteredData}
          columns={columns}
          pagination={{ pageSize: 8, position: ["bottomRight"] }}
        />
        </div>
      </div>
    );
};

export default PostManagementTable;