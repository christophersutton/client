import React from "react";
import { Link } from "react-router-dom";
import { MainLogo } from "../../utils/icons/Logo";
import "../sass/Nav.scss";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <MainLogo />
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default NavBar;
