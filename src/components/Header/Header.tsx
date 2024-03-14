import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import HeaderLogo from "../../assets/images/header-logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

interface NavLink {
  path: string;
  display: string;
}

const navLinks: NavLink[] = [
  { path: "/", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/cars", display: "Cars" },
  { path: "/blogs", display: "Blogs" },
  { path: "/contact", display: "Contact" },
];

const Header: React.FC = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => menuRef.current?.classList.toggle("menu__active");
  return (
    <header className="header">
      <div className="header__top">
        <Container>
          <Row>
            <Col>
              <div className="header__slogan">
                <span>Do you want to buy a car?</span>
                <span>You are in the right place!</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header__middle">
        <Container>
          <Row className="header__middle-items">
            <Col lg="3" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/">
                    <img src={HeaderLogo} alt="Left-Logo" />
                    <div>
                      <span>Buy ↴</span>
                      <span>_A Car</span>
                    </div>
                  </Link>
                </h1>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header__location">
                <span>
                  <i className="ri-road-map-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Göteborg</h4>
                  <h6>Västra Götaland</h6>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header__location">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Monday to Friday</h4>
                  <h6>10:00 - 17:00</h6>
                </div>
              </div>
            </Col>
            <Col lg="2" md="3" sm="0">
              <div className="header__location">
                <span>
                  <i className="ri-customer-service-2-line"></i>
                </span>
                <button className="header__btn btn" data-testid="call-button">
                  <Link to="tel: +46 123 456 78 90">CALL US NOW</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div
              className="navigation"
              data-testid="navigation"
              ref={menuRef}
              onClick={toggleMenu}
            >
              <div className="menu">
                {navLinks.map((item, index) => (
                  <Link
                    to={item.path}
                    className="nav__item"
                    key={index}
                    data-testid="nav-link"
                  >
                    {item.display}
                  </Link>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="nav__right__register">
                <Link to="/login">
                  <i className="ri-login-circle-line"></i> Login
                </Link>

                <Link to="register">
                  <i className="ri-user-line"></i> Register
                </Link>
              </div>
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search"
                  data-testid="search-input"
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
