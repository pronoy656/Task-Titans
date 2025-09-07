// termsApi.js
import { baseApi } from "../../api/baseApi";

const termsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Save or Update Terms & Conditions
    saveTerms: builder.mutation({
      query: (content) => ({
        url: "rules/terms-and-conditions",
        method: "POST",
        body: { content }, // API expects { content }
        credentials: "include",
      }),
    }),

    // Get Terms & Conditions
    getTerms: builder.query({
      query: () => ({
        url: "rules/terms-and-conditions",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useSaveTermsMutation, useGetTermsQuery } = termsApi;
