import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePages";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import NavbarItems from "./components/NavbarItems";
import SocialMediaIcon from "./components/SocialMediaIcon";

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
      {/* Header Component */}
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        toggleMenu={toggleMenu}
        isSocialOpen={isSocialOpen}
        setIsSocialOpen={setIsSocialOpen}
        toggleSocial={toggleSocial}
      />
      {/* Left Drawer */}
      {isMenuOpen ? (
        <div className="leftDrawer">
          <NavbarItems isMenuOpen={isMenuOpen} />
        </div>
      ) : (
        ""
      )}
      {/* Right Drawer */}
      {isSocialOpen ? (
        <div className="rightDrawer">
          <SocialMediaIcon isSocialOpen={isSocialOpen} />
        </div>
      ) : (
        ""
      )}
      {/* Routes */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
