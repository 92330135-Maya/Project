import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <h1>TastyBite</h1>
    <nav >
      <Link to="/"> Home </Link> 
      <Link to="/About"> About </Link>
       <Link to="/Menu"> Menu </Link>
       <Link to="/Add"> Add </Link>
        <Link to="/Auth"> Auth </Link>
<Link to="/cart"> Cart </Link>
<Link to="/Contact"> Contact </Link>

    </nav>
    </header>
    
  );
}

export default NavBar;