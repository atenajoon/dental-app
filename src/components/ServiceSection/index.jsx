import React from "react";
import { Container, Row, Col } from "reactstrap";
import ServiceCard from "../ServiceCard";
import { serviceSecData } from "../../static/data";
import "../../scss/ServiceSection.scss";

const ServiceSection = () => {
  return (
    <Container>
      {/* <div className="d-flex flex-column flex-lg-row w-100 justify-content-between font-size-sm">
        <div className="">teset 1</div>
        <div>test 2</div>
      </div> */}
      <h2 className="d-flex justify-content-center">Our Services</h2>
      <Row>
        {serviceSecData.map(({ id, name, imgSrc }) => (
          <Col key={id} md={6} lg={4}>
            <ServiceCard
              serviceLink={`/Services`}
              // serviceLink={`/service/${id}`}
              name={name}
              imgSrc={imgSrc}
            ></ServiceCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceSection;
