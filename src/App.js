import './App.css';
import PreNavBar from "./components/PreNavBar";
import NavBar from "./components/NavBar.js";
import {BrowserRouter as Router} from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.json"


function App() { //functional component

  return (
    <Router>
        <PreNavBar/>
        <NavBar/>
        <Slider start={data.banner.start}/>
    </Router>
  );
}

export default App;
