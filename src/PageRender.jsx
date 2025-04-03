/* eslint-disable no-undef */
import { createElement, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Import useAuthStore hook from the correct location
import useAuthStore from "./data/Stores/Authstore";

const PageRender = () => {
  // Retrieve page, id, and step from URL params
  const { page, id, step } = useParams();
  const escape2 = ["home", "about", "our-team", "contact-us", "sign-up"];
  const navigate = useNavigate();

  // Use the useAuthStore hook to access authentication-related state
  const { isAuth } = useAuthStore();

  // Define generatePage function inside PageRender
  const generatePage = (pageName, folder) => {
    const component = () => require(`./${folder}/${pageName}`).default;
    try {
      return createElement(component());
    } catch (error) {
      return navigate("/not-found");
    }
  };

  // useEffect(() => {
  //   // Redirect to the homepage if the user is not authenticated
  //   if (!isAuth) {
  //     if (
  //       page !== "login" &&
  //       page !== "signup" &&
  //       page !== "password-changed"
  //     ) {
  //       navigate("/");
  //     }
  //   }
  //   // Redirect to the homepage if the user is authenticated and tries to access login or signup pages
  //   if (isAuth) {
  //     if (page === "login" || page === "signup") {
  //       navigate("/");
  //     }
  //   }
  // }, [page, isAuth, navigate]);

  // Construct the page name based on URL params and available escape routes
  let pageName = "";
  if (step) {
    pageName = `${page}/${id}/${"[id]"}`;
  } else if (id) {
    if (
      (page === "home" && escape2.includes(id)) ||
      (page === "dashboard" && escape2.includes(id))
    ) {
      pageName = `${page}/${id}`;
    } else {
      pageName = `${page}/${"[id]"}`;
    }
  } else {
    pageName = `${page}`;
  }

  // Call generatePage with the constructed pageName and determine the folder based on user authentication status
  return generatePage(pageName, "screens");
};

export default PageRender;
