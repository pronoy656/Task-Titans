// dashboardApi.js
import { baseApi } from "../../api/baseApi";

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStats: builder.query({
      query: () => ({
        url: "/dashboard/stats",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetDashboardStatsQuery } = dashboardApi;
