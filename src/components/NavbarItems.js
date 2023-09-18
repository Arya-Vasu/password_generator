import React from "react";
import { Link } from "react-router-dom";

const NavbarItems = ({isMenuOpen}) => {

  return (
      <nav className={`${isMenuOpen ? "custom-nav-open" : "custom-nav"}`}>
        <ul className="navbar-menu-list">
          <li className="nav-link navbar-menu-list-items">
            <Link className="a-custom" to="/">
              Home
            </Link>
          </li>
          <li className="nav-link navbar-menu-list-items">
            <Link className="a-custom" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-link navbar-menu-list-items">
            <Link className="a-custom" to="/team">
              Our Team
            </Link>
          </li>
          <li className="nav-link navbar-menu-list-items">
            <Link className="a-custom" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
  );
};

export default NavbarItems;
