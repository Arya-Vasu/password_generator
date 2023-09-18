// AboutUs.js
import React from "react";
import "../styles.css";
import MilestoneCard from "./MilestoneCard";

const AboutUs = () => {
  return (
    <div className="homepage bg-black">
    <div className="about-us-container ">
      <div className="content">
        <h1>About Us</h1>
        <h2>Shaping Digital Influence for Tomorrow</h2>
        <p>
          Empowering digital influence, event excellence, and artist management
          with a blend of innovation and technology. Join us in transforming the
          way we connect, engage, and inspire.
        </p>
{/* <Vision/> */}
        <h2>Our Values</h2>
        <p>
          Transparency, Creativity, Excellence – these values drive everything
          we do at Viralhood. We uphold integrity in all our interactions and
          are committed to delivering exceptional results.
        </p>

        <h2>Client Success Stories</h2>
        <p>
          Our success is measured by the success of our clients. We take pride
          in helping brands achieve their goals and witnessing their growth and
          achievements.
        </p>

        <h2>Future Goals</h2>
        <p>
          Looking ahead, we aim to expand our reach, establish meaningful
          partnerships, and continue making a positive impact in the industries
          we serve.
        </p>
      </div>
      <MilestoneCard/>
</div>
    </div>
  );
};

export default AboutUs;
