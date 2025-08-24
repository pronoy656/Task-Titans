import React from 'react';
import { Search, User, AlertCircle, MessageSquare, CheckCircle } from "lucide-react"


const notifications = [
  {
    id: 1,
    icon: User,
    iconColor: "text-gray-600",
    bgColor: "bg-blue-50",
    message: 'User "john@example.com" has successfully upgraded from Free to Pro.',
    time: "2 min ago",
  },
  {
    id: 2,
    icon: AlertCircle,
    iconColor: "text-red-500",
    bgColor: "bg-blue-50",
    message: 'User "sadia.user42@gmail.com" attempted to upgrade to Pro but encountered an issue',
    time: "10 mins ago",
  },
  {
    id: 3,
    icon: MessageSquare,
    iconColor: "text-yellow-500",
    bgColor: "bg-blue-50",
    message: 'User "rahim.khan12" submitted a new suggestion: "Please add a savings goal tracker."',
    time: "30 min ago",
  },
  {
    id: 4,
    icon: CheckCircle,
    iconColor: "text-green-500",
    bgColor: "bg-blue-50",
    message:
      'User "tasnia_98" left a 5-star review on the Play Store: "Very useful app. Helped me track my expenses easily!"',
    time: "2 hours ago",
  },
  {
    id: 5,
    icon: MessageSquare,
    iconColor: "text-yellow-500",
    bgColor: "bg-white",
    message: 'User "robin_dev23" has submitted a request to review the app.',
    time: "Yesterday",
  },
]
const Notification = () => {
    return (
        <div className='admin-page'>
             <div className="p-6 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold text-gray-900">Notifications</h1>
        <button className="text-blue-600 hover:text-blue-700 font-medium">Mark all as read</button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          placeholder="Search here......"
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {notifications.map((notification) => {
          const IconComponent = notification.icon
          return (
            <div
              key={notification.id}
              className={`flex items-start gap-5 p-4 rounded-lg border border-gray-100 ${notification.bgColor}`}
            >
              <div className="flex-shrink-0 mt-0.5">
                <IconComponent className={`h-7 w-7 ${notification.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 leading-relaxed">{notification.message}</p>
                <p className="text-sm font-medium text-gray-500 mt-1">{notification.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
        </div>
    );
};

export default Notification;