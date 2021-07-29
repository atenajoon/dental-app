import React from "react";
import Button from "./button";

const WelcomeSection = () => {
  return (
    <div className="welcome-sec-box">
      <h3>Who We Are?</h3>
      <p className="content-box welcome-sec-content">
        At Diamond Dental Clinic, you are our first priority. From the moment
        you walk in the door, we make it our mission to meet all your dental
        needs. We proudly serve patients in ten different languages with
        extended office hours in a convenient, central Vancouver location.
      </p>
      <Button className="btn--alt">{"Meet Our Team"}</Button>
    </div>
  );
};

export default WelcomeSection;
