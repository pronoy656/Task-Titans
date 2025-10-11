// src/redux/features/notification/notificationApi.js
import { baseApi } from "../../api/baseApi";

const notificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Get Admin Notifications (with pagination)
    getAdminNotifications: builder.query({
      query: ({ page = 1, limit = 10 } = {}) => ({
        url: `/notifications/admin?page=${page}&limit=${limit}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Notifications"],
    }),

    // ✅ Mark All as Read
    markAllAsRead: builder.mutation({
      query: () => ({
        url: "/notifications/mark-all-read",
        method: "PATCH",
        credentials: "include",
      }),
      invalidatesTags: ["Notifications"],
    }),

    // ✅ Mark a Single Notification as Read
    markSingleNotificationAsRead: builder.mutation({
      query: (notificationId) => ({
        url: `/notifications/admin/${notificationId}/read`,
        method: "PATCH",
        credentials: "include",
      }),
      invalidatesTags: ["Notifications"],
    }),
  }),
});

export const {
  useGetAdminNotificationsQuery,
  useMarkAllAsReadMutation,
  useMarkSingleNotificationAsReadMutation,
} = notificationApi;
