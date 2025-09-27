// revenueApi.js
import { baseApi } from "../../api/baseApi";

export const revenueApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMonthlyRevenue: builder.query({
      query: () => ({
        url: "/dashboard/revenue/monthly",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetMonthlyRevenueQuery } = revenueApi;
