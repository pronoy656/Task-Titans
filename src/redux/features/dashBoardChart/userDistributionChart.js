import { baseApi } from "../../api/baseApi";

export const userDistributionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserDistribution: builder.query({
      query: () => ({
        url: "/user/distribution",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetUserDistributionQuery } = userDistributionApi;
