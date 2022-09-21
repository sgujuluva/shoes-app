import React, { createContext, useState } from "react";
//data import
import { products } from "../data.js";

//creatingContext
export const ProdContext = createContext();

//console.log("the prod in context are:", products);


function Context({ children }) {
  //once register button is clicked, it should popup register form
  const [openRegister, setOpenRegister] = useState(false);
  return (
    <ProdContext.Provider value={{ products,openRegister, setOpenRegister }}>{children}</ProdContext.Provider>
  );
}

export default Context;
