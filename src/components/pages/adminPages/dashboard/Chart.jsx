import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Bar,
  Line,
  ComposedChart,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

import { ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/CardContent";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../ui/Select";


// Sample data for Revenue chart
const revenueData = [
  { month: "JAN", value: 2800 },
  { month: "FEB", value: 3200 },
  { month: "MAR", value: 2900 },
  { month: "APR", value: 3800 },
  { month: "MAY", value: 3400 },
  { month: "JUN", value: 3100 },
  { month: "JUL", value: 2700 },
  { month: "AUG", value: 3348 },
  { month: "SEP", value: 4200 },
  { month: "OCT", value: 3900 },
  { month: "NOV", value: 3600 },
  { month: "DEC", value: 4100 },
];

// Sample data for Task Completion Rate
const taskData = [
  { month: "JAN", completion: 85, line: 82 },
  { month: "FEB", completion: 75, line: 78 },
  { month: "MAR", completion: 95, line: 88 },
  { month: "APR", completion: 65, line: 70 },
  { month: "MAY", completion: 80, line: 75 },
  { month: "JUN", completion: 70, line: 72 },
];

// Sample data for User Distributions
const userDistributionData = [
  { name: "Poster", value: 32, color: "#3B82F6" },
  { name: "Tasker", value: 68, color: "#E5E7EB" },
];

// Custom tooltip for revenue chart
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium">
        Last Revenue: ${payload[0].value.toLocaleString()}
      </div>
    );
  }
  return null;
};

// Custom tooltip for Task Completion Rate
const TaskCompletionTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium">
        <div className="font-bold mb-1">{label}</div>
        <div>Completion: {payload[0].value}%</div>
        <div>Line: {payload[1]?.value}%</div>
      </div>
    );
  }
  return null;
};

import { useState } from "react";

const Chart = () => {
  // Dropdown state for Task Completion Rate
  const [taskDropdown, setTaskDropdown] = useState(false);
  const [taskSelected, setTaskSelected] = useState("Monthly");
  const taskOptions = ["JAN - JUN", "JULY - DEC"];

  // Dropdown state for User Distributions
  const [userDropdown, setUserDropdown] = useState(false);
  const [userSelected, setUserSelected] = useState("Monthly");
  const userOptions = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // ...existing code...
  return (
    <div className="space-y-6">
      {/* Revenue Chart */}
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-3xl font-bold">Revenue</CardTitle>
          <Select defaultValue="monthly">
            <SelectTrigger className="w-24 h-8 bg-blue-500 text-white border-0 text-sm">
              <SelectValue />
              <ChevronDown className="h-3 w-3" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={revenueData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                  tickFormatter={(value) => `${value / 1000}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Task Completion Rate */}
        <Card>
          <CardHeader className="pb-4">
            <div className="flex flex-row items-center justify-between w-full">
              <CardTitle className="text-xl font-bold">
                Task Completion Rate
              </CardTitle>
              <div className="relative flex items-center">
                <button
                  className="w-32 h-8 bg-blue-500 text-white border-0 text-sm rounded flex items-center justify-between px-3"
                  onClick={() => setTaskDropdown((prev) => !prev)}
                  type="button"
                >
                  {taskSelected}
                  <ChevronDown className="h-3 w-3 ml-2" />
                </button>
                {taskDropdown && (
                  <div className="absolute right-0 top-full mt-1 w-32 bg-white border border-gray-200 rounded shadow-lg z-20">
                    {taskOptions.map((option) => (
                      <div
                        key={option}
                        className={`px-4 py-2 cursor-pointer hover:bg-blue-100 text-sm ${taskSelected === option ? "font-semibold text-blue-600" : "text-gray-700"}`}
                        onClick={() => {
                          setTaskSelected(option);
                          setTaskDropdown(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={taskData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                    tickFormatter={(value) => `${value}%`}
                    domain={[0, 100]}
                  />
                  <Tooltip content={<TaskCompletionTooltip />} />
                  <Bar
                    dataKey="completion"
                    fill="#BFDBFE"
                    radius={[4, 4, 0, 0]}
                    isAnimationActive={true}
                  />
                  <Line
                    type="monotone"
                    dataKey="line"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                    isAnimationActive={true}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* User Distributions */}
        <Card>
          <CardHeader className="pb-4">
            <div className="flex flex-row items-center justify-between w-full">
              <CardTitle className="text-xl font-bold">
                User Distributions
              </CardTitle>
              <div className="relative flex items-center">
                <button
                  className="w-32 h-8 bg-blue-500 text-white border-0 text-sm rounded flex items-center justify-between px-3"
                  onClick={() => setUserDropdown((prev) => !prev)}
                  type="button"
                >
                  {userSelected}
                  <ChevronDown className="h-3 w-3 ml-2" />
                </button>
                {userDropdown && (
                  <div className="absolute right-0 top-full mt-1 w-32 bg-white border border-gray-200 rounded shadow-lg z-20 max-h-64 overflow-y-auto">
                    {userOptions.map((option) => (
                      <div
                        key={option}
                        className={`px-4 py-2 cursor-pointer hover:bg-blue-100 text-sm ${userSelected === option ? "font-semibold text-blue-600" : "text-gray-700"}`}
                        onClick={() => {
                          setUserSelected(option);
                          setUserDropdown(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center h-96">
              <div className="w-80 h-80 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={userDistributionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={100}
                      outerRadius={140}
                      paddingAngle={2}
                      dataKey="value"
                      stroke="#fff"
                      strokeWidth={1}
                    >
                      {userDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [`${value}%`, "Percentage"]}
                      labelStyle={{ color: "#374151" }}
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #E5E7EB",
                        borderRadius: "6px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-row justify-center items-center space-x-8 mt-8">
                {userDistributionData.map((entry, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-base"
                  >
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-muted-foreground font-semibold">
                      {entry.name}: {entry.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chart;
