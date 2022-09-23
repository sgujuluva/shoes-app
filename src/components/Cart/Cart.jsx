import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
//import "./Cart.css"
function Cart() {
  const {
    isEmpty,
    totalItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();
  console.log("items in cart page", items);
  if (isEmpty) return <div>Your Cart is empty!!!</div>;

  return (
    <section className="py-4 container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12">
          <h2>Total Items: ({totalItems})</h2>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img className="single-image" src={item.src} style={{ height: "4rem" }} alt="" />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
                      <button
                        className="btn btn-secondary ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +{" "}
                      </button>
                      <button
                        className="btn btn-secondary ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-secondary ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove Item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="ms-2 mt-20">
          <h2>Total Price : {cartTotal.toFixed(2)} €</h2>
          <Link to = "/payment"><button className="btn btn-secondary ms-2">Payment</button></Link>
        </div>
        <div className="col-auto ms-auto">
          <button className="btn btn-secondary m-2" onClick={() => emptyCart()}>
            Clear Cart
          </button>
        </div>
      
        
        
      </div>
    </section>
  );
}

export default Cart;
