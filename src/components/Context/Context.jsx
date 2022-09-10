import React, {createContext} from 'react'
//data import
import {products} from "../data.js";

//creatingContext
export const ProdContext = createContext();


function Context({children}) {
  return (
    <ProdContext.Provider>
{children}
    </ProdContext.Provider>
    
  )
}

export default Context