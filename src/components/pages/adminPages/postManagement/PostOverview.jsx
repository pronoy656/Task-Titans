import { Clock, Locate, LocateFixedIcon, LocationEdit, MapPin } from 'lucide-react';
import React from 'react';

const PostOverview = () => {
    return (
        <div className='admin-page'>
             <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-6 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-semibold text-gray-900">House Cleaning</h1>
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Active</span>
      </div>

      {/* Location and Time */}
      <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
        <div className="flex items-center gap-1">
        
          <MapPin className='w-4 h-4'/>
          <span>Hiroshima</span>
        </div>
        <div className="flex items-center gap-1">
         
          <Clock className='w-4 h-4'/>
          <span>Posted 2 hours ago</span>
        </div>
      </div>

      {/* Task Overview */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Task Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          Need thorough house cleaning for a 3-bedroom home. Deep cleaning required including kitchen and bathrooms.
        </p>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-gray-700">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
            <span>Property type: 3-bedroom home</span>
          </li>
          <li className="flex items-start gap-2 text-gray-700">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
            <span>Service areas: Kitchen, Bathrooms, Living areas</span>
          </li>
          <li className="flex items-start gap-2 text-gray-700">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
            <span>Cleaning type: Deep cleaning</span>
          </li>
          <li className="flex items-start gap-2 text-gray-700">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
            <span>Equipment: Must bring own cleaning supplies</span>
          </li>
        </ul>
      </div>

      {/* Bottom Info Grid */}
      <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-200">
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-1">Category</h3>
          <p className="text-sm text-gray-600">House Cleaning</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-1">Experience Level</h3>
          <p className="text-sm text-gray-600">Any</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-1">Task Type</h3>
          <p className="text-sm text-gray-600">Hourly</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-1">Task Budget</h3>
          <p className="text-sm text-gray-600">$80 - $120</p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default PostOverview;