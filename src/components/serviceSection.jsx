import React from "react";
import ServiceCard from "./common/serviceCard";
import { serviceSecData } from "../static/data";

const ServiceSection = () => {
  return (
    <div className="service-sec-box">
      <div className=" service-sec-container">
        <h2>Our Services</h2>
        <div className="service-card-box">
          {serviceSecData.map((item) => (
            <ServiceCard key={item.id} serviceLink={`/service/${item.id}`}>
              {item.name}
            </ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};
// <Link href={serviceLink}></Link>

export default ServiceSection;
