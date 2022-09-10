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
        </div>
    </div>
  )
}

export default Header