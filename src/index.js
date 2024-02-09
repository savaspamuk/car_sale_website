import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CarsProvider } from "./context/CarsProvider.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CarsProvider>
      <App />
    </CarsProvider>
  </React.StrictMode>
);
