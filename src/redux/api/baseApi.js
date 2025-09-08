import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setUser } from "../features/auth/authSlice";

// 1. Basic fetchBaseQuery setup
const baseQuery = fetchBaseQuery({
  baseUrl: `http://10.10.7.33:5000/api/v1/`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.token;
    console.log({ token });
    if (token) headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  const state = api.getState();
  const isLoggedOut = !state.auth.token;

  if (result?.error?.status === 401 && !isLoggedOut) {
    // Don't attempt refresh if already trying to logout
    if (
      typeof args === "object" &&
      "url" in args &&
      args.url === "/auth/logout"
    ) {
      return result;
    }

    console.log("Attempting token refresh...");

    const refreshResult = await baseQuery(
      {
        url: "auth/refresh-token",
        method: "POST",
        credentials: "include",
      },
      api,
      extraOptions
    );

    if (
      refreshResult.data &&
      typeof refreshResult.data === "object" &&
      "data" in refreshResult.data
    ) {
      const { accessToken, user } = refreshResult.data.data;

      api.dispatch(setUser({ user, token: accessToken }));

      // Retry with updated token
      result = await baseQuery(args, api, extraOptions);
      return result;
    } else {
      console.log("Refresh failed - logging out");
      api.dispatch(logOut());
      return { error: { status: 401, data: "Session expired" } };
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User", "Products", "MyProducts", "Cart", "Orders"],
  endpoints: () => ({}),
});
