import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePages";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import NavbarItems from "./components/NavbarItems";
import SocialMediaIcon from "./components/SocialMediaIcon";
import OurTeam from "./components/OurTeam";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isSocialOpen, setIsSocialOpen] = useState(false);

  const toggleSocial = () => {
    setIsSocialOpen(!isSocialOpen);
  };

  return (
    <div style={{ height: "100%" }}>
      <Header
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        toggleSocial={toggleSocial}
      />
      {/* Left Drawer */}
      {isMenuOpen ? (
        <div className="leftDrawer" onClick={toggleMenu}>
          <NavbarItems isMenuOpen={isMenuOpen} />
        </div>
      ) : (
        ""
      )}
      {/* Right Drawer */}
      {isSocialOpen ? (
        <div className="rightDrawer" onClick={toggleSocial}>
          <SocialMediaIcon isSocialOpen={isSocialOpen} />
        </div>
      ) : (
        ""
      )}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/team" element={<OurTeam />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
