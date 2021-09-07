import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const ContactBar = ({ contactLink }) => {
  return (
    <div className="contact-bar d-flex flex-column flex-lg-row justify-content-center">
      <Button className="btn btn--green">
        <a href="tel:+1-555-555-1212">{"Call Us Now"}</a>
      </Button>
      <span> OR</span>
      <Link className="btn btn--yellow" to={contactLink}>
        Request an Appointment
      </Link>
    </div>
  );
};

export default ContactBar;
