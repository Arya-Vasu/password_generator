import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

    const ServiceCard = ({ icon, title, subtitle, description ,path}) => {
      
  return (
    <div>
    <div className="service-card-servicespage">
      <div className="icon">{icon}</div>
      <div className="text-content">
        <h1>{title}</h1>
        <Link to={path} className="learn-more-button">
        Learn More
        </Link>
      </div>
      <h4>{subtitle}</h4>
        <p>{description}</p>
    </div>
          {/* <SMMModal isVisible={isModalOpen} onClose={handleCloseModal} /> */}
</div>
  );
};

export default ServiceCard;
