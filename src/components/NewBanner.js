import React from "react";

const NewBanner = () => {
  const influencers = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTtJK3R7U8O54xA3tx9rPFaYTjWjYq1mORGQ&usqp=CAU",
      title: "105M+",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWqlW_UjFYwCjUS00Pm9ZNiNoLD3x8ensgcQ&usqp=CAU",
      title: "150M+",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5I-LwMZGAWZ5bsnJ5XSkGlSfvbIdOYFr01A&usqp=CAU",
      title: "214M+",
    },
  ];

  return (
    <div className="Our-ifluencer-banner">
      <h1>Video Count</h1>
      <div className="Our-ifluencer-inside-banner">
        {influencers.map((influencers, index) => (
          <div className="Our-ifluencer-inside-banner-component">
            <img
              className="infl-img"
              src={influencers.image}
              alt={`influencer ${index + 1}`}
            />
            <p>{influencers.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewBanner;
