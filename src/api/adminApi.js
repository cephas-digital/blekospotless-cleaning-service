import { createApi } from "@reduxjs/toolkit/query/react";
import { customFetchBaseQuery } from "../data/Config";

const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: customFetchBaseQuery("admin"),
  tagTypes: ["Admin"],
  endpoints: (builder) => ({
    dashboardData: builder.query({
      query: () => "dashboard-data",
      transformResponse: (response) => response?.data,
    }),
    // graphDetails: builder.query({
    //   query: (body) => `graph-${body?.tab}?year=${body?.year}`,
    //   transformResponse: (response) => response?.data,
    // }),
    fetchContributors: builder.query({
      query: (body) => `contributors?page=${body?.page}`,
      transformResponse: (response) => response?.data,
    }),
    fethcContents: builder.query({
      query: (body) => `contents?page=${body?.page}&mode=${body?.mode}`,
      transformResponse: (response) => response?.data,
    }),
    fetchGraphDetails: builder.query({
      query: (body) => `graph-${body?.query}?year=${body?.year}`,
      transformResponse: (response) => response?.data,
    }),
  }),
});

export default adminApi;

export const {
  useDashboardDataQuery,
  useFetchContributorsQuery,
  useFethcContentsQuery,
  useFetchGraphDetailsQuery,
} = adminApi;
