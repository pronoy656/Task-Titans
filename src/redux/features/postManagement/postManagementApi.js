import { baseApi } from "../../api/baseApi";

export const tasksApi = baseApi.injectEndpoints({
  overrideExisting: true,

  endpoints: (builder) => ({
    // ✅ Get all tasks with pagination + search
    getAllTasks: builder.query({
      query: ({ page = 1, limit = 10, searchTerm } = {}) => ({
        url: "/tasks",
        method: "GET",
        credentials: "include",
        params: {
          page,
          limit,
          ...(searchTerm ? { searchTerm } : {}),
        },
      }),
      providesTags: ["Tasks"],
    }),

    // ✅ Get tasks stats
    getTaskStats: builder.query({
      query: () => ({
        url: "/tasks/stats",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["TasksStats"],
    }),

    // ✅ Update task status (example: cancel task)
    updateTaskStatus: builder.mutation({
      query: ({ taskId, status }) => ({
        url: `/tasks/${taskId}/status`,
        method: "PATCH",
        credentials: "include",
        body: { status },
      }),
      invalidatesTags: ["Tasks", "TasksStats"],
    }),
  }),
});

export const {
  useGetAllTasksQuery,
  useGetTaskStatsQuery,
  useUpdateTaskStatusMutation,
} = tasksApi;
