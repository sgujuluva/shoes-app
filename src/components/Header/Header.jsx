import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
//images
import MenuIcon from "../../images/menuicon.png";
import CloseIcon from "../../images/closeicon.png";
import CartIcon from "../../images/carticon.png";
import Nikelogo from "../../images/nikelogo.png";
//styles
import "./Header.css";

function Header() {
  //toggle menu and close button
  const [toggle, setToggle] = useState(false);

  const toggleHandle = () => {
    setToggle(!toggle);
  };
  console.log("togle is:", toggle);
  //useCart
  const { totalItems } = useCart();
  return (
    <div className="header">
      <div className="header-menu">
        <img
          onClick={toggleHandle}
          className="menu"
          src={MenuIcon}
          alt="menu icon"
          height="20"
        />
        <div className="logo">
          <h1>
            <Link to="/">
              <img src={Nikelogo} width="30" alt="" />
              Nike
            </Link>
          </h1>
        </div>
        <nav>
          <ul className={toggle ? "notToggle" : "toggle"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <img
                onClick={toggleHandle}
                className="close"
                src={CloseIcon}
                alt="close"
                width="15"
              />
            </li>
          </ul>
          <div className="nav-cart">
            <Link to="/cart">
              <img src={CartIcon} alt="cart icon" width="25" />
            </Link>

            <span>{totalItems}</span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
