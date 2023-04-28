import "./App.css";
// import { Button } from "react-bootstrap";
import NavbarList from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import EquipmentDetails from "./components/ProductList";
import TrendingDetails from "./components/trending";
import SuggestedPage from "./components/Suggested";
import FooterDetails from "./components/Footer";
// import Page1 from "./components/Page1";
// import vector from "../public/Vector1.png"
function App() {
  return (
    <div >
    
          <NavbarList />
       <EquipmentDetails />
       <TrendingDetails />
       <SuggestedPage /><br />
       <FooterDetails />
 {/* <Page1 /> */}
    </div>
  );
}

export default App;
