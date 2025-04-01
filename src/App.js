import "./App.css";
import $ from "jquery";
import "react-toastify/dist/ReactToastify.css";
import DataProvider from "./data/Context";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./Routes";
import FilterProvider from "./data/FilterContext";

// Preloader
$(window).on("load", function () {
  $(".lds-ellipsis").fadeOut(); // will first fade out the loading animation
  $(".preloader").delay(333).fadeOut("slow"); // will fade out the white DIV that covers the website.
  $("body").delay(333);
});

const App = () => {
  return (
    <DataProvider>
      <FilterProvider>
        <Router>
          <Routers />
        </Router>
      </FilterProvider>
    </DataProvider>
  );
};

export default App;
