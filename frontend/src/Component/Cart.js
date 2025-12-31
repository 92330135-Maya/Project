import React, { useContext } from "react";
import { CartContext } from "../pages/CartContext";
import { useNavigate } from "react-router-dom"; 
import "../pages/Cart.css";

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePlaceOrder = () => navigate("/contact");

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {cartItems.length === 0 && <p>Your cart is empty</p>}

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.item_name} className="cart-item-image" />
          <div className="cart-item-right">
            <div className="cart-item-details">
              <h3>{item.item_name}</h3>
              <p>${item.price}</p>
            </div>
            <div className="counter-buttons">
              <button onClick={() => removeFromCart(item.id)}>-</button>
              <span>{item.counter}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
          </div>
        </div>
      ))}

      {cartItems.length > 0 && (
        <button className="btn1" onClick={handlePlaceOrder}>Place Order</button>
      )}
    </div>
  );
}

export default Cart;