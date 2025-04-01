import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TOKEN } from "./Stores/Authstore";

export const customFetchBaseQuery = (url) => {
  return fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_URL}/${url}`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(TOKEN);
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
};
