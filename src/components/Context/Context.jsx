import React, { createContext } from "react";
//data import
import { products } from "../data.js";

//creatingContext
export const ProdContext = createContext();

console.log("the prod in context are:", products);

function Context({ children }) {
  return (
    <ProdContext.Provider value={{ products }}>{children}</ProdContext.Provider>
  );
}

export default Context;
