import { createApi } from "@reduxjs/toolkit/query/react";
import { customFetchBaseQuery } from "../data/Config";

const notificationApi = createApi({
  reducerPath: "notificationApi",
  baseQuery: customFetchBaseQuery("notification"),
  tagTypes: ["Notification"],
  endpoints: (builder) => ({
    fetchNotification: builder.query({
      query: (page) => ({
        url: `?page=${page}`,
      }),
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data,
    }),
    readNotification: builder.mutation({
      query: (body) => ({
        url: "read",
        body,
        method: "POST",
      }),
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data,
    }),
  }),
});

export default notificationApi;

export const { useFetchNotificationQuery, useReadNotificationMutation } =
  notificationApi;
