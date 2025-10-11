import { useForm } from "react-hook-form";
import { Card } from "../ui/Card";
import { CardContent, CardHeader } from "../ui/CardContent";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";

import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { forgetPassword } from "../../redux/features/forgetPasswordApi/forgetPasswordApi";

// import { useForgetPasswordMutation } from "../../redux/features/auth/authApi";

const ForgetPassword = () => {
  // Use Navigate hook for redirect  page
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await forgetPassword(data);
      console.log("Response:", res);

      if (res?.success) {
        alert(res.message);
        navigate("/get-otp", { state: { email: data.email } });
      }
    } catch (error) {
      console.error("Forget password error:", error);
      alert(error?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-3xl">
          {/* Card */}
          <Card className="w-full max-auto bg-white shadow-md border border-gray-200 px-6 py-12">
            <div className="flex justify-center mb-12">
              <img className="w-[363px] h-[141px]" src="/logo.png" alt="" />
            </div>
            <CardHeader className="pb-6">
              <h1 className="text-3xl font-semibold text-center text-gray-900">
                Task Titans Admin Access
              </h1>
              <p className="text-center text-xl font-normal">
                Enter your email to reset password
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-medium text-gray-700">
                    Enter email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full h-12 px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your e-mail"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="max-w-lg mx-auto">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium !h-14 py-2 px-4 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "processing..." : "Continue"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
