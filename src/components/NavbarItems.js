import React from "react";
import { Link } from "react-router-dom";

const NavbarItems = ({isMenuOpen}) => {

  return (
      <nav className={`${isMenuOpen ? "custom-nav-open" : "custom-nav"}`}>
        <ul className="navbar-menu-list">
          <li className="navbar-menu-list-items">
            <Link className="a-custom" to="/">
              Home
            </Link>
          </li>
          <li className="navbar-menu-list-items">
            <Link className="a-custom" to="/">
              About
            </Link>
          </li>
          <li className="navbar-menu-list-items">
            <Link className="a-custom" to="/">
              Services
            </Link>
          </li>
          <li className="navbar-menu-list-items">
            <Link className="a-custom" to="/">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
  );
};

export default NavbarItems;
