import React from "react";
import Button from "../common/Button";

const ContactBar = () => {
  return (
    <div className="contact-bar d-flex flex-column flex-lg-row justify-content-center">
      <Button className="mx-5 btn--green">{"Call Us Now"}</Button>
      <span> OR</span>
      <Button className="mx-5 btn--yellow">{"Request an Appointment"}</Button>
    </div>
  );
};

export default ContactBar;
