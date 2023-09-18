import React from "react";

const InfluencerBanner = () => {
  const influencers = [
    {
      image:
        "https://static.langimg.com/photo/99482338/99482338.jpg",
      title: "shweta tiwari",
    },
    {
      image:
        "https://www.gethucinema.com/wp-content/uploads/2023/04/BhuvanBam-40.jpg",
      title: "Bhuban ban",
    },
    {
      image:
        "https://i.pinimg.com/550x/b3/50/a4/b350a43c29c7a26b029e21bf81e5ceff.jpg",
      title: "carry",
    },
    {
      image:
        "https://files.oyebesmartest.com/uploads/preview/cute-janna4ui.jpeg",
      title: "jannat zubair",
    },
  ];

  return (
    <div className="Our-ifluencer-banner" >
      <h1>Collab With</h1>
      <div className="Our-ifluencer-inside-banner">
        {influencers.map((influencers, index) => (
          <div>
            <img
              className="infl-img"
              src={influencers.image}
              alt={`influencer ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <h1> Famous YouTubers</h1>

    </div>
  );
};

export default InfluencerBanner;
