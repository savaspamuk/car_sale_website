import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./Footer.css";

const quickLinks = [
  { path: "/about", display: "About" },
  { path: "/cars", display: "Cars" },
  { path: "/blog", display: "Blog" },
  { path: "/contact", display: "Contact" },
  { path: "#", display: "Privacy Policy" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <a href="/home">
                  <i class="ri-car-line"></i>
                  <span> Buy A Car</span>
                </a>
              </h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              laboriosam repellat necessitatibus dignissimos dolores sequi
              numquam ipsum itaque deserunt expedita!
            </p>
          </Col>
          <Col lg="2" md="3" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <a href={item.path}>{item.display}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">123 Göteborg, SWEDEN</p>
              <p className="office__info">Phone: +46-123-456-78-90 </p>
              <p className="office__info">E-mail: abc@abc.com</p>
              <p className="office__info">Monday to Friday</p>
              <p className="office__info">10:00 - 17:00</p>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our Newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
