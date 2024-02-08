import "./App.css";
import Routers from "../src/routers/Routers";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React from "react";
import { CarsProvider } from "../src/context/CarsProvider";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CarsProvider>
        <div className="App">
          <Header />
          <div>
            <Routers />
          </div>
          <Footer />
        </div>
      </CarsProvider>
    </BrowserRouter>
  );
}

export default App;
