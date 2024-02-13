export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  fuelType: string;
  transmission: string;
  engine: string;
  horsepower: number;
  features: string[];
  owners: number;
  image: string;
};

export interface CarsAction {
  type: CarsActionType;
  payload: Car[] | string;
};

export enum CarsActionType {
  SET_CARS = "setCars",
  UPDATE_CARS = "updateCars",
  SET_MAKEMODEL = "setMakeModel",
  SET_SEARCH_RESULT = "setSearchResult"
};