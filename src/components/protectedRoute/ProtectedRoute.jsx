import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    // যদি token না থাকে, redirect to login
    return <Navigate to="/sign-in" replace />;
  }

  // যদি token থাকে, route render করো
  return <Outlet />;
};

export default ProtectedRoute;

// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = ({ allowedRoles }) => {
//   const token = localStorage.getItem("accessToken");
//   const role = localStorage.getItem("role"); // store role in login

//   // Token nai -> login page e redirect
//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   // Role allowed list e nai -> unauthorized
//   if (allowedRoles && !allowedRoles.includes(role)) {
//     return <Navigate to="/sign-in" replace />; // or any page
//   }

//   // Token ache & role match -> render route
//   return <Outlet />;
// };

// export default ProtectedRoute;

// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = ({ allowedRoles }) => {
//   const token = localStorage.getItem("accessToken");
//   const user = JSON.parse(localStorage.getItem("user")); // user info get from localStorage
//   const role = user?.role;

//   // Token nai -> login page e redirect
//   if (!token) {
//     return <Navigate to="/sign-in" replace />;
//   }

//   // Role allowedRoles e nai -> unauthorized
//   if (allowedRoles && !allowedRoles.includes(role)) {
//     return <Navigate to="/sign-in" replace />; // optionally create this page
//   }

//   // Token ache & role match -> route render
//   return <Outlet />;
// };

// export default ProtectedRoute;
