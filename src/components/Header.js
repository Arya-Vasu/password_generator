import React from "react";
import SocialMediaIcon from "./SocialMediaIcon";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars, faEllipsisV,  } from "@fortawesome/free-solid-svg-icons";
import NavbarItems from "./NavbarItems.js";

const Header = ({
  isMenuOpen,
  toggleMenu,
  toggleSocial
}) => {
  return (
    <header className="logo global_header">
      <FontAwesomeIcon
        icon={isMenuOpen ? faArrowLeft : faBars}
        className="hamburger-menu"
        onClick={toggleMenu}
      />
      {/* {console.log(isMenuOpen)} */}
      <Link className="logo" to="/">
        <h1>V-Frame</h1>
      </Link>
      <NavbarItems />
      <FontAwesomeIcon
        icon={faEllipsisV}
        className="kebab-menu"
        onClick={toggleSocial}
      />
      <SocialMediaIcon />
    </header>
  );
};

export default Header;
