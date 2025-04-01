import { Route, Routes } from "react-router-dom";
import PageRender from "./PageRender";
// import Index from "./screens/index";
import useAuthStore from "./data/Stores/Authstore";
import { ToastContainer } from "react-toastify";
import Home from "./screens/home";
// import NotFound from "./screens/not-found";
import { useFetchUserQuery } from "./api/userApi";
import { useEffect } from "react";

const Routers = () => {
  const { isAuth, getUser, logout } = useAuthStore();
  const { data: user, error } = useFetchUserQuery();

  useEffect(() => {
    if (user) {
      getUser(user);
    }
    if (error) {
      logout();
    }
  }, [user, error, getUser, logout]);

  return (
    <>
      <ToastContainer position="bottom-left" />

      <Routes>
        <Route
          path="/"
          element={isAuth ? <Index /> : <Home />}
        />
        {/* <Route
          path="/not-found"
          element={<NotFound />}
        /> */}
        <Route
          path="/:page"
          element={<PageRender />}
        />
        <Route
          path="/:page/:id"
          element={<PageRender />}
        />
        <Route
          path="/:page/:id/:step"
          element={<PageRender />}
        />
      </Routes>
    </>
  );
};

export default Routers;
