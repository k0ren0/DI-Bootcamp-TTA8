// src/components/Section.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Section = ({ title, content, image, reverse }) => {
  const textColOrder = reverse ? "order-md-last" : "";
  const imgColOrder = reverse ? "order-md-first" : "";

  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6} className={textColOrder}>
          <h2>{title}</h2>
          <p>{content}</p>
        </Col>
        <Col md={6} className={imgColOrder}>
          <div className="image-container">
            <img src={image} alt={title} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
