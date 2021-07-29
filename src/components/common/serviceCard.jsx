import React from "react";

const ServiceCard = ({ children, className = "" }) => {
  return (
    <div className="content-box service-card">
      <div className={`service-image service-image-${className}`}>
        {children}
      </div>
    </div>
  );
};

export default ServiceCard;
