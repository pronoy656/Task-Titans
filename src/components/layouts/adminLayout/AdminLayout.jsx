import React, { useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import { Outlet, useLocation } from "react-router-dom";

const AdminLayout = () => {
  //Location hook
  const Location = useLocation();

  const noHeaderSlider =
    location.pathname.includes("change-name") ||
    location.pathname.includes("change-photo");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen max-w-[2000px]  overflow-hidden relative">
      {/* Header  */}
      <div className="fixed top-0 left-0 w-full max-w-[2000px] z-50">
        {noHeaderSlider || (
          <AdminHeader
            toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
            isSidebarOpen={isSidebarOpen}
          />
        )}
      </div>
      {/* Sidebar - Starts After Header */}
      {noHeaderSlider || (
        <div
          className={`fixed pt-18 left-0 z-40 h-full w-[300px] bg-[#3395FF] transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0`}
        >
          <AdminSidebar closeSidebar={() => setIsSidebarOpen(false)} />
        </div>
      )}
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-30  bg-opacity-30 backdrop-blur-md lg:hidden"
        ></div>
      )}
      <div className="flex-1 flex mx-auto flex-col w-full ml-0 lg:ml-[300px] pt-[100px]">
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-2 sm:px-6 md:px-8 bg-[#FFFFFF]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
