import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>LOGO</li>
        <li><Link to="/login">Login</Link></li>
        <li></li>
      </ul>
    </nav>
  );
};

export default NavBar;
