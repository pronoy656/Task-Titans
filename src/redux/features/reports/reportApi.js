// import { baseApi } from "../../api/baseApi";

// const reportsApi = baseApi.injectEndpoints({
//   overrideExisting: true,
//   endpoints: (builder) => ({
//     getReports: builder.query({
//       query: ({ page = 1, limit = 10 } = {}) => ({
//         url: "/reports",
//         method: "GET",
//         credentials: "include",
//         params: { page, limit },
//       }),
//     }),
//   }),
// });

// export const { useGetReportsQuery } = reportsApi;

import { baseApi } from "../../api/baseApi";

const reportsApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // Get reports with pagination
    getReports: builder.query({
      query: ({ page = 1, limit = 10 } = {}) => ({
        url: "/reports",
        method: "GET",
        credentials: "include",
        params: { page, limit },
      }),
    }),

    // Get reports stats
    getReportsStats: builder.query({
      query: () => ({
        url: "/reports/stats",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetReportsQuery, useGetReportsStatsQuery } = reportsApi;
