import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineGridView } from "react-icons/md";
import {
  ClipboardCheck,
  Eye,
  Handshake,
  LogOut,
  User,
  User2Icon,
  UserCog,
  Users,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard ",
    path: "/",
    renderIcon: (isActive) => (
      <MdOutlineGridView strokeColor={isActive ? "#EDF8F9" : "#212936"} />
    ),
  },
  {
    label: "Users",
    path: "/users",
    renderIcon: (isActive) => (
      <Users strokeColor={isActive ? "#EDF8F9" : "#212936"} />
    ),
  },
  {
    label: "Reports",
    path: "/reports",
    activePaths: [
      "/my-workplace/details/:id",
      "/itinerary/create-itinerary",
      "/itinerary/details-destination",
    ],
    renderIcon: (isActive) => (
      <ClipboardCheck strokeColor={isActive ? "#EDF8F9" : "#212936"} />
    ),
  },
  {
    label: "Terms & Conditions",
    path: "/terms-and-condition",
    renderIcon: (isActive) => (
      <Handshake strokeColor={isActive ? "#EDF8F9" : "#212936"} />
    ),
  },
  {
    label: "Post Management",
    path: "/post-management",
    renderIcon: (isActive) => (
      <UserCog strokeColor={isActive ? "#EDF8F9" : "#212936"} />
    ),
  },
  {
    label: "Post Overview",
    path: "/post-overview-chart",
    renderIcon: (isActive) => (
      <Eye strokeColor={isActive ? "#EDF8F9" : "#212936"} />
    ),
  },
  {
    label: "Logout",
    path: "/packing-list",
    renderIcon: (isActive) => (
      <LogOut strokeColor={isActive ? "#EDF8F9" : "#212936"} />
    ),
  },
];

const AdminSidebar = ({ closeSidebar }) => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="h-full">
      {/* <img className="w-40 h-12" src="/logo.png" alt="" /> */}
      {/* Menu Items */}
      <div className="px-3 pt-6">
        {menuItems.map((item) => {
          const isActive =
            pathname === item.path ||
            (item.activePaths && item.activePaths.includes(pathname));
          return (
            <div
              key={item.path}
              className={
                isActive
                  ? "bg-white text-[#3395FF] font-semibold text-xl rounded-sm transition-transform"
                  : "text-white text-xl font-semibold"
              }
            >
              <Link
                to={item.path}
                onClick={closeSidebar}
                className="flex items-center gap-3 px-4 py-6"
              >
                <span>{item.renderIcon(isActive)}</span>
                {item.label}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSidebar;
<p>This is addmin side bar</p>;
