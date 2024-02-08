import { useReducer, createContext, useContext } from "react";

const initialCarsState = { cars: [], makeModel: "", searchResult: []};


export const CarsContext = createContext();
export const CarsDispatchContext = createContext();

export const CarsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    carsReducer,
    initialCarsState
  );

  return (
    <CarsContext.Provider
      value={state}
    >
      <CarsDispatchContext.Provider value={dispatch}>
        {children}
      </CarsDispatchContext.Provider>
    </CarsContext.Provider>
  );
};

export const CarsActionType = {
  SET_CARS: "setCars",
  UPDATE_CARS: "updateCars",
  SET_MAKEMODEL: "setMakeModel",
  SET_SEARCH_RESULT: "setSearchResult"
};

function carsReducer(state, action) {
  switch (action.type) {
    case CarsActionType.SET_CARS: {
      return { ...state, cars: action.payload };
    }
    case CarsActionType.UPDATE_CARS: {
      const existingIds = new Set(state.cars.map(car => car.id));
      const uniqueNewCars = action.payload.filter(car => !existingIds.has(car.id));
    
      return  {...state, cars: [...state.cars, ...uniqueNewCars]};
    }
    case CarsActionType.SET_SEARCH_RESULT: {
      return { ...state, searchResult: action.payload };
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
