import React from "react";
import SingleProd from "../SingleProd/SingleProd";
import Products from "../Products/Products";
import { Routes, Route } from "react-router-dom";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import Payment from "../Payment/Payment";

function Display() {
  return (
    <div class="display">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<SingleProd />} />
        <Route path="/cart" element = {<Cart/>}/>
        <Route path="/payment" element = {<Payment/>}/>
      </Routes>
    </div>
  );
}

export default Display;
