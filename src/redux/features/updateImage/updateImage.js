// src/redux/features/user/userApi.js
import { baseApi } from "../../api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Update User Profile (name or image or both)
    updateUserProfile: builder.mutation({
      query: ({ data, image }) => {
        const formData = new FormData();

        if (image) formData.append("image", image);
        formData.append("data", JSON.stringify(data));

        return {
          url: "/user/profile",
          method: "PATCH",
          body: formData,
          credentials: "include",
        };
      },
      invalidatesTags: ["UserProfile"], // ✅ helps auto-refresh profile info
    }),

    // ✅ Get User Profile
    getUserProfile: builder.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["UserProfile"],
    }),
  }),
});

export const { useUpdateUserProfileMutation, useGetUserProfileQuery } = userApi;
