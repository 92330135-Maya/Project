import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

import pasta from "../Imgs/pasta.jpeg";
import burger from "../Imgs/burger.jpeg";
import asian from "../Imgs/asian.jpeg";
function Home() {
  return (
<div>
      
<section id="home" className="hero">
  <h2>Welcome to TastyBite</h2>
<p>Delicious meals delivered fresh to your door!</p>
<Link to="/menu" className="btn">Order Now</Link>
</section>

      
<section className="daily-specials">
  <div className="container">
<h2> Today's Specials </h2>
  <div className="cards">
<div className="card">
<img src={burger} alt="Special Dish" />
<div className="card-content">
<h3>Cheese Burger</h3>
<p> <strong>$3</strong></p>
 </div>
 </div>
<div className="card">
<img src={asian} alt="Special Dish" />
<div className="card-content">
<h3>Asian Fusion </h3>
<p> <strong>$6</strong></p>
              
</div>
</div>
<div className="card">
<img src={pasta} alt="Special Dish" />
<div className="card-content">
<h3>Carbonara Pasta</h3>
<p> <strong>$5</strong></p>
               
</div>
  </div>

</div>
</div>
   </section>

    </div>
  );
}

export default Home;