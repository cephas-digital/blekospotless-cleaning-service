import { createApi } from "@reduxjs/toolkit/query/react";
import { customFetchBaseQuery } from "../data/Config";

const transactionApi = createApi({
  reducerPath: "transactionApi",
  baseQuery: customFetchBaseQuery(""),
  tagTypes: ["Transaction"],
  endpoints: (builder) => ({
    getReference: builder.mutation({
      query: () => "transactions/reference",
      transformResponse: (response) => response.data,
    }),
    fetchBanks: builder.mutation({
      query: (query) => `transactions/fetch-banks?query=${query}`,
      transformResponse: (response) => response.data,
    }),
    fetchAccountName: builder.mutation({
      query: (body) => ({
        url: `transactions/fetch-account-name`,
        method: "POST",
        body,
      }),
      transformResponse: (response) => response.data,
    }),
    withdraw: builder.mutation({
      query: (body) => ({
        url: `transactions/withdraw`,
        method: "POST",
        body,
      }),
    }),
    purchaseCredit: builder.mutation({
      query: (body) => ({
        url: "transactions/purchase-coin",
        body,
        method: "POST",
      }),
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ["User"],
    }),
    fetchPurchaseHistories: builder.query({
      query: (page) => `transactions/purchase-history?page=${page}`,
      transformResponse: (response) => response.data,
    }),
    fetchSettings: builder.query({
      query: () => `admin/settings`,
      transformResponse: (response) => response.data,
    }),
  }),
});

export default transactionApi;

export const {
  useGetReferenceMutation,
  useFetchPurchaseHistoriesQuery,
  useFetchSettingsQuery,
  usePurchaseCreditMutation,
  useFetchBanksMutation,
  useFetchAccountNameMutation,
  useWithdrawMutation,
} = transactionApi;
