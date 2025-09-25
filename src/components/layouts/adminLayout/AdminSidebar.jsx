import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineGridView } from "react-icons/md";
import {
  CircleQuestionMark,
  ClipboardCheck,
  Edit,
  Eye,
  Handshake,
  Home,
  LogOut,
  User,
  User2Icon,
  UserCog,
  Users,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/features/auth/authSlice";

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
    label: "Create Category",
    path: "/create-category",
    renderIcon: (isActive) => (
      <Edit strokeColor={isActive ? "#EDF8F9" : "#212936"} />
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
    label: "Edit Home Page",
    path: "/upload-banner",
    renderIcon: (isActive) => (
      <Home strokeColor={isActive ? "#EDF8F9" : "#212936"} />
    ),
  },
  {
    label: "FAQ",
    path: "/faq",
    renderIcon: (isActive) => (
      <CircleQuestionMark strokeColor={isActive ? "#EDF8F9" : "#212936"} />
    ),
  },
];

const AdminSidebar = ({ closeSidebar }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    // ✅ localStorage থেকে token মুছে দাও
    localStorage.removeItem("accessToken");

    // ✅ Redux state থেকেও clear করো (যদি ব্যবহার করো)
    dispatch(setUser(null));

    // ✅ Redirect to login page
    navigate("/sign-in");

    console.log("Login successfull");
  };

  return (
    <div className="h-full relative flex flex-col">
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
        {/* Logout Button at the bottom */}
        <div className="absolute bottom-0 pb-6">
          <button
            onClick={handleLogOut}
            className="w-full px-3 py-4 bg-red-500 text-white text-xl font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <LogOut />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
