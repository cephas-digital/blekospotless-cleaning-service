import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const TOKEN = "DATA_TOKEN";

const AuthStore = (set) => ({
  token: localStorage.getItem(TOKEN) || null,
  user: null,
  isAuth: false,
  isLoggedIn: false,
  login: (payload) => {
    localStorage.setItem(TOKEN, payload?.token);
    set(
      {
        user: payload?.user,
        token: payload?.token,
        isLoggedIn: true,
        isAuth: true,
      },
      false,
      "login"
    );
  },
  getUser: (payload) => {
    set(
      {
        user: payload?.data || payload,
        isAuth: payload?.data || payload ? true : false,
      },
      false,
      "getUser"
    );
  },
  logout: () => {
    localStorage.removeItem(TOKEN);
    set(
      {
        isAuth: false,
        user: null,
        token: null,
        isLoggedIn: false,
      },
      false,
      "logout"
    );
  },
});

const useAuthStore = create(
  devtools(
    persist(AuthStore, {
      name: "data-dashboard",
    })
  )
);

export default useAuthStore;

export const MergedData = (data, payload) => {
  let ids = new Set(payload.map((d) => d._id));
  let updatateData = [...payload, ...data.filter((d) => !ids.has(d._id))];
  return updatateData?.sort((a, b) => a?.createdAt - b?.createdAt);
};

export const EditData = (data, payload) => {
  let updatateData =
    data?.length > 0
      ? data.map((item) => (item._id !== payload._id ? item : payload))
      : data;
  return updatateData;
};

export const DeleteData = (data, payload) => {
  let filterItem =
    data?.length > 0
      ? [...data.filter((item) => item._id !== payload._id)]
      : [];
  return filterItem;
};
