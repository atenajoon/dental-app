import React from "react";
import Button from "./common/button";
// import myData from "../static/data";

const ContactBar = () => {
  return (
    <div className="contact-bar">
      {/* {console.log(myData)} */}
      {/* <Button>{firstButton}</Button> */}
      <Button>Call Us Now</Button>
      <span>OR</span>
      <Button className="btn--green">{"Request an Appointment"}</Button>
    </div>
  );
};

export default ContactBar;
