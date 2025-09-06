import React, { useEffect, useState } from "react";
import { Card } from "../../../ui/Card";
import { CardContent, CardHeader } from "../../../ui/CardContent";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/Avatar";
import PosterInformationTable from "./PosterInformationTable";
import { Button } from "../../../ui/Button";
import { Check, X } from "lucide-react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const PosterInformation = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `http://10.10.7.33:5000/api/v1/user/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YThhODUxY2FiNDBmMDU1MGViMDQ3MyIsInJvbGUiOiJTVVBFUl9BRE1JTiIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJpYXQiOjE3NTcxNzc4NTYsImV4cCI6MTc1NzI2NDI1Nn0.w88ZoqSPkQ08BCrRQlwauBcvi7t6HznEEm-SpbrTCwc`,
            },
          }
        );

        const data = await response.json();

        if (data.success) {
          setUserData(data.data.user);
          setTasks(data.data.tasks); // use tasks from response
        } else {
          console.error("Failed to fetch user data:", data.message);
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleBlockUser = async () => {
    try {
      const response = await fetch(
        `http://10.10.7.33:5000/api/v1/user/${userData._id}/block`,
        {
          method: "PATCH", // or POST, based on your backend
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YThhODUxY2FiNDBmMDU1MGViMDQ3MyIsInJvbGUiOiJTVVBFUl9BRE1JTiIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJpYXQiOjE3NTcxNzc4NTYsImV4cCI6MTc1NzI2NDI1Nn0.w88ZoqSPkQ08BCrRQlwauBcvi7t6HznEEm-SpbrTCwc`, // replace with your real token
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        setUserData((prev) => ({ ...prev, status: data.data.status }));
        toast.success("User blocked successfully!");
      } else {
        toast.error(data.message || "Failed to block user");
      }
    } catch (err) {
      console.error("Error blocking user:", err);
      toast.error("Something went wrong while blocking user!");
    }
  };

  const handleUnblockUser = async () => {
    try {
      const response = await fetch(
        `http://10.10.7.33:5000/api/v1/user/${userData._id}/unblock`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YThhODUxY2FiNDBmMDU1MGViMDQ3MyIsInJvbGUiOiJTVVBFUl9BRE1JTiIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJpYXQiOjE3NTcxNzc4NTYsImV4cCI6MTc1NzI2NDI1Nn0.w88ZoqSPkQ08BCrRQlwauBcvi7t6HznEEm-SpbrTCwc`,
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        setUserData((prev) => ({ ...prev, status: data.data.status }));
        toast.success("User unblocked successfully!");
      } else {
        toast.error(data.message || "Failed to unblock user");
      }
    } catch (err) {
      console.error("Error unblocking user:", err);
      toast.error("Something went wrong while unblocking user!");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!userData) return <div>User not found</div>;

  return (
    <div className="admin-page">
      <Card className="w-full max-w-7xl mx-auto my-6 p-6">
        <CardContent>
          <div className="flex gap-6 items-center">
            <Avatar className="w-20 h-20">
              <AvatarImage src={userData.image} alt={userData.name} />
              <AvatarFallback>{userData.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">{userData.name}</h2>
              <p>Email: {userData.email}</p>
              <p>User ID: {userData._id}</p>
              <p>
                Status:{" "}
                <span
                  className={`px-3 py-1 rounded-lg text-white text-sm ${
                    userData.status === "ACTIVE"
                      ? "bg-green-500"
                      : userData.status === "RESTRICTED"
                      ? "bg-red-500"
                      : "bg-gray-500"
                  }`}
                >
                  {userData.status}
                </span>
              </p>
              <p>Verified: {userData.verified ? "Yes" : "No"}</p>
              <p>Role: {userData.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="w-full max-w-7xl mx-auto mt-6">
        <h3 className="text-xl font-semibold mb-3">Poster Tasks</h3>
        <PosterInformationTable data={tasks} />
      </div>

      <div className="w-full max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">
          Admin Actions
        </h2>
        <div className="flex gap-4">
          <Button
            onClick={handleUnblockUser}
            disabled={userData?.status === "ACTIVE"} // disable if already active
            className={`${
              userData?.status === "ACTIVE"
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600 text-white"
            } !px-24 py-7 !text-lg rounded-lg flex items-center gap-2 font-medium min-w-[160px]`}
          >
            <Check className="w-6 h-6" />
            Unblock User
          </Button>

          <Button
            onClick={handleBlockUser}
            disabled={userData?.status === "RESTRICTED"} // disable if already blocked
            className={`${
              userData?.status === "RESTRICTED"
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600 text-white"
            } !px-24 py-7 !text-lg rounded-lg flex items-center gap-2 font-semibold min-w-[160px]`}
          >
            <X className="w-6 h-6" />
            Block User
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PosterInformation;
