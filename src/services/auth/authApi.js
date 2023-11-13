import { BaseQuery } from "../constants/Constants";
import { createApi } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: BaseQuery,
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query(args) {
        const { email, password } = args;
        return {
          url: "users/login",
          method: "post",
          body: { email, password },
        };
      },
    }),
    signupUser: builder.mutation({
      query(args) {
        const { userType, firstName, lastName, email, password } = args;
        return {
          url: `users/?type=${userType}`,
          method: "post",
          body: { email, password, firstName, lastName },
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useSignupUserMutation } = authApi;
