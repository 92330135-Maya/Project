import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import ChildForm from "../Component/ChildForm";
import "../App.css";

const Contact = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);

  const handleFormSubmit = async (data) => {
    const API_URL = process.env.REACT_APP_API_URL;
    const orderData = { customer: data, items: cartItems, total: totalPrice };

    try {
      await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });
      clearCart();
      alert("Order sent successfully!");
    } catch (err) {
      console.log(err);
      alert("Error sending order");
    }
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <ChildForm onSubmitData={handleFormSubmit} />
    </div>
  );
};

export default Contact;