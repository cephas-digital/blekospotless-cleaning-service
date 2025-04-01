import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext({ filter: {}, handleFilter: () => {} });

export const useFilterContext = () => {
  return useContext(FilterContext);
};

const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    type: "image",
    status: "all",
    page: 1,
    url: "fetch",
    query: "",
    orientation: "all",
    user: "",
    toggle: true,
  });

  const handleFilter = (filterKey, value) => {
    setFilter((prev) => ({
      ...prev,
      [filterKey]: value,
      page: filterKey !== "page" ? 1 : value,
    }));
  };

  return (
    <FilterContext.Provider value={{ filter, handleFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
