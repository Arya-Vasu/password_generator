// // WhatWeDo.js
import React, { useState } from "react";

const TechnologyWeWorkOnNew = () => {
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [popupContent, setPopupContent] = useState({}); // State to store popup content

  const services = [
    {
      icon:
        "https://w0.peakpx.com/wallpaper/214/158/HD-wallpaper-html5-logo-white-silk-texture-html5-emblem-programming-language-html-silk-background.jpg",
      title: "HTML5",
      shortDescription:
      "Shreya to provide the data.",
      description:
        "Shreya to provide the data."
    },
    {
      icon:
        "https://www.robinheed.com/wp-content/uploads/2016/04/css3.jpg",
      title: "CSS3",
      shortDescription: "Shreya to provide the data.",  
      description:
        "Shreya to provide the data."
    },
    {
      icon:
        "https://wallpaperaccess.com/full/8085076.png",
      title: "ReactJS",
      shortDescription: "Shreya to provide the data.",
      description:
        "Shreya to provide the data.",
    },
    {
      icon:
        "https://wallpaperaccess.com/full/6953608.jpg",
      title: "MaterialUI",
      shortDescription: "Shreya to provide the data.",
      description:
        "Shreya to provide the data.",
    },
    {
      icon:
        "https://www.adlice.com/wp-content/uploads/2017/01/0001494_search-engine-powered-by-mongodb.jpeg",
      title: "MongoDB",
      shortDescription: "Shreya to provide the data.",
      description:
        "Shreya to provide the data.",
    },
    {
      icon:
        "https://e0.pxfuel.com/wallpapers/86/808/desktop-wallpaper-js-node-js.jpg ",
      title: "NodeJS",
      shortDescription: "Shreya to provide the data.",
      description:
        "Shreya to provide the data.",
    }
      ];

  // Function to handle clicking on a service card
  const handleServiceClick = (service) => {
    setShowPopup(true);
    setPopupContent(service);
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
    setPopupContent({});
  };

  return (
    <section className="what-we-do">
      {services.map((service, index) => (
        <div
          className="service"
          key={index}
          onClick={() => handleServiceClick(service)}
        >
          <h4>{service.title}</h4>
          <img src={service.icon} alt={`Service Icon ${index + 1}`} style={{objectFit: 'cover'}} />

          <div className="overlay">
            <p>{service.shortDescription}</p>
          </div>
        </div>
      ))}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h4>{popupContent.title}</h4>
            <p>{popupContent.description}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TechnologyWeWorkOnNew;
