import React from "react";
import SingleProd from "../SingleProd/SingleProd";
import Products from "../Products/Products";
import { Routes, Route } from "react-router-dom";

function Display() {
  return (
    <div class="display">
      <Routes>
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<SingleProd />} />
      </Routes>
    </div>
  );
}

export default Display;
