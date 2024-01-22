import "./App.css";
import Routers from "../src/routers/Routers";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React from "react";
import { GetListProvider } from "./context/getCarList";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GetListProvider>
        <div className="App">
          <Header />
          <div>
            <Routers />
          </div>
          <Footer />
        </div>
      </GetListProvider>
    </BrowserRouter>
  );
}

export default App;
