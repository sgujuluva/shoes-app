import React, { createContext, useState } from "react";
//data import
import { products } from "../data.js";

//creatingContext
export const ProdContext = createContext();

//console.log("the prod in context are:", products);

function Context({ children }) {
  //once register button is clicked, it should popup register form
  const [openRegister, setOpenRegister] = useState(false);
  let [isSignedIn, setIsSignedIn] = useState(false);
  const [signIn, setSignIn] = useState({});
  let [goToPayment, setGoToPayment] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <ProdContext.Provider
      value={{
        goToPayment,
        setGoToPayment,
        products,
        openRegister,
        setOpenRegister,
        isSignedIn,
        setIsSignedIn,
        signIn,
        setSignIn,
        users,
        setUsers,
      }}
    >
      {children}
    </ProdContext.Provider>
  );
}

export default Context;
