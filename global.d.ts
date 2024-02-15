interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  fuelType: "Gasoline" | "Electric";
  transmission: "Automatic" | "Manual";
  engine: string;
  horsepower: number;
  features: string[];
  owners: number;
  image: string;
}
