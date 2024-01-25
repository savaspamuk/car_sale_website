import React, { createContext, useState } from "react";

const GetListContext = createContext();

const GetListSearchContext = createContext();

const GetListProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [makeModel, setMakeModel] = useState("");

  const getCars = async () => {
    const response = await fetch("https://freetestapi.com/api/v1/cars");
    const data = await response.json();
    setCars(data);
  };

  const handleSort = async (event) => {
    const selectedSort = event.target.value;
    try {
      const response = await fetch(
        `https://freetestapi.com/api/v1/cars?sort=name&order=${selectedSort}`
      );
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error("Error fetching sorted data:", error);
    }
  };
  const contextValue = {
    cars,
    getCars,
    handleSort,
    makeModel,
    setMakeModel,
  };
  return (
    <GetListContext.Provider value={contextValue}>
      {children}
    </GetListContext.Provider>
  );
};

const GetListSearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [makeModel, setMakeModel] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://freetestapi.com/api/v1/cars?search=${makeModel}`
    );
    const data = await response.json();

    console.log("API response:", data);

    setSearchResults(data);
    return data;
  };

  const contextValue = {
    handleSubmit,
    searchResults,
    makeModel,
    setMakeModel,
  };

  return (
    <GetListSearchContext.Provider value={contextValue}>
      {children}
    </GetListSearchContext.Provider>
  );
};

export {
  GetListProvider,
  GetListContext,
  GetListSearchProvider,
  GetListSearchContext,
};
