import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "../common/Slider";

const TestimonialSection = () => {
  const handleGoogleClick = () => {
    console.log("handleGoogleClick");
  };
  return (
    <div id="testimonial-sec">
      <Container>
        <h2>What say our patients?</h2>
        <Row>
          <Col>
            <Slider onGoogleClick={handleGoogleClick} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TestimonialSection;
