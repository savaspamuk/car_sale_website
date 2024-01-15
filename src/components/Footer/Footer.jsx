import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./Footer.css";
import FooterLogo from "../../assets/images/footer-logo.png";

const quickLinks = [
  { path: "/about", display: "About" },
  { path: "/cars", display: "Cars" },
  { path: "/blog-details", display: "Blog" },
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
                <a href="/">
                  <img src={FooterLogo} alt="Left-Logo" />
                  <div>
                    <span>Buy ↴</span>
                    <span>_A Car</span>
                  </div>
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
              <p className="office__info">
                <a href="https://www.google.com/maps/place/411+06+Nordstaden/@57.7069787,11.9276906,13z/data=!3m1!4b1!4m6!3m5!1s0x464ff36444097555:0xf5b54137131e1636!8m2!3d57.70694!4d11.96889!16s%2Fg%2F11rbh4kvsp?entry=ttu">
                  <i class="ri-map-pin-2-fill"></i> 123, Göteborg, Sweden
                </a>
              </p>
              <p className="office__info">
                <a href="tel: +46 123 456 78 90">
                  <i class="ri-phone-fill"></i> +46 123 456 78 90
                </a>
              </p>
              <p className="office__info">
                <a href="mailto: abc@abc.com">
                  <i class="ri-mail-fill"></i> abc@abc.com
                </a>
              </p>
              <p className="office__info">Follow Us</p>
              <p className="office__info">
                <a href="#" className="social__link-icon instagram">
                  <i class="ri-instagram-line"></i>
                </a>
                <a href="#" className="social__link-icon">
                  <i class="ri-twitter-x-line"></i>
                </a>
              </p>
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
