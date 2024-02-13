import React, { useReducer, createContext, useContext, Dispatch } from "react";
import { Car, CarsAction, CarsActionType } from "../models/Car";

interface CarsState {
  cars: Car[];
  makeModel: string;
  searchResult: Car[];
}

const initialCarsState: CarsState = { cars: [], makeModel: "", searchResult: []};

export const CarsContext = createContext<CarsState>(initialCarsState);
export const CarsDispatchContext = createContext<Dispatch<CarsAction> | null>(null);

export const CarsProvider = ({ children }: { children: React.ReactNode }) => {
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


function carsReducer(state: CarsState, action: CarsAction): CarsState {
  switch (action.type) {
    case CarsActionType.SET_CARS: {
      return { ...state, cars: action.payload as Car[] };
    }
    case CarsActionType.UPDATE_CARS: {
      const existingIds = new Set(state.cars.map(car => car.id));
      const uniqueNewCars = (action.payload as Car[]).filter((car: Car) => !existingIds.has(car.id));
    
      return  {...state, cars: [...state.cars, ...uniqueNewCars]};
    }
    case CarsActionType.SET_SEARCH_RESULT: {
      return { ...state, searchResult: action.payload as Car[] };
    }
    case CarsActionType.SET_MAKEMODEL: {
      return { ...state, makeModel: action.payload as string};
    }
    default:
      throw Error(`Action type ${action.type} is not supported`);
  }
}

export const useCarsContext = () => useContext(CarsContext);
export const useCarsDispatch = () => useContext(CarsDispatchContext);