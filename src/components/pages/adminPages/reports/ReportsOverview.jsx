import React from 'react';
import { Calendar, FileText, MessageSquare, Tag } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/Card';
import { Button } from '../../../ui/Button';
import { Avatar, AvatarFallback, AvatarImage } from '../../../ui/Avatar';

const ReportsOverview = () => {
    return (
        <div className='admin-page'>
            <div className="min-h-screen p-0">
      <Card className="shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl !font-bold">Report Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* User Profile Section */}
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/user-profile-avatar.png" alt="Jhon doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-bold text-lg">Jhon doe</h3>
            </div>
          </div>

          {/* Stats and Admin Actions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - User Stats and Report Details */}            
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-medium text-muted-foreground">
                <Calendar className="h-5 w-5" />
                <span>Joined June 15, 2023</span>
              </div>
              <div className="flex items-center gap-2 font-medium text-muted-foreground">
                <FileText className="h-5 w-5" />
                <span>156 posts</span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium mb-1">
                    <MessageSquare className="h-4 w-4" />
                    <span className='text-lg font-semibold'>Type</span>
                  </div>
                  <p className="font-normal text-muted-foreground">User Behavior Report</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium mb-1">
                    <Tag className="h-4 w-4" />
                    <span className='text-lg font-semibold'>Category</span>
                  </div>
                  <p className="font-normal text-muted-foreground">Harassment</p>
                </div>
              </div>
            </div>

            {/* Right Column - Admin Actions */}
            <div>
              <h4 className="font-semibold text-2xl mb-6">Admin Actions</h4>
              <div className="space-y-3">
                <Button className="w-md bg-green-600 hover:bg-green-700 text-white h-12 !rounded-xl">Resolved</Button>
                <Button className="w-md bg-red-600 hover:bg-red-700 text-white h-12 !rounded-xl">Dismiss Report</Button>
              </div>
            </div>
          </div>   

          {/* Detailed Description */}
          <div>
            <h4 className="font-semibold text-2xl mb-3">Detailed Description</h4>
            <p className="max-w-5xl font-normal text-muted-foreground leading-relaxed">
              The reported user has been engaging in inappropriate behavior in the community forum. Multiple instances
              of harassment have been documented over the past week, including personal attacks and discriminatory
              language. The reported user has shown a pattern of targeting new members and attempting to intimidate
              them.
            </p>
          </div>

          {/* Attached Pictures */}
          <div>
            <h4 className="font-semibold text-2xl mb-5">Attached Pictures</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/note-table.png"
                  alt="Evidence screenshot 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/laptop.png"
                  alt="Evidence screenshot 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
        </div>
    );
};

export default ReportsOverview;