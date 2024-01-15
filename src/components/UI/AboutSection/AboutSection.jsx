import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./AboutSection.css";
import AboutImage from "../../../assets/images/about-img.png";

const AboutSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car buy service</h2>
              <p className="section__description">
                Our narrative revolves around its commitment to revolutionizing
                the online car purchasing experience. With an existing
                experience, we aids individuals in finding their ideal new car,
                comparing offers, and making direct purchases from reliable
                dealers.
              </p>
              <div className="about__section-item">
                <p className="section__description">
                  <i class="ri-checkbox-circle-line"></i> The introduction of
                  the "Buy your car here" feature enables users to compare
                  offers for purchasing new cars.
                </p>
                <p className="section__description">
                  <i class="ri-checkbox-circle-line"></i> Benefiting from
                  extensive brand outreach, our online editorial content
                  encompasses impartial reviews, the latest updates in car
                  purchasing, comprehensive advice, and a plethora of
                  interactive tools.
                </p>
              </div>
              <div className="about__section-item">
                <p className="section__description">
                  <i class="ri-checkbox-circle-line"></i> Structured to assist
                  the automotive industry in adapting to the online landscape,
                  we provides a range of data-driven tools and services. These
                  include lead generation, stock sourcing, brand enhancement,
                  e-commerce training, as well as marketing and advertising.
                </p>
                <p className="section__description">
                  <i class="ri-checkbox-circle-line"></i> Headquartered in
                  Göteborg, We maintain a workforce of over 100 individuals
                  across Göteborg and Stockholm. It enjoys support from
                  distinguished investors in technology, marketplaces, and the
                  automotive sector.
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={AboutImage} alt="About" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
