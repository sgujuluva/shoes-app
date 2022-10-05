//lib
import { Routes, Route } from "react-router-dom";
//components
import Header from "./components/Header/Header";
import SingleProd from "./components/SingleProd/SingleProd";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Payment from "./components/Payment/Payment";
import Contact from "./components/Contact/Contact";

//styles
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<SingleProd />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
