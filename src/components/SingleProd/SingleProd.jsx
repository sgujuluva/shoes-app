import React, {useContext} from 'react';
import {useLocation, useParams} from "react-router-dom"; //hook to  get current pathname 
//import { ProdContext } from "../Context/Context";
import "./SingleProd.css";

function SingleProd() {

  //const { products } = useContext(ProdContext);

 /*  const location = useLocation(); //to get current url
  console.log("location is",location) */
  const params = useParams();
  console.log("params are:", params.id)
 

  return (
    <div>SingleProd</div>
  )
}

export default SingleProd