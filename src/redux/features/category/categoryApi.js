// src/redux/features/category/categoryApi.js
import { baseApi } from "../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Create Category
    createCategory: builder.mutation({
      query: (newCategory) => ({
        url: "/categories",
        method: "POST",
        body: newCategory, // { name, description }
        credentials: "include",
      }),
    }),

    // ✅ Get All Categories
    getCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
        credentials: "include",
      }),
    }),

    // ✅ Delete Category
    deleteCategory: builder.mutation({
      query: (categoryId) => ({
        url: `/categories/${categoryId}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
} = categoryApi;
