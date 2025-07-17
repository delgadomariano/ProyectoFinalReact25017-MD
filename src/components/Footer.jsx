import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css'; 

const Footer = () => {
  return (
   <footer className="footer-custom text-center py-4 mt-4">
  <Container>
    <Row>
      <Col md={6}>
        <p className="mb-0">Cosquillas en la Lengua</p>
        <p className="mb-0">© 2025 Todos los derechos reservados</p>
      </Col>
      <Col md={6}>
        <div>
          <a href="#" className="footer-icon me-3">
            <i className="fa fa-facebook fa-2x"></i>
          </a>
          <a href="#" className="footer-icon me-3">
            <i className="fa fa-twitter fa-2x"></i>
          </a>
          <a href="#" className="footer-icon">
            <i className="fa fa-instagram fa-2x"></i>
          </a>
        </div>
      </Col>
    </Row>
  </Container>
</footer>
  );
};

export default Footer;
