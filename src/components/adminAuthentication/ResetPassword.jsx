import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "../ui/Card";
import { CardContent, CardHeader } from "../ui/CardContent";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../../redux/features/forgetPasswordApi/forgetPasswordApi";
// import { useResetPasswordMutation } from "../../redux/features/forgetPasswordApi/forgetPasswordApi";
// import { useResetPasswordMutation } from "../../redux/features/auth/authApi";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const location = useLocation();
  const token = location.state?.token;
  //UeNavigate hook for redirect the page
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (!token) {
        navigate("/forget-password");
        return null;
      }
      const res = await resetPassword(
        token,
        data.password,
        data.confirmPassword
      );

      if (res?.success) {
        alert(res.message);
        navigate("/sign-in");
      }
    } catch (error) {
      console.error("Reset password error:", error);
      alert(error?.data?.message || "Failed to reset password!");
    }
  };

  const password = watch("password");
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl">
        {/* Card */}
        <Card className="w-full max-auto bg-white shadow-md border border-gray-200 px-6 py-12">
          <div className="flex justify-center mb-12">
            <img className="w-[363px] h-[141px]" src="/logo.png" alt="" />
          </div>
          <CardHeader className="pb-6">
            <h1 className="text-3xl font-semibold text-center text-gray-900">
              Reset Your Password
            </h1>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="font-medium text-gray-700">
                  New Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className="w-full h-12 px-3 py-2 mt-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="confirmPassword"
                  className="font-medium text-gray-700"
                >
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirm ? "text" : "password"}
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    className="w-full h-12 px-3 py-2 mt-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Re-enter new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label={showConfirm ? "Hide password" : "Show password"}
                  >
                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-600">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="max-w-xl mx-auto">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium !h-14 py-2 px-4 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Resetting..." : "Reset Password"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResetPassword;
