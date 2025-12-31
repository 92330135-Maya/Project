import React, { useContext } from "react";
import { CartContext } from "../pages/CartContext";
import '../App.css';

function MenuItem({ name, price, image, item }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="menuItem">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button className="btn" onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
}

export default MenuItem;