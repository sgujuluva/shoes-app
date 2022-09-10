import React from 'react'
import {Link} from "react-router-dom";
//images
import MenuIcon from "../../images/menuicon.png";
import CloseIcon from "../../images/closeicon.png";
import CartIcon from "../../images/carticon.png";
import Nikelogo from "../../images/nikelogo.png";



function Header() {
  return (
    <div className = "header">
        <div className="header-menu">
    <img src={MenuIcon} alt="menu icon" width="20"/>
    <div className="logo">
        <h1><Link to="/"><img src={Nikelogo} width="30" alt="" />Nike</Link></h1>
    </div>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to ="/product">Product</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li>
                <img src={CloseIcon} alt="close" width="20" />
            </li>
        </ul> 
        <div className="nav-cart">
            <Link to="/cart"> <img src={CartIcon} alt="cart icon" width="25"/>
            </Link>
           
            <span>0</span>
        </div>
    </nav>
        </div>
    </div>
  )
}

export default Header