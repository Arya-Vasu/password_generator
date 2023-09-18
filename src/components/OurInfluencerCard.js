import React from "react";

export const OurInfluencerCard = ({ client }) => {
  return (
    <>
    <div key={client.id} className="our-influencer-card">
      <img src={client.avatarUrl} alt={client.name} />
        <h3>{client.name}</h3>
      </div>
      </>
  );
};
