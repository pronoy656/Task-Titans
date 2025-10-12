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

// import { baseApi } from "../../api/baseApi";

// const reportsApi = baseApi.injectEndpoints({
//   overrideExisting: true,
//   endpoints: (builder) => ({
//     // Get reports with pagination
//     getReports: builder.query({
//       query: ({ page = 1, limit = 10 } = {}) => ({
//         url: "/reports",
//         method: "GET",
//         credentials: "include",
//         params: { page, limit },
//       }),
//     }),

//     // Get reports stats
//     getReportsStats: builder.query({
//       query: () => ({
//         url: "/reports/stats",
//         method: "GET",
//         credentials: "include",
//       }),
//     }),

//     //get reports by id
//     getReportById: builder.query({
//       query: (id) => `/reports/${id}`,
//     }),

//     resolveReport: builder.mutation({
//       query: (id) => ({
//         url: `/reports/${id}/resolve`,
//         method: "PATCH",
//       }),
//     }),

//     dismissReport: builder.mutation({
//       query: (id) => ({
//         url: `/reports/${id}/dismiss`,
//         method: "PATCH",
//       }),
//     }),
//   }),
// });

// export const {
//   useGetReportsQuery,
//   useGetReportsStatsQuery,
//   useGetReportByIdQuery,
//   useResolveReportMutation,
//   useDismissReportMutation,
// } = reportsApi;

import { baseApi } from "../../api/baseApi";

const reportsApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // ✅ Get all reports with pagination
    getReports: builder.query({
      query: ({ page = 1, limit = 10 } = {}) => ({
        url: "/reports",
        method: "GET",
        credentials: "include",
        params: { page, limit },
      }),
      providesTags: ["Reports"], // <-- cache tag
    }),

    // ✅ Get reports stats
    getReportsStats: builder.query({
      query: () => ({
        url: "/reports/stats",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Reports"], // <-- same tag, so it will also refresh
    }),

    // ✅ Get single report by ID
    getReportById: builder.query({
      query: (id) => ({
        url: `/reports/${id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: (result, error, id) => [{ type: "Report", id }],
    }),

    // ✅ Resolve report
    resolveReport: builder.mutation({
      query: (id) => ({
        url: `/reports/${id}/resolve`,
        method: "PATCH",
        credentials: "include",
      }),
      invalidatesTags: (result, error, id) => [
        "Reports", // refresh list + stats
        { type: "Report", id }, // refresh this specific report
      ],
    }),

    // ✅ Dismiss report
    dismissReport: builder.mutation({
      query: (id) => ({
        url: `/reports/${id}/dismiss`,
        method: "PATCH",
        credentials: "include",
      }),
      invalidatesTags: (result, error, id) => [
        "Reports",
        { type: "Report", id },
      ],
    }),
  }),
});

export const {
  useGetReportsQuery,
  useGetReportsStatsQuery,
  useGetReportByIdQuery,
  useResolveReportMutation,
  useDismissReportMutation,
} = reportsApi;
