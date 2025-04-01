import { createApi } from "@reduxjs/toolkit/query/react";
import { customFetchBaseQuery } from "../data/Config";

const contributorApi = createApi({
  reducerPath: "contributorApi",
  baseQuery: customFetchBaseQuery("contributor"),
  tagTypes: ["Contributor"],
  endpoints: (builder) => ({
    registerContributor: builder.mutation({
      query: (body) => ({
        url: "register-contributor",
        body,
        method: "POST",
      }),
    }),
    dashboardData: builder.query({
      query: () => "dashboard-data",
      transformResponse: (response) => response?.data,
    }),
    graphDetails: builder.query({
      query: (body) => `graph-${body?.tab}?year=${body?.year}`,
      transformResponse: (response) => response?.data,
    }),
    fetchWithdrawals: builder.query({
      query: (body) => `fetch-withdrawal-history?page=${body?.page}`,
      transformResponse: (response) => response?.data,
    }),
    fetchContributorContents: builder.query({
      query: (body) =>
        `fetch-contents?year=${body?.year}&status=${body?.status}&limit=3&page=${body?.page}`,
      transformResponse: (response) => response?.data,
    }),
  }),
});

export default contributorApi;

export const {
  useRegisterContributorMutation,
  useDashboardDataQuery,
  useGraphDetailsQuery,
  useFetchContributorContentsQuery,
  useFetchWithdrawalsQuery,
} = contributorApi;
