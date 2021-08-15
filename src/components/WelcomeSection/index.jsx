import React from "react";
import { Container } from "reactstrap";
import Button from "../common/Button";

const WelcomeSection = () => {
  return (
    <Container>
      <div
        className="d-flex flex-column align-items-center p-3 p-lg-4"
        id="welcome-sec"
      >
        <h2>Who We Are?</h2>
        <p>
          At Diamond Dental Clinic, you are our first priority. From the moment
          you walk in the door, we make it our mission to meet all your dental
          needs. We proudly serve patients in ten different languages with
          extended office hours in a convenient, central Vancouver location.
        </p>
        <Button className="btn">{"Meet Our Team"}</Button>
      </div>
    </Container>
  );
};

export default WelcomeSection;
