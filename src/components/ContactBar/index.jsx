import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const ContactBar = ({ onCall, contactLink }) => {
  return (
    <div className="contact-bar d-flex flex-column flex-lg-row justify-content-center">
      <Button onClick={onCall} className="mx-5 btn--green">
        {"Call Us Now"}
      </Button>
      <span> OR</span>
      <Link className="btn btn--yellow" to={contactLink}>
        Request an Appointment
      </Link>
    </div>
  );
};

export default ContactBar;
