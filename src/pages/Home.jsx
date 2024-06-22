import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import './home.css'; // Create a CSS file for custom styles

const Home = () => {
  return (
    <div className="hero-section">
      <Container className="text-center text-light">
        <Row className="justify-content-center align-items-center vh-100">
          <Col md={8}>
            <h1>Let me help</h1>
            <p>I'd love to help you with your web presence and all other Tech related needs </p>
            <Button variant="light">Get Started</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
