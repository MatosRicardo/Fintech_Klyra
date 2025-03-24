import Navbar from "./components/navbar/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import Styles from "./components/Home/Home.module.css"
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className={Styles.fundohome}>
      <Navbar />
      <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
