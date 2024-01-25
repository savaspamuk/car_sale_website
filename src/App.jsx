import "./App.css";
import Routers from "../src/routers/Routers";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React from "react";
import { GetListProvider, GetListSearchProvider } from "./context/ListProvider";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GetListProvider>
        <GetListSearchProvider>
          <div className="App">
            <Header />
            <div>
              <Routers />
            </div>
            <Footer />
          </div>
        </GetListSearchProvider>
      </GetListProvider>
    </BrowserRouter>
  );
}

export default App;
