import { baseApi } from "../../api/baseApi";

const usersApi = baseApi.injectEndpoints({
  overrideExisting: true,

  endpoints: (builder) => ({
    // Get users with pagination + role + search
    getUsers: builder.query({
      query: ({ page = 1, limit = 10, role, searchTerm } = {}) => ({
        url: "/user",
        method: "GET",
        credentials: "include",
        params: {
          page,
          limit,
          ...(role ? { role } : {}),
          ...(searchTerm ? { searchTerm } : {}),
        },
      }),
      providesTags: ["Users"], // 👈 এখানে ট্যাগ
    }),

    // Get users stats
    getUsersStats: builder.query({
      query: () => ({
        url: "/user/stats",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["UsersStats"],
    }),

    // Block user
    blockUser: builder.mutation({
      query: (userId) => ({
        url: `/user/${userId}/block`,
        method: "PATCH",
        credentials: "include",
      }),
      invalidatesTags: ["Users"], // 👈 block করলে Users cache invalidate হবে
    }),
  }),
});

export const { useGetUsersQuery, useGetUsersStatsQuery, useBlockUserMutation } =
  usersApi;
