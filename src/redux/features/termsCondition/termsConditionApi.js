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
  }),
});

export const { useSaveTermsMutation } = termsApi;
