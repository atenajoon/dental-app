import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Address from "../../Address";
import WorkingHours from "../../WorkingHours";
import Button from "../Button";

const Footer = forwardRef(({ contactLink, myFooterRef }) => {
  // forwardRef() ref forwards child's ref to the parent
  // Using forwardRef in React gives the child component a reference
  // to a DOM element created by its parent component.
  // This then allows the child to read and modify that element anywhere it is being used.
  console.log("myFooterRef", myFooterRef);
  return (
    // ref is a built-in attribute
    <div ref={myFooterRef} id="footer-sec" className=" p-3 p-lg-4">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} md={6} lg={4}>
            <Address contactLink={contactLink} />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <WorkingHours />
          </Col>
          <Col className=" p-3 p-lg-4" sm={12} md={12} lg={4}>
            <div className="d-flex flex-column  justify-content-center">
              <Button className="btn btn--green">
                <a href="tel:+1-555-555-1212">{"Call Us Now"}</a>
              </Button>

              <Link className="btn btn--yellow" to={contactLink}>
                Request an Appointment
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default Footer;
