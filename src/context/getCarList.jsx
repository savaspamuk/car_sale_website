import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GetListContext = createContext();

const GetListProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [makeModel, setMakeModel] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getCars() {
      try {
        const response = await fetch("https://freetestapi.com/api/v1/cars");
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getCars();
  }, []);

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
    navigate("/results", { state: { results: data } });
  };

  const contextValue = {
    cars,
    handleSort,
    handleSubmit,
  };

  return (
    <GetListContext.Provider value={contextValue}>
      {children}
    </GetListContext.Provider>
  );
};

export { GetListProvider, GetListContext };
