import { useReducer, createContext, useContext } from "react";

const initialCarsState = { cars: [], makeModel: "" };

const CarsActionType = {
  SET_CARS: "setCars",
  SET_MAKEMODEL: "setMakeModel",
};

export const CarsContext = createContext(initialCarsState);
export const CarsDispatchContext = createContext(null);

export const CarsProvider = ({ children, initialState }) => {
  const [cars, dispatch] = useReducer(
    carsReducer,
    initialState ?? initialCarsState
  );

  return (
    <CarsContext.Provider value={cars}>
      <CarsDispatchContext.Provider value={dispatch}>
        {children}
      </CarsDispatchContext.Provider>
    </CarsContext.Provider>
  );
};

function carsReducer(cars, action) {
  switch (action.type) {
    case CarsActionType.SET_CARS: {
      return { ...cars, cars: action.payload };
    }
    case CarsActionType.SET_MAKEMODEL: {
      return { ...cars, makeModel: action.payload };
    }
    default:
      throw Error(`Action type ${action.type} is not supported`);
  }
}

export const useCarsContext = () => useContext(CarsContext);
export const useCarsDispatch = () => useContext(CarsDispatchContext);
