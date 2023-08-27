// Footer.js
import React from "react";
import SocialMediaIcon from "./SocialMediaIcon";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <div className="logo logo-footer">ViralHood</div>
        <div className="reach-us">
          <h3>REACH US</h3>
          <p className="footer-bold">Administrative Address</p>
          <p className="footer-custom">
            ViralHood(LAKVINS ENTERTAINMENT MEDIA PRIVATE LIMITED) Sector
            22,Gurgaon- 122001
          </p>
          <p className="footer-bold">Registered Address</p>
          <p className="footer-custom">
            70/5 CP MISSION COMPOUND JHANSI UP 284003
          </p>
          <p className="footer-custom">+91 7007789794</p>
          <p className="footer-custom">viralhood.in</p>
        </div>
      </div>

      <div className="footer-right">
        <div className="follow-us">
          <h3>FOLLOW US</h3>
          <p className="footer-custom">
            Join the Viralhood Frenzy! Be the First to Catch the Buzz.
          </p>
          <p className="footer-custom">
            Follow Us for the Latest Viral Sensations!
          </p>
          <SocialMediaIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
