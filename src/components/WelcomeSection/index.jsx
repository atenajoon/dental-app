import React from "react";
import Button from "../common/Button";

const WelcomeSection = () => {
  return (
    <div className="welcome-sec-box">
      <h2>Who We Are?</h2>
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
