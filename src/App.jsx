import "./App.css";
import Routers from "../src/routers/Routers";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React from "react";
import { GetListProvider } from "./context/getCarList";

function App() {
  return (
    <GetListProvider>
      <div className="App">
        <Header />
        <div>
          <Routers />
        </div>
        <Footer />
      </div>
    </GetListProvider>
  );
}

export default App;
