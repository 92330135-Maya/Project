import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuItem from "../Component/MenuItem";
import '../App.css';

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const API_URL = process.env.REACT_APP_API_URL;
        const res = await axios.get(`${API_URL}/menu`);
        setMenu(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMenu();
  }, []);

  return (
    <div className="menuContainer">
      {menu.map(item => (
        <MenuItem
          key={item.id}
          name={item.item_name}
          price={item.price + "$"}
          image={item.image}
          item={item}
        />
      ))}
    </div>
  );
}

export default Menu;