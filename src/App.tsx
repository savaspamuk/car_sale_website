import "./App.css";
import Routers from "./routers/Routers";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
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
