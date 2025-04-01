import { createApi } from "@reduxjs/toolkit/query/react";
import { customFetchBaseQuery } from "../data/Config";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: customFetchBaseQuery("user"),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    fetchUser: builder.query({
      query: () => "",
      providesTags: ["User"],
    }),
    updateProfile: builder.mutation({
      query: (body) => ({
        url: "",
        body,
        method: "PUT",
      }),
      invalidatesTags: ["User"],
      transformErrorResponse: (response) => response.data,
    }),
    uploadAvatar: builder.mutation({
      query: (body) => ({
        url: "upload-avatar",
        body,
        method: "POST",
      }),
      invalidatesTags: ["User"],
      transformErrorResponse: (response) => response.data,
    }),
    deleteAvatar: builder.mutation({
      query: (body) => ({
        url: "delete-avatar",
        body,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
      transformErrorResponse: (response) => response.data,
    }),
    changePassword: builder.mutation({
      query: (body) => ({
        url: "change-password",
        body,
        method: "POST",
      }),
      invalidatesTags: ["User"],
      transformErrorResponse: (response) => response.data,
    }),
  }),
});

export default userApi;

export const {
  useUpdateProfileMutation,
  useFetchUserQuery,
  useUploadAvatarMutation,
  useChangePasswordMutation,
  useDeleteAvatarMutation,
} = userApi;

export const invalidateUser = () => (dispatch) => {
  dispatch(userApi.util.invalidateTags([{ type: "User" }]));
};
