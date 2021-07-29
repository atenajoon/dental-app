import React from "react";
import ServiceCard from "../ServiceCard";
import { serviceSecData } from "../../static/data";

const ServiceSection = () => {
  return (
    <div className="service-sec-box">
      <div className=" service-sec-container">
        <h2>Our Services</h2>
        <div className="service-card-box">
          {serviceSecData.map(({ id, name }) => (
            <ServiceCard key={id} serviceLink={`/service/${id}`}>
              {name}
            </ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};
// <Link href={serviceLink}></Link>

export default ServiceSection;
