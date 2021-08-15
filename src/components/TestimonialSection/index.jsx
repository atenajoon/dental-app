import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "../common/Slider";

const TestimonialSection = () => {
  return (
    <div id="testimonial-sec">
      <Container>
        <h2>What say our patients?</h2>
        <Row>
          <Col>
            <Slider />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TestimonialSection;
