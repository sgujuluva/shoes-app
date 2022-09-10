import React, {useContext} from 'react'
import { ProdContext } from "../Context/Context";
import "./SingleProd.css";

function SingleProd() {
  const { products } = useContext(ProdContext);
 console.log(this.props)
  return (
    <div>SingleProd</div>
  )
}

export default SingleProd