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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                obcaecati quaerat dolore, asperiores sit perferendis eveniet
                corrupti accusamus commodi aut.
              </p>
              <div className="about__section-item">
                <p className="section__description">
                  <i class="ri-checkbox-circle-line"></i>Ipsam obcaecati quaerat
                  dolore, asperiores sit perferendis eveniet corrupti accusamus
                  commodi aut.
                </p>
                <p className="section__description">
                  <i class="ri-checkbox-circle-line"></i>Ipsam obcaecati quaerat
                  dolore, asperiores sit perferendis eveniet corrupti accusamus
                  commodi aut.
                </p>
              </div>
              <div className="about__section-item">
                <p className="section__description">
                  <i class="ri-checkbox-circle-line"></i>Ipsam obcaecati quaerat
                  dolore, asperiores sit perferendis eveniet corrupti accusamus
                  commodi aut.
                </p>
                <p className="section__description">
                  <i class="ri-checkbox-circle-line"></i>Ipsam obcaecati quaerat
                  dolore, asperiores sit perferendis eveniet corrupti accusamus
                  commodi aut.
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
