import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./Component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Feedback from "./pages/Feedback";
import Footer from "./pages/Footer";
import Cart from "./Component/Cart"; // ✅ مهم
import Add from "./pages/Add";
import Auth from "./Component/Auth";
import { CartProvider } from "./pages/CartContext";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
 
            <Route path="/Auth"element={<Auth />}
            />
        
            <Route path="/contact"element={<Contact />}
            />

            <Route path="/cart"element={<Cart />}
            />

            <Route path="/add" element={<Add />}/>
          </Routes>

          <Feedback />
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
