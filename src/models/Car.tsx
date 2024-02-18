export interface CarsAction {
  type: CarsActionType;
  payload?: CarsActionPayload;
}

export interface CarsActionPayload {
  cars?: Car[];
  sorting?: boolean | "asc" | "desc"; 
}

export enum CarsActionType {
  SET_CARS = "setCars",
  UPDATE_CARS = "updateCars",
  SET_MAKEMODEL = "setMakeModel",
  SET_SEARCH_RESULT = "setSearchResult",
  SORT_CARS = "SORT_CARS",
}
