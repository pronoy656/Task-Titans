// src/redux/features/homepage/homepageApi.js
import { baseApi } from "../../api/baseApi";

const homepageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Get Homepage Data
    getHomepage: builder.query({
      query: () => ({
        url: "/homepage-edit",
        method: "GET",
        credentials: "include",
      }),
    }),

    // ✅ Update Homepage Data
    updateHomepage: builder.mutation({
      query: (updatedData) => ({
        url: "/homepage-edit",
        method: "PATCH",
        body: updatedData, // { title, content, ... }
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetHomepageQuery, useUpdateHomepageMutation } = homepageApi;
