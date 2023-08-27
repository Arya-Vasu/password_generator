// Carousel.js
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src="https://via.placeholder.com/600" alt="Image 1" />
      </div>
      <div>
        <img src="https://via.placeholder.com/600" alt="Image 2" />
      </div>
      <div>
        <img src="https://via.placeholder.com/600" alt="Image 3" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
