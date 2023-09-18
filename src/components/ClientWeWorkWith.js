// ClientWallOfFame.js
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ClientWeWorkWith = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    fetch("./Brand.json")
    .then((res) => res.json())
    .then((data) => setClients(data));
    // console.log("Successfully fetched");

  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="client-wall">
      <h2>Client Wall of Fame</h2>
      <Slider {...settings}>
        {clients.map((client) => (
          <div key={client.id} className="client-card">
            <img src={client.image} alt={client.name} />
            <h3>{client.name}</h3>
            {/* <p>{client.testimonial}</p> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientWeWorkWith;