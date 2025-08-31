import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "../ui/Card";
import { CardContent, CardHeader } from "../ui/CardContent";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { Eye, EyeOff } from "lucide-react";
import { Checkbox } from "../ui/Checkbox";
import { Button } from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth/authSlice";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Use navigate hook for redirect admin home page
  const navigate = useNavigate();

  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Call login API
      const result = await login({
        email: data.email,
        password: data.password,
      }).unwrap();

      dispatch(setUser({ token: result.data }));

      console.log("Login success:", result);

      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

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
              Task Titans Admin Access
            </h1>
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
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="font-medium text-gray-700">
                  Password
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
                    placeholder="Enter your password"
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

              {/* Remember + Forget Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberPassword"
                    {...register("rememberPassword")}
                    className="w-4 h-4"
                  />
                  <Label
                    htmlFor="rememberPassword"
                    className="font-medium text-gray-700"
                  >
                    Remember Password
                  </Label>
                </div>
                <Link to="/forget-password">
                  <button
                    type="button"
                    className="font-medium text-blue-500 hover:text-blue-600 transition-colors"
                    onClick={() => {
                      console.log("Forgot password clicked");
                    }}
                  >
                    Forget Password?
                  </button>
                </Link>
              </div>

              {/* Submit Button */}
              <div className="max-w-xl mx-auto">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium !h-14 py-2 px-4 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
