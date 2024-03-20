import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./Footer.css";
import FooterLogo from "../../assets/images/footer-logo.png";
import { Link } from "react-router-dom";
import officeInfos from "../../assets/data/officeInfo";
import { TextField } from "@mui/material";

interface QuickLink {
  path: string;
  display: string;
}

interface OfficeInfo {
  href: string;
  text: string;
  icon: string;
}

const quickLinks: QuickLink[] = [
  { path: "/about", display: "About" },
  { path: "/cars", display: "Cars" },
  { path: "/blog-details", display: "Blog" },
  { path: "/contact", display: "Contact" },
  { path: "#", display: "Privacy Policy" },
];

const OfficeInfo: React.FC<OfficeInfo> = ({ href, text, icon }) => (
  <Link to={href} className="office__info" data-testid="office-info">
    <i className={icon}></i> {text}
  </Link>
);

const Footer: React.FC = () => {
  const [isValidEmail, setIsValidEmail] = React.useState(true);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    const isValid = /\S+@\S+\.\S+/.test(email);

    setIsValidEmail(isValid);
  };
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/">
                  <img
                    src={FooterLogo}
                    alt="Logo of Car Buy Service"
                    data-testid="bottom-logo"
                  />
                  <div>
                    <span>Buy ↴</span>
                    <span>_A Car</span>
                  </div>
                </Link>
              </h1>
            </div>
            <div className="footer__logo-content">
              Our story centers on a dedication to transforming the online car
              buying process. Trust us and try it...
            </div>
          </Col>
          <Col lg="2" md="3" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              {officeInfos.map((info: OfficeInfo, index: number) => (
                <OfficeInfo key={index} {...info} />
              ))}

              <hr />
              <div className="office__info" data-testid="office-info">
                Follow Us
              </div>
              <Link to="#" className="social__link-icon">
                <i className="ri-instagram-line"></i>
              </Link>
              <Link to="#" className="social__link-icon">
                <i className="ri-twitter-x-line"></i>
              </Link>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our Newsletter</p>
              <TextField
                id="standard-basic"
                label="Enter your e-mail!"
                variant="filled"
                helperText={isValidEmail ? " " : "*Please enter a valid e-mail"}
                onChange={handleEmailChange}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;