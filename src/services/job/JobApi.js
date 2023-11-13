import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseQuery } from "../constants/Constants";

export const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: BaseQuery,
  tagTypes: ["Jobs"],
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: (page = 1) => `jobs?_page=${page}&_limit=10`,
      providesTags: ["Jobs"],
    }),
  }),
  postJob: builder.mutation({
    query: (body) => ({
      url: `urlhere`,
      method: "POST",
      body,
    }),
    invalidatesTags: ["Jobs"],
  }),
});

export const { useGetJobsQuery, usePostJobMutation } = projectApi;
