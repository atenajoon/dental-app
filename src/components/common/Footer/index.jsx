import React from "react";
import { Container, Row, Col } from "reactstrap";
import Address from "../../Address";
import WorkingHours from "../../WorkingHours";
import Button from "../Button";

const Footer = () => {
  return (
    <div id="footer-sec" className=" p-3 p-lg-4">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} md={6} lg={4}>
            <Address />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <WorkingHours />
          </Col>
          <Col className=" p-3 p-lg-4" sm={12} md={12} lg={4}>
            <div className="d-flex flex-column  justify-content-center">
              <Button className="btn--green">{"Call Now"}</Button>
              <Button className="btn--yellow">
                {"Request an Appointment"}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
