import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseQuery } from "../constants/Constants";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: BaseQuery,
  tagTypes: ["Projects"],
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: (page = 1) => `projects?_page=${page}&_limit=10`,
      providesTags: ["Projects"],
    }),
  }),
  createProject: builder.mutation({
    query: (body) => ({
      url: `urlhere`,
      method: "POST",
      body,
    }),
    invalidatesTags: ["Projects"],
  }),
});

export const { useGetProjectsQuery, useCreateProjectMutation } = projectApi;
