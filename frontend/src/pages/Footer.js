import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Footer() {
  return (
    <footer>
    <section className="footer">
        <h4>Contact Us</h4>
        <p>Address:Al-Muhammara Street | Akkar</p>
        <p>The Phone:03 457629</p>
        <Link to="/"> Home </Link> 
              <Link to="/About"> About </Link>
               <Link to="/Contact"> Contact </Link>
                <Link to="/Menu"> Menu </Link>

     <p>@2025 TastyBite , All rights reserved</p>
    </section>
  </footer>

   
    
  );
}

export default Footer;