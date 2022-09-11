import React, { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom"; //hook to  get current pathname
import { ProdContext } from "../Context/Context";
import "./SingleProd.css";

function SingleProd() {
  const { products } = useContext(ProdContext);

  const params = useParams(); // to get the particular prod id with params
  console.log("params are:", params.id);
  //getting that particular prod using filter
  let filterProd = products.filter((item) => item.id === params.id);
  console.log("filteredProd is", filterProd);

  return (
    <>
      {filterProd.map((item) => (
        <div className="single-prod-details">
          <img src={item.src} alt="" />
          <div className="box">
            <div className="row">
              <h3>{item.title}</h3>
              <h2>{item.price.toFixed(2)} €</h2>
            </div>
            <p>{item.description}</p>
            <Link to="/cart">Add to Cart</Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default SingleProd;
