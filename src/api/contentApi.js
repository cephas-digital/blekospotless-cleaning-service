import { createApi } from "@reduxjs/toolkit/query/react";
import { customFetchBaseQuery } from "../data/Config";

const contentApi = createApi({
  reducerPath: "contentApi",
  baseQuery: customFetchBaseQuery("content"),
  tagTypes: ["Content"],
  endpoints: (builder) => ({
    fetchContents: builder.query({
      query: (filter) => {
        const url =
          filter?.url === "search"
            ? `search?query=${encodeURIComponent(filter?.query)}&`
            : "?";
        return {
          url: `${url}type=${filter?.type}&status=${filter?.status}&page=${
            filter?.page
          }&orientation=${filter?.orientation}&user=${filter?.user}&toggle=${
            filter?.toggle
          }&author=${filter?.author || ""}`,
        };
      },
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data,
    }),
    fetchDashboardData: builder.query({
      query: () => ({
        url: "dashboardData",
      }),
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data,
    }),
    searchContentsTitle: builder.mutation({
      query: (filter) => ({
        url: `search-title?query=${encodeURIComponent(filter?.query)}&type=${
          filter?.type
        }`,
        method: "GET",
      }),
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data,
    }),
    fetchInteraction: builder.query({
      query: (data) => ({
        url: `${data?.url}?page=${data?.page}&limit=${data?.limit}`,
      }),
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data,
    }),
    viewContent: builder.query({
      query: (contentId) => ({
        url: `view/${contentId}`,
        method: "POST",
      }),
    }),
    likeContent: builder.mutation({
      query: (contentId) => ({
        url: `like/${contentId}`,
        method: "POST",
      }),
      transformErrorResponse: (response) => response.data,
    }),
    addToCollection: builder.mutation({
      query: (body) => ({
        url: "add-to-collection",
        method: "POST",
        body,
      }),
      transformErrorResponse: (response) => response.data,
    }),
    addContent: builder.mutation({
      query: (body) => ({
        url: "add",
        method: "POST",
        body,
      }),
      transformErrorResponse: (response) => response.data,
    }),
    download: builder.mutation({
      query: (body) => ({
        url: "download",
        method: "POST",
        responseHandler: (response) => response.blob(),
        body,
      }),
    }),
  }),
});

export default contentApi;

export const {
  useFetchContentsQuery,
  useSearchContentsTitleMutation,
  useFetchDashboardDataQuery,
  useFetchInteractionQuery,
  useViewContentQuery,
  useLikeContentMutation,
  useAddToCollectionMutation,
  useAddContentMutation,
  useDownloadMutation,
} = contentApi;
