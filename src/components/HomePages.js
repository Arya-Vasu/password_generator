import React, { useState } from "react";
import TechnologyWeWorkOnNew from "./TechnologyWeWorkOnNew";
import "../styles.css";
// import ClientWeWorkWith from "./ClientWeWorkWith";
import VisionMission from "./VisionMission";

const HomePage = () => {

  return (
    <div className="homepage">
      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-bg" style={{textAlign: 'center'}}>
              <h1>#V-Frame</h1>
              <p>Want web-site? We'll give you.</p>
            </div>
            {/* <div className="influencersOnHomeBanner">
            </div> */}
          </div>
        </section>
        <VisionMission />
        <h1 style={{textAlign: 'center'}}>Technologies We Use</h1>
        <TechnologyWeWorkOnNew />
        {/* <ClientWeWorkWith /> */}
      </main>
    </div>
  );
};

export default HomePage;