import React from 'react'
//img
import HomeShoe from "../../images/home-shoe.png";
import ShoeCollection from "../../images/shoe-collection.png";

function Home() {
  return (
    <div>
          <div className="home-container">
            <img src={HomeShoe} alt="" />
            <img src={ShoeCollection} alt="" />
      </div>
    </div>
  )
}

export default Home