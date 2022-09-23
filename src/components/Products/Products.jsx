import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProdContext } from "../Context/Context";
import { useCart } from "react-use-cart";
//styles
import "./Products.css";
import Cart from "../Cart/Cart";

function Products() {
  const { products } = useContext(ProdContext);
  console.log("products in prod component", products);

  //usecart
  const { addItem } = useCart();

  return (
    <div className="products">
      <div className="products-container">
        {products?.map((item) => (
          <div className="card" key={item.id}>
            <Link to={`/product/${item.id}`}>
            <img src={item.src} alt="" />
            </Link> 
            {/*  <img src={item.src} alt="" /> */}          
           {/*  <h3>
              <Link to={`/product/${item.id}`}>{item.title}</Link>
            </h3> */}
            <h3>{item.title}</h3>
            <span>{item.price.toFixed(2)} €</span>
            <p>{item.description}</p>
            {/* <button onClick={() => addItem(item)}>Add to Cart</button> */}
            <Link to={`/product/${item.id}`}><button>Explore</button></Link> 
          </div>

          /*    </div> */
        ))}
      </div>
    </div>
  );
}

export default Products;
