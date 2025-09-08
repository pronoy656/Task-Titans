// tasksApi.js
import { baseApi } from "../../api/baseApi";

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCompletionStats: builder.query({
      query: () => ({
        url: "/tasks/completion-stats/last-6-months",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetCompletionStatsQuery } = tasksApi;
