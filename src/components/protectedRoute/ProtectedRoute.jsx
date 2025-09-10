import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    // যদি token না থাকে, redirect to login
    return <Navigate to="/login" replace />;
  }

  // যদি token থাকে, route render করো
  return <Outlet />;
};

export default ProtectedRoute;
