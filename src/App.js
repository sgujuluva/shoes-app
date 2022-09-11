//lib
import {Routes, Route} from "react-router-dom";
//components
import Header from "./components/Header/Header"
import Display from "./components/Display/Display";

//styles
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Display/>
    </div>
  );
}

export default App;
