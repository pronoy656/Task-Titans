// postOverviewApi.js
import { baseApi } from "../../api/baseApi";

export const postOverviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTopCategories: builder.query({
      query: () => ({
        url: "/categories/top-category",
        method: "GET",
        credentials: "include",
      }),
      transformResponse: (response) =>
        response?.data?.map((item) => ({
          name: item.categoryName,
          revenue: parseFloat(item.percentage), // % for chart
          value: item.count, // number of posts
        })) || [],
    }),
  }),
});

export const { useGetTopCategoriesQuery } = postOverviewApi;
