import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";

const data = [
  {
    name: "Cleaning ",
    revenue: 65,
    value: 2800,
  },
  {
    name: "Lawn Care & Gardening",
    revenue: 78,
    value: 3100,
  },
  {
    name: "Furniture Moving",
    revenue: 45,
    value: 1900,
  },
  {
    name: "Mounting & Assembly",
    revenue: 85,
    value: 3348,
  },
  {
    name: "Odd Tasks & Repairs",
    revenue: 72,
    value: 2950,
  },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-green-500 text-white px-3 py-2 rounded-md shadow-lg text-sm">
        <div>Last Revenue: ${data.value.toLocaleString()}</div>
        <div>{data.revenue}%</div>
      </div>
    );
  }
  return null;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const RevenueChart = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [selectedMonth, setSelectedMonth] = React.useState("Monthly");

  const handleDropdown = () => setDropdownOpen((open) => !open);
  const handleSelectMonth = (month) => {
    setSelectedMonth(month);
    setDropdownOpen(false);
  };

  return (
    <div className="admin-page">
      <div className="w-full max-w-8xl mx-auto p-2 pt-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Revenue</h1>
          <div className="relative">
            <button
              className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1.5 rounded-md text-sm focus:outline-none"
              onClick={handleDropdown}
            >
              {selectedMonth}
              <ChevronDown className="w-4 h-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-20">
                {months.map((month) => (
                  <div
                    key={month}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-100 text-gray-700"
                    onClick={() => handleSelectMonth(month)}
                  >
                    {month}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Chart Container */}
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 30, // increased left margin
                bottom: 60,
              }}
            >
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                interval={0}
                height={60}
                tick={({ x, y, payload, index }) => {
                  // Add extra dx for first label
                  const dx = index === 0 ? 20 : 0;
                  return (
                    <text
                      x={x + dx}
                      y={y + 10}
                      textAnchor="end"
                      fontSize={12}
                      fontWeight="bold"
                      fill="#64748b"
                      transform={`rotate(-30,${x + dx},${y + 10})`}
                    >
                      {payload.value}
                    </text>
                  );
                }}
              />
              <YAxis
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#64748b", fontWeight: "bold" }}
                tickFormatter={(value) => `${value}%`}
                domain={[0, 100]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#3b82f6"
                strokeWidth={2}
                fill="url(#colorRevenue)"
                dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: "#3b82f6" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
