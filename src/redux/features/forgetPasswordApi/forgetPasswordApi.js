// src/redux/features/auth/authApi.js
import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Step 1: Forget Password
    forgetPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/forget-password",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    // ✅ Step 2: Verify Email (OTP)
    verifyEmailOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/verify-email",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    // ✅ Step 3: Reset Password
    resetPassword: builder.mutation({
      query: ({ token, ...data }) => ({
        url: "/auth/reset-password",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: data,
      }),
    }),
  }),
});

export const {
  useForgetPasswordMutation,
  useVerifyEmailOtpMutation,
  useResetPasswordMutation,
} = authApi;
