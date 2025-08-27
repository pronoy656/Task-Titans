import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layouts/adminLayout/AdminLayout";
import Dashboard from "../components/pages/adminPages/dashboard/Dashboard";
import Users from "../components/pages/adminPages/users/Users";
import Reports from "../components/pages/adminPages/reports/Reports";
import TermsAndCondition from "../components/pages/adminPages/termsandcondition/TermsAndCondition";
import PostManagement from "../components/pages/adminPages/postManagement/PostManagement";
import Notification from "../components/pages/adminPages/notification/Notification";
import ReportsOverview from "../components/pages/adminPages/reports/ReportsOverview";
import PostOverview from "../components/pages/adminPages/postManagement/PostOverview";
import TaskerInformation from "../components/pages/adminPages/users/TaskerInformation";
import PosterInformation from "../components/pages/adminPages/users/PosterInformation";

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
        path: "/Tasker-information",
        element: <TaskerInformation/>
      },
      {
        path: "/poster-information",
        element: <PosterInformation/>
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
        path: "/post-overview",
        element: <PostOverview/>
      },
      {
        path: "/notification",
        element: <Notification/>
      }
    ]
  },
]);

export default router