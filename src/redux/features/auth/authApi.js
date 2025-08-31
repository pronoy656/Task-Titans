import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
getAllUsers: builder.query({
  query: ({ role, page = 1, limit = 10, searchTerm } = {}) => ({
    url: "/user",
    method: "GET",
    credentials: "include",
    params: {
      ...(role && { role }),
      page,
      limit,
      ...(searchTerm && { searchTerm })
    },
  }),
}),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    refreshToken: builder.mutation({
      query: () => ({
        url: "/auth/refresh-token",
        method: "POST",
        credentials: "include",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useRefreshTokenMutation,
  useLogoutMutation,
  useGetAllUsersQuery
} = authApi;
