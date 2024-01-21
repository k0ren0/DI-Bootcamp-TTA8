// src/components/Contact.js
import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={4}> {/* This will take up 4 of 12 columns in medium to large screens, roughly 33.3%, which is close to 30%. */}
          <h2 className="text-center mb-4">Get in Touch</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" className="mb-3" />
              <Form.Text className="text-muted mb-3">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Control as="textarea" rows={3} placeholder="Your message" className="mb-3" />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" size="lg">
                Send Message
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
