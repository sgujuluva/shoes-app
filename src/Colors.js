import React, { useContext } from "react";
import { ProdContext } from "./components/Context/Context";

function Colors(singleProd) {
  const { products } = useContext(ProdContext);
console.log("singleprod in colors", singleProd)
  return (
    <div>
      {singleProd.colors.map((color,i) => (
                <button key={i} style={{background : color}}>{color}</button>
              ))}
    </div>
  );
}

export default Colors;
