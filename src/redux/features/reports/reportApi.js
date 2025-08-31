import { baseApi } from "../../api/baseApi";

const reportsApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getReports: builder.query({
      query: ({ page = 1, limit = 10 } = {}) => ({
        url: "/reports",
        method: "GET",
        credentials: "include",
        params: { page, limit },
      }),
    }),
  }),
});

export const { useGetReportsQuery } = reportsApi;
