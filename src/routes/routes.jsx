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
import ChangeName from "../components/UpdateuserInformation/ChangeName";
import ChangePhoto from "../components/UpdateuserInformation/ChangePhoto";
import SignIn from "../components/adminAuthentication/SignIn";
import ForgetPassword from "../components/adminAuthentication/ForgetPassword";
import ResetPassword from "../components/adminAuthentication/ResetPassword";
import RevenueChart from "../components/pages/adminPages/revenuechart/RevenueChart";
import FaqPage from "../components/pages/adminPages/faq/FaqPage";
import Category from "../components/pages/adminPages/Category/Category";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";
import UploadBanner from "../components/pages/adminPages/uploadbanner/UploadBanner";
import GetOtp from "../components/adminAuthentication/GetOtp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <AdminLayout></AdminLayout>,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "/users",
            element: <Users />,
          },
          {
            path: "/Tasker-information/:id",
            element: <TaskerInformation />,
          },
          {
            path: "/poster-information/:id",
            element: <PosterInformation />,
          },
          {
            path: "/users",
            element: <Users />,
          },
          {
            path: "/reports",
            element: <Reports />,
          },
          {
            path: "/create-category",
            element: <Category />,
          },
          {
            path: "/reports-overview",
            element: <ReportsOverview></ReportsOverview>,
          },
          {
            path: "/terms-and-condition",
            element: <TermsAndCondition />,
          },
          {
            path: "/post-management",
            element: <PostManagement />,
          },
          {
            path: "/post-overview",
            element: <PostOverview />,
          },
          {
            path: "/notification",
            element: <Notification />,
          },
          {
            path: "/post-overview-chart",
            element: <RevenueChart />,
          },
          {
            path: "/faq",
            element: <FaqPage />,
          },
          {
            path: "/upload-banner",
            element: <UploadBanner />,
          },
        ],
      },
    ],
  },
  {
    path: "/change-name",
    element: <ChangeName />,
  },
  {
    path: "/change-photo",
    element: <ChangePhoto />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/get-otp",
    element: <GetOtp />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);

export default router;
