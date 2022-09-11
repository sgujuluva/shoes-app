//lib
import {Routes, Route} from "react-router-dom";
//components
import Header from "./components/Header/Header"
import Display from "./components/Display/Display";
//img
import HomeShoe from "./images/home-shoe.png";
import ShoeCollection from "./images/shoe-collection.png";
//styles
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Display/>
      <div className="home-container">
            <img src={HomeShoe} alt="" />
            <img src={ShoeCollection} alt="" />
      </div>
      
    </div>
  );
}

export default App;
