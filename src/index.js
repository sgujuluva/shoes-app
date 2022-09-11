import React from "react";
import ReactDOM from "react-dom/client";
import Context from "./components/Context/Context";
//lib
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Context>
          <App />
        </Context>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
