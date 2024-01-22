import React, { createContext, useState } from "react";

const GetListContext = createContext();

const GetListProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [makeModel, setMakeModel] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://freetestapi.com/api/v1/cars?search=${makeModel}`
    );
    const data = await response.json();

    console.log(data);

    setSearchResults(data);
  };

  const contextValue = {
    cars,
    handleSort,
    handleSubmit,
    getCars,
    makeModel,
    setMakeModel,
    searchResults,
  };

  return (
    <GetListContext.Provider value={contextValue}>
      {children}
    </GetListContext.Provider>
  );
};

export { GetListProvider, GetListContext };
