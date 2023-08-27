import React from "react";

export const InfluencerCard = ({ client }) => {
  return (
    <div key={client.id} className="influencer-card">
      <img src={client.avatarUrl} alt={client.name} />
      <div>
        <p>{client.name}</p>
        <p>{client.subscribersCount}</p>
      </div>

    </div>
  );
};
