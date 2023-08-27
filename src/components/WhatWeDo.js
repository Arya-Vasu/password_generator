// // WhatWeDo.js
import React, { useState } from "react";

const WhatWeDo = () => {
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [popupContent, setPopupContent] = useState({}); // State to store popup content

  const services = [
    {
      icon:
        "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Influencer Marketing",
      shortDescription:
        "Unleash your brand's potential with our expert influencer marketing division. Let influencers breathe life into your message and make an indelible impact on your audience.",
      description:
        "With a dedicated team of influencers and strategists, our influencer marketing division will empower your brand to reach new heights. Whether it's driving engagement on social media, expanding your online presence, or creating impactful brand collaborations, we'll help you connect with the right influencers who resonate with your target audience. Our approach is tailored, authentic, and results-driven, ensuring that your brand message is amplified in the most influential and captivating way. Let us help you harness the power of influencers to build meaningful connections and achieve your marketing goals. Together, we'll turn your influencer marketing visions into reality, leaving a lasting impact on your audience and industry."
    },
    {
      icon:
        "https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Event Management",
      shortDescription: "Short description of Service 2",
      description:
        "Praesent ullamcorper nunc at velit facilisis, sit amet interdum ex fringilla. Fusce auctor odio euismod, faucibus eros in, rhoncus velit."
    },
    {
      icon:
        "https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Artist Management",
      shortDescription: "Short description of Service 3",
      description:
        "Duis a nulla euismod, gravida nisi vel, fermentum odio. Vivamus ullamcorper vel nisi non dictum. Duis sit amet sapien eget leo bibendum."
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
          <img src={service.icon} alt={`Service Icon ${index + 1}`} />

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

export default WhatWeDo;
