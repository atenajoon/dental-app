import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ children, className = "" }) => {
  return (
    <div className="content-box service-card">
      <div className={`service-image service-image-${className}`}>
        <Link to="/services">{children}</Link>
        {console.log("class", className)}
      </div>
    </div>
  );
};

export default ServiceCard;
