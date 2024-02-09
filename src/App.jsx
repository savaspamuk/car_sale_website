import "./App.css";
import Routers from "../src/routers/Routers";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useEffect} from "react";

import { BrowserRouter } from "react-router-dom";
import {
	useCarsDispatch,
	CarsActionType,
} from './context/CarsProvider';

function App() {
  const dispatch = useCarsDispatch();

	useEffect(() => {
			fetch('https://freetestapi.com/api/v1/cars')
			.then((response) => response.json())
			.then((data) => {
				if (data) dispatch({ type: CarsActionType.SET_CARS, payload: data });
			})
			.catch((error) => console.error('Unable to fetch cars data', error));
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
}

export default App;