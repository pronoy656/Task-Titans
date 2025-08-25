import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layouts/adminLayout/AdminLayout";
import Dashboard from "../components/pages/adminPages/dashboard/Dashboard";
import Users from "../components/pages/adminPages/users/Users";
import Reports from "../components/pages/adminPages/reports/Reports";
import TermsAndCondition from "../components/pages/adminPages/termsandcondition/TermsAndCondition";
import PostManagement from "../components/pages/adminPages/postManagement/PostManagement";
import Notification from "../components/pages/adminPages/notification/Notification";
import ReportsOverview from "../components/pages/adminPages/reports/ReportsOverview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        path: "",
        element: <Dashboard/>
      },
      {
        path: "/users",
        element: <Users/>
      },
      {
        path: "/reports",
        element: <Reports/>
      },
      {
        path: "/reports-overview",
        element: <ReportsOverview></ReportsOverview>
      },
      {
        path: "/terms-and-condition",
        element: <TermsAndCondition/>
      },
      {
        path: "/post-management",
        element: <PostManagement/>
      },
      {
        path: "/notification",
        element: <Notification/>
      }
    ]
  },
]);

export default router