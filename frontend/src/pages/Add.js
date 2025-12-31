import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../App.css';

function Add() {
  const navigate = useNavigate();
  const [menu, setmenu] = useState({ name: "", price: "", image: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setmenu(prev => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", menu.name);
    formData.append("price", menu.price);
    formData.append("image", menu.image);

    try {
      const API_URL = process.env.REACT_APP_API_URL;
      await axios.post(`${API_URL}/menu`, formData);
      alert("Menu Item Added!");
      navigate("/menu");
    } catch (err) {
      console.log(err);
      alert("Error adding menu item!");
    }
  };

  return (
    <div className="addContainer">
      <h1 className="addTitle">Add Menu Item</h1>
      <form className="addForm">
        <input type="text" name="name" placeholder="Item Name" onChange={handleChange} className="addInput" />
        <input type="text" name="price" placeholder="Price" onChange={handleChange} className="addInput" />
        <input type="file" name="image" onChange={handleChange} className="addInput" />
        <button type="submit" onClick={handleClick} className="addButton">Add</button>
      </form>
    </div>
  );
}

export default Add;