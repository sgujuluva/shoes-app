import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProdContext } from "../Context/Context";
import {useCart} from "react-use-cart";
//styles
import "./Products.css";


function Products() {

  const { products } = useContext(ProdContext);
  console.log("products in prod component", products);

//usecart
const {addItem} = useCart();

const handleAddToCart = () => {
  
}

  return (
    <div className="products">
      {products?.map((item) => (
        <div className="card" key={item.id}>
          <Link to={`/product/${item.id}`}>
            <img src={item.src} alt="" />
          </Link>
          <div className="content">
            <h3>
              <Link to={`/product/${item.id}`}>{item.title}</Link>
            </h3>
            <span>{item.price.toFixed(2)} €</span>
            <p>{item.description}</p>
            <button onClick = {handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
