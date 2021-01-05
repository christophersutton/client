import React from "react";
import { Link } from "react-router-dom";
import "../sass/NavBar.scss";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link className="logo" to="/">Water My Plants</Link></li>
        <li><Link className="btn" to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
