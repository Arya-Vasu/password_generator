import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";


const SocialMediaIcon = ({isSocialOpen}) => {

  return (
      <nav className={`${!isSocialOpen ? "social-icons1" : "social-icons2"}`}>
        <ul className="social-icons-list">
          <li className="social-icons-list-items">
            <a href="#" className="twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="social-icons-list-items">
            <a href="#" className="instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className="social-icons-list-items">
            <a href="#" className="linkedin">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
      </nav>
  );
};

export default SocialMediaIcon;

