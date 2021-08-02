import React from "react";
import Button from "../common/Button";

const ContactBar = () => {
  return (
    <div className="contact-bar">
      <Button className="btn--green">{"Call Us Now"}</Button>
      <span>OR</span>
      <Button className="btn--yellow">{"Request an Appointment"}</Button>
    </div>
  );
};

export default ContactBar;
