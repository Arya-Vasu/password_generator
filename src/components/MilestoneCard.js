import React from "react";
import "../styles.css"; // Import your custom CSS file for styling

const MilestoneCard = () => {
  return (
    <div className="milestone-card">
      <h2>Milestones</h2>
      <div className="milestones">
        <div className="milestone">
          <div className="milestone-icon">10K+</div>
          <p>Creators</p>
        </div>
        <div className="milestone">
          <div className="milestone-icon">100M+</div>
          <p>Audiece Reach</p>
        </div>
        <div className="milestone">
          <div className="milestone-icon">100+</div>
          <p>Satisfied Clients</p>
        </div>
      </div>
    </div>
  );
};

export default MilestoneCard;
