import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header__top">
      <Container>
        <Col lg="6" md="6" sm="6">
          <div className="header__top__left">
            <span>Need Help?</span>
            <span className="header__top__help">
              <i class="ri-phone-fill"></i>+46-123-456-78-90
            </span>
          </div>
        </Col>

        <Col lg="6" md="6" sm="6">
          <div className="header__top__right">
            <Link to="/#">
              <i class="ri-login-circle-line"></i> Login
            </Link>
            <Link to="/#">
              <i class="ri-user-line"></i> Register
            </Link>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Header;
