import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-1 mt-5">
      <Container>
        <Row>
          <Col className="text-center">
            <h6>Connect with me</h6>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-light mx-2 social-icon">
              <FaLinkedin size="1.25em" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-light mx-2 social-icon">
              <FaGithub size="1.25em" />
            </a>
            <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2 social-icon">
              <FaEnvelope size="1.25em" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-light mx-2 social-icon">
              <FaTwitter size="1.25em" />
            </a>
            <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-light mx-2 social-icon">
              <FaFacebook size="1.25em" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-2">
            <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
