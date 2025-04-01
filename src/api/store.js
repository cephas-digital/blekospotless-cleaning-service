import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authApi from "./authApi";
import contentApi from "./contentApi";
import notificationApi from "./notificationApi";
import userApi from "./userApi";
import transactionApi from "./transactionApi";
import contributorApi from "./contributorApi";
import adminApi from "./adminApi";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [contentApi.reducerPath]: contentApi.reducer,
    [notificationApi.reducerPath]: notificationApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
    [contributorApi.reducerPath]: contributorApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(contentApi.middleware)
      .concat(notificationApi.middleware)
      .concat(userApi.middleware)
      .concat(transactionApi.middleware)
      .concat(contributorApi.middleware)
      .concat(adminApi.middleware),
});

setupListeners(store.dispatch);

export default store;
