import { createApi } from "@reduxjs/toolkit/query/react";
import { customFetchBaseQuery } from "../data/Config";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: customFetchBaseQuery("auth"),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    fetchcountries: builder.query({
      query: () => ({ url: "countries" }),
      transformResponse: (response) => response.data,
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: "signup",
        method: "POST",
        body,
      }),
      transformErrorResponse: (response) => {
        return response?.data;
      },
    }),
    resendtoken: builder.mutation({
      query: (body) => ({
        url: "resend-verfication-mail",
        method: "POST",
        body,
      }),
      transformErrorResponse: (response) => {
        return response?.data;
      },
    }),
    verifyemail: builder.mutation({
      query: (body) => ({
        url: "verify-email",
        method: "POST",
        body,
      }),
      transformErrorResponse: (response) => {
        return response?.data;
      },
    }),
    requesresetpassword: builder.mutation({
      query: (body) => ({
        url: "request-reset-password",
        method: "POST",
        body,
      }),
      transformErrorResponse: (response) => {
        return response?.data;
      },
    }),
    resetpassword: builder.mutation({
      query: (body) => ({
        url: "reset-password",
        method: "POST",
        body,
      }),
      transformErrorResponse: (response) => {
        return response?.data;
      },
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export default authApi;

export const {
  useSignupMutation,
  useFetchcountriesQuery,
  useResendtokenMutation,
  useVerifyemailMutation,
  useLoginMutation,
  useRequesresetpasswordMutation,
  useResetpasswordMutation,
} = authApi;
