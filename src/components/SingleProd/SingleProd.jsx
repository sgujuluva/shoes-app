import React, { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom"; //hook to  get current pathname
//import Colors from "../../Colors";
import { ProdContext } from "../Context/Context";
import { useCart } from "react-use-cart";
import "./SingleProd.css";
import Cart from "../Cart/Cart";

function SingleProd() {
  const { products } = useContext(ProdContext);
  const { addItem } = useCart();
  console.log("addItem is", addItem);
  const params = useParams(); // to get the particular prod id with params
  console.log("params are:", params.id);
  //getting that particular prod using filter
  let filterProd = products.filter((item) => item.id === params.id);
  console.log("filteredProd is", filterProd);

  return (
    <div className="main">
      <div className="single-prod-details">
        <div className="single-prod-container">
          {filterProd.map((item) => (
            <>
              <img src={item.src} alt="" />
              <div className="single-prod-info">
                <h3>{item.title}</h3>
                <h2>{item.price.toFixed(2)} €</h2>
                <p>
                  {item.colors.map((color, i) => (
                    <button key={i} style={{ background: color }}></button>
                  ))}
                </p>

                <p className="desc">{item.description}</p>
                <Link onClick={() => addItem(filterProd)} to="/cart">
                  Add to Cart
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleProd;
