import React from "react";
import Button from "../common/Button";

const ContactBar = () => {
  return (
    <div className="contact-bar">
      <Button>{"Call Us Now"}</Button>
      <span>OR</span>
      <Button className="btn--green">{"Request an Appointment"}</Button>
    </div>
  );
};

export default ContactBar;
