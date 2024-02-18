interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  fuelType: FuelType;
  transmission: Transmission;
  engine: string;
  horsepower: number;
  features: string[];
  owners: number;
  image: string;
}

enum FuelType {
  Gasoline = "Gasoline",
  Electric = "Electric",
}

enum Transmission {
  Automatic = "Automatic",
  Manual = "Manual",
}
