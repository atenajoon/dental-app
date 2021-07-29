import React from "react";
import Address from "../Address";
import WorkingHours from "../WorkingHours";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="footer-container">
      <Address />
      <WorkingHours />
      <div className="content-box footer-contact-box">
        <Button>{"Call Now"}</Button>
        <Button className="btn--green">{"Request an Appointment"}</Button>
      </div>
    </div>
  );
};

export default Footer;
