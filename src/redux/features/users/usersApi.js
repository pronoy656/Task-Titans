// import { baseApi } from "../../api/baseApi";

// const usersApi = baseApi.injectEndpoints({
//   overrideExisting: true,
//   endpoints: (builder) => ({
//     // Get users with pagination
//     getUsers: builder.query({
//       query: ({ page = 1, limit = 10 } = {}) => ({
//         url: "/user",
//         method: "GET",
//         credentials: "include",
//         params: { page, limit },
//       }),
//     }),

//     // Get users stats
//     getUsersStats: builder.query({
//       query: () => ({
//         url: "/user/stats",
//         method: "GET",
//         credentials: "include",
//       }),
//     }),
//   }),
// });

// export const { useGetUsersQuery, useGetUsersStatsQuery } = usersApi;

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
          ...(role ? { role } : {}), // শুধু role থাকলে পাঠাবে
          ...(searchTerm ? { searchTerm } : {}), // শুধু search থাকলে পাঠাবে
        },
      }),
    }),

    // Get users stats
    getUsersStats: builder.query({
      query: () => ({
        url: "/user/stats",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUsersStatsQuery } = usersApi;
