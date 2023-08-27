// HomePage.js
import React from "react";
// import Header from "./Header";
import WhatWeDo from "./WhatWeDo";
import "../styles.css";
import ClientWeWorkWith from "./ClientWeWorkWith";
import Vision from "./Vision";
import InfluencerList from "./InfluencerList";
// import { startTransition } from "react";

const HomePage = () => {
  return (
    <div className="homepage">
      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-bg">
              <h1>#ViralHood</h1>
              <p>
                We create unforgettable experiences for your special events.
              </p>
              <button>Learn More</button>
            </div>
            <div className="video-banner">
              <video
                id="heroVideo"
                src="https://www.datocms-assets.com/75751/1675290972-homenewcreators.mp4"
                // class="ImageHero-module--video--bbde8"
                autoplay=""
                loop=""
                playsinline=""
                tabindex="-1"
              ></video>
            </div>
          </div>
        </section>
        <InfluencerList />
        <Vision />
        <WhatWeDo />
        <ClientWeWorkWith />
      </main>
    </div>
  );
};

export default HomePage;
