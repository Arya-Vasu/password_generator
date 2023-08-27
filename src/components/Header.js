import React from "react";
import SocialMediaIcon from "./SocialMediaIcon";
import NavbarItems from "./NavbarItems.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";

const Header = ({
  isMenuOpen,
  setIsMenuOpen,
  toggleMenu,
  isSocialOpen,
  setIsSocialOpen,
  toggleSocial,
}) => {
  return (
    <header className="global_header">
      <FontAwesomeIcon
        icon={faBars}
        className="hamburger-menu"
        onClick={toggleMenu}
      />
      <h1>ViralHood</h1>
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
