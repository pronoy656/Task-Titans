import React from 'react';

import { Search, FileText, CheckCircle, Clock, XCircle } from "lucide-react"
import { Card } from '../../../ui/Card';
import { CardContent } from '../../../ui/CardContent';

function MetricCard({ icon, title, value, change, changeType }) {
  return (
    <Card className="border border-gray-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          
            <div className="p-2 rounded-full bg-blue-50">{icon}</div>
             <div
            className={`text-sm font-medium ${
              changeType === "positive" ? "text-green-600" : "text-red-600"
            }`}
          >
            {change}
          </div>
          </div>
            <div className='mt-3'>
              <p className="text-sm text-gray-600 font-bold">{title}</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
            </div>
          
          
        
      </CardContent>
    </Card>
  )
}

const PostManagement = () => {

      const metrics = [
    {
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      title: "Total Posts",
      value: "8,642",
      change: "+12.5%",
      changeType: "positive",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-teal-600" />,
      title: "Total Completed Posts",
      value: "8,642",
      change: "+8.3%",
      changeType: "positive",
    },
    {
      icon: <Clock className="w-5 h-5 text-green-600" />,
      title: "Total Pending Posts",
      value: "8,642",
      change: "+12.5%",
      changeType: "positive",
    },
    {
      icon: <XCircle className="w-5 h-5 text-red-600" />,
      title: "Total Cancel Posts",
      value: "8,642",
      change: "-2.1%",
      changeType: "negative",
    },
  ]

    return (
        <div className='admin-page'>
            
          <div className="space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            icon={metric.icon}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            changeType={metric.changeType}
          />
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
        type="text"
        placeholder="Search here......"
        className="w-2xl pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
        </div>
    );
};

export default PostManagement;