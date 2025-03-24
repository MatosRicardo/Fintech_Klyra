import Navbar from "./components/navbar/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import Styles from "./components/Home/Home.module.css"

function App() {
  return (
    <BrowserRouter>
      <div className={Styles.fundohome}>
      <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
