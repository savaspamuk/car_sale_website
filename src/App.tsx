import "./App.css";
import React from "react";
import Routers from "./routers/Routers";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import { useCarsDispatch } from "./context/CarsProvider";
import { CarsActionType } from "./models/Car";

const App: React.FC = () => {
  const dispatch = useCarsDispatch();

  useEffect(() => {
    fetch("https://freetestapi.com/api/v1/cars")
      .then((response) => response.json())
      .then((data: any) => {
        if (data) {
          dispatch && dispatch({ type: CarsActionType.SET_CARS, payload: data });
        }
      })
      .catch((error) => console.error("Unable to fetch cars data", error));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routers />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
