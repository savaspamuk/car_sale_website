import { useReducer, createContext, useContext, useState } from "react";

const initialCarsState = { cars: [], makeModel: "" };

const CarsActionType = {
  SET_CARS: "setCars",
  SET_MAKEMODEL: "setMakeModel",
};

export const CarsContext = createContext(initialCarsState);
export const CarsDispatchContext = createContext(null);

export const CarsProvider = ({ children, initialState }) => {
  const [cars, setCars] = useState([]);
  const [state, dispatch] = useReducer(
    carsReducer,
    initialState ?? initialCarsState
  );

  const getCars = async () => {
    const response = await fetch("https://freetestapi.com/api/v1/cars");
    const data = await response.json();
    dispatch({ type: CarsActionType.SET_CARS, payload: data });
  };

  const handleSort = async (event) => {
    const selectedSort = event.target.value;
    try {
      const response = await fetch(
        `https://freetestapi.com/api/v1/cars?sort=name&order=${selectedSort}`
      );
      const data = await response.json();
      dispatch({ type: CarsActionType.SET_CARS, payload: data });
    } catch (error) {
      console.error("Error fetching sorted data:", error);
    }
  };

  const setMakeModel = (makeModel) => {
    dispatch({ type: CarsActionType.SET_MAKEMODEL, payload: makeModel });
  };

  const handleSearch = async (makeModel) => {
    try {
      const response = await fetch(
        `https://freetestapi.com/api/v1/cars?search=${makeModel}`
      );
      const data = await response.json();
      dispatch({ type: CarsActionType.SET_CARS, payload: data });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <CarsContext.Provider
      value={{ ...state, getCars, handleSort, handleSearch }}
    >
      <CarsDispatchContext.Provider value={setMakeModel}>
        {children}
      </CarsDispatchContext.Provider>
    </CarsContext.Provider>
  );
};

function carsReducer(state, action) {
  switch (action.type) {
    case CarsActionType.SET_CARS: {
      return { ...state, cars: action.payload };
    }
    case CarsActionType.SET_MAKEMODEL: {
      return { ...state, makeModel: action.payload };
    }
    default:
      throw Error(`Action type ${action.type} is not supported`);
  }
}

export const useCarsContext = () => useContext(CarsContext);
export const useCarsDispatch = () => useContext(CarsDispatchContext);
