import React, { useState, useEffect } from "react";
import { OurInfluencerCard } from "./OurInfluencerCard";
import InfluencerBanner from "./InfluencerBanner";
import VideoCountBanner from "./VideoCountBanner";
import NewBanner from "./NewBanner";

const OurTeam = () => {
  const [influencers, setInfluencers] = useState([]);
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);

  const banners = [
    <InfluencerBanner key={0} />,
    <VideoCountBanner key={1} />,
    <NewBanner key={2} />, // Add your third banner component here
  ];

  const handlePrevBanner = () => {
    setActiveBannerIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const handleNextBanner = () => {
    setActiveBannerIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    fetch("./Influencer.json")
      .then((response) => response.json())
      .then((data) => setInfluencers(data))
      .catch((error) => console.error("Error fetching influencers:", error));
  }, []);

  return (
    <>
      <div className="influencerBanner">
        <button className="arrow-button" onClick={handlePrevBanner}>
          &lt;
        </button>
        <div className="bannerMainDiv">
          {banners[activeBannerIndex]}
        </div>
        <button className="arrow-button" onClick={handleNextBanner}>
          &gt;
        </button>
      </div>
      <div>
        <h1 className="Our-ifluencer-h1">Our Influencers</h1>
        <div className="row">
          {influencers.map((influencer) => (
            <OurInfluencerCard key={influencer.id} client={influencer} />
          ))}
        </div>
      </div>
    </>
  );
};
export default OurTeam;
