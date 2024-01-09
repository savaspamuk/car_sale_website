import "./App.css";
import Routers from "../src/routers/Routers";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React, { Fragment } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
}

export default App;
