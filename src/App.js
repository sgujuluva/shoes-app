//lib
import {Routes, Route} from "react-router-dom";
//components
import Header from "./components/Header/Header"
import Products from "./components/Products/Products";
//styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Products/>
    </div>
  );
}

export default App;
