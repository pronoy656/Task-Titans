// src/redux/features/faq/faqApi.js
import { baseApi } from "../../api/baseApi";

const faqApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Create FAQ
    createFAQ: builder.mutation({
      query: (newFAQ) => ({
        url: "/faqs",
        method: "POST",
        body: newFAQ, // { question, answer }
        credentials: "include",
      }),
    }),

    // ✅ Get All FAQs
    getFAQs: builder.query({
      query: () => ({
        url: "/faqs",
        method: "GET",
        credentials: "include",
      }),
    }),

    // Update faq
    updateFAQ: builder.mutation({
      query: ({ faqId, data }) => ({
        url: `/faqs/${faqId}`,
        method: "PATCH",
        body: data,
      }),
    }),

    // Delete faq
    deleteFAQ: builder.mutation({
      query: (faqId) => ({
        url: `/faqs/${faqId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateFAQMutation,
  useGetFAQsQuery,
  useUpdateFAQMutation,
  useDeleteFAQMutation,
} = faqApi;
