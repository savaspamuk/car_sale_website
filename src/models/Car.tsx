export interface CarsAction {
  type: CarsActionType;
  payload: Car[] | string | undefined;
}

export enum CarsActionType {
  SET_CARS = "setCars",
  UPDATE_CARS = "updateCars",
  SET_MAKEMODEL = "setMakeModel",
  SET_SEARCH_RESULT = "setSearchResult",
  SORT_CARS = "SORT_CARS",
}
