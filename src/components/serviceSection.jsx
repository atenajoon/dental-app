import React from "react";
import ServiceCard from "./common/serviceCard";

const ServiceSection = () => {
  return (
    <div className="service-sec-box">
      <div className=" service-sec-container">
        <h2>Our Services</h2>
        <div className="service-card-box">
          <ServiceCard className="1">{"Service - 1"}</ServiceCard>
          <ServiceCard className="2">{"Service - 2"}</ServiceCard>
          <ServiceCard className="3">{"Service - 3"}</ServiceCard>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
