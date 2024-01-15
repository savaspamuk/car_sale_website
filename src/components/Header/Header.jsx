import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import LeftLogo from "../../assets/images/left-logo.png";
import "./Header.css";

const navLinks = [
  { path: "/", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/cars", display: "Cars" },
  { path: "/blogs", display: "Blogs" },
  { path: "/contact", display: "Contact" },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  return (
    <header className="header">
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i>
                  +46-123-456-78-90
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <a href="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Login
                </a>

                <a href="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Register
                </a>
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
                  <a href="/">
                    <img src={LeftLogo} alt="Left-Logo" />
                    <div>
                      <span> Buy</span>
                      <span> A Car</span>
                    </div>
                  </a>
                </h1>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header__location">
                <span>
                  <i class="ri-road-map-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Göteborg</h4>
                  <h6>Vastra Götaland</h6>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header__location">
                <span>
                  <i class="ri-time-line"></i>
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
                  <i class="ri-phone-line"></i>
                </span>
                <button className="header__btn btn">
                  <a href="/contact">CALL US NOW</a>
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
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <a href={item.path} className="nav__item" key={index}>
                    {item.display}
                  </a>
                ))}
              </div>
            </div>
            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
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
