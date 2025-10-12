import React from "react";
import { useParams } from "react-router-dom";
// import { useGetReportByIdQuery } from "../../../../redux/features/reports/reportApi";
import { Calendar, FileText, MessageSquare, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/Card";
import { Button } from "../../../ui/Button";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/Avatar";
import {
  useDismissReportMutation,
  useGetReportByIdQuery,
  useResolveReportMutation,
} from "../../../../redux/features/reports/reportApi";
import toast from "react-hot-toast";

const ReportsOverview = () => {
  const { id } = useParams();
  const { data, isLoading, error, refetch } = useGetReportByIdQuery(id);
  const [resolveReport, { isLoading: resolving }] = useResolveReportMutation();
  const [dismissReport, { isLoading: dismissing }] = useDismissReportMutation();

  console.log(data);

  // Handle resolve
  const handleResolve = async () => {
    try {
      await resolveReport(id).unwrap();
      toast.success("✅ Report resolved successfully!");
      refetch(); // refresh report status
    } catch (error) {
      // use the error so ESLint won't complain
      console.error("Failed to resolve report:", error);
      const message =
        error?.data?.message ??
        error?.message ??
        "❌ Failed to resolve report!";
      toast.error(message);
    }
  };

  // Handle dismiss
  const handleDismiss = async () => {
    try {
      await dismissReport(id).unwrap();
      toast.success("🚫 Report dismissed successfully!");
      refetch(); // refresh report status
    } catch (error) {
      console.error("Failed to dismiss report:", error);
      const message =
        error?.data?.message ??
        error?.message ??
        "❌ Failed to dismiss report!";
      toast.error(message);
    }
  };

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center py-20">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Loading Text */}
        <p className="mt-4 text-gray-600 text-lg font-medium animate-pulse">
          Loading report...
        </p>
      </div>
    );

  if (error)
    return (
      <p className="p-6 text-center text-red-600">Failed to load report.</p>
    );

  const report = data?.data;

  return (
    <div className="admin-page">
      <div className="min-h-screen p-0">
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="text-2xl !font-bold">
              {report.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Reporter Info */}
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src="/user-profile-avatar.png"
                  alt={report.reportedBy?.name}
                />
                <AvatarFallback>{report.reportedBy?.name?.[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold text-lg">{report.reportedBy?.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {report.reportedBy?.email}
                </p>
              </div>
            </div>

            {/* Report Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(report.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FileText className="h-5 w-5" />
                  <span className="capitalize">{report.status}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium mb-1">
                      <MessageSquare className="h-4 w-4" />
                      <span className="text-lg font-semibold">Type</span>
                    </div>
                    <p className="text-gray-700">{report.type ?? "N/A"}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium mb-1">
                      <Tag className="h-4 w-4" />
                      <span className="text-lg font-semibold">Category</span>
                    </div>
                    <p className="text-gray-700">{report.category}</p>
                  </div>
                </div>
              </div>

              {/* Admin Actions */}
              <div>
                <h4 className="font-semibold text-2xl mb-6">Admin Actions</h4>
                <div className="space-y-3">
                  {/* Resolve Button */}
                  <Button
                    onClick={handleResolve}
                    disabled={resolving || report.status === "resolved"}
                    className={`w-md h-12 !rounded-xl text-white transition-all
        ${
          report.status === "resolved"
            ? "bg-green-600 cursor-not-allowed opacity-60"
            : "bg-green-600 hover:bg-green-700"
        } disabled:opacity-60 disabled:cursor-not-allowed`}
                  >
                    {resolving
                      ? "Resolving..."
                      : report.status === "resolved"
                      ? "Resolved"
                      : "Resolve"}
                  </Button>

                  {/* Dismiss Button */}
                  <Button
                    onClick={handleDismiss}
                    disabled={dismissing || report.status === "dismissed"}
                    className={`w-md h-12 !rounded-xl text-white transition-all
        ${
          report.status === "dismissed"
            ? "bg-red-400 cursor-not-allowed"
            : "bg-red-600 hover:bg-red-700"
        }`}
                  >
                    {dismissing
                      ? "Dismissing..."
                      : report.status === "dismissed"
                      ? "Dismissed"
                      : "Dismiss"}
                  </Button>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="font-semibold text-2xl mb-3">
                Detailed Description
              </h4>
              <p className="max-w-5xl text-gray-700 leading-relaxed">
                {report.description}
              </p>
            </div>

            {/* Images */}
            {report.images?.length > 0 && (
              <div>
                <h4 className="font-semibold text-2xl mb-5">
                  Attached Pictures
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {report.images.map((img, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <img
                        src={img}
                        alt={`Evidence ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportsOverview;
