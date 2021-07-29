import React from "react";
import Address from "../addressBox";
import WorkingHours from "../workingHoursBox";
import Button from "./button";

const Footer = () => {
  return (
    <div className="footer-container">
      <Address />
      <WorkingHours />
      <div className="content-box footer-contact-box">
        <Button className="sm">{"Call Now"}</Button>
        <Button className="btn--green">{"Request an Appointment"}</Button>
      </div>
    </div>
  );
};

export default Footer;
