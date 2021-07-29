import React from "react";
import Address from "../addressBox";
import WorkingHours from "../workingHoursBox";

const Footer = () => {
  return (
    <div className="footer-container">
      <h2>Footer</h2>
      <div className="footer-content">
        <Address />
        <WorkingHours />
      </div>
    </div>
  );
};

export default Footer;
