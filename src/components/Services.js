import React, { useState } from "react";
import "../styles.css";
import ServiceCard from "./ServiceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  const servicesname = [
    {
      icon: <FontAwesomeIcon icon={["fas", "coins"]} />,
      title: "Blockchain Consulting",
      description: "We provide expert advice on blockchain technology.",
      path: "/services/blockchain",
    },
    {
      icon: <i className="fas fa-chart-line"></i>,
      title: "Market Analysis",
      description: "Get insights into cryptocurrency market trends.",
      path: "/services/market",
    },
    {
      icon: <i className="fas fa-wallet"></i>,
      title: "Wallet Security",
      description: "Protect your digital assets with our wallet solutions.",
    },
    {
      icon: <i className="fas fa-wallet"></i>,
      title: "Wallet Security",
      description: "Protect your digital assets with our wallet solutions.",
    },
  ];
  return (
    <div className="services-container-servicespage">
      <div>
        <div className="services-banner">
          <h1>OUR SERVICES </h1>
        </div>
      </div>
      <div>
        <section className="services-servicespage">
          {servicesname.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              path={service.path}
            />
          ))}
        </section>
      </div>
    </div>
  );
};
export default Services;
