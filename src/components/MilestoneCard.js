import React from "react";
import "../styles.css"; // Import your custom CSS file for styling

const MilestoneCard = () => {
  return (
    <div className="milestone-card">
      <h2>Milestones</h2>
      <div className="milestones">
        <div className="milestone">
          <div className="milestone-icon">20k+</div>
          <p>Educators</p>
        </div>
        <div className="milestone">
          <div className="milestone-icon">1L+</div>
          <p>Courses Sold</p>
        </div>
        <div className="milestone">
          <div className="milestone-icon">100+</div>
          <p>Strong Team</p>
        </div>
      </div>
    </div>
  );
};

export default MilestoneCard;
