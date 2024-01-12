import React from "react";
import "./Contact.css";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection/CommonSection";

const socialMediaLinks = [
  { url: "#", icon: "" },
  { url: "#", icon: "" },
  { url: "#", icon: "" },
  { url: "#", icon: "" },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row className="contact__from-row">
            <Col lg="4" md="4">
              <h6>Get In Touch</h6>
              <Form className="contact__form-container">
                <FormGroup className="contact__form">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    type="text"
                    placeholder="Enter your message"
                    className="text-area"
                  />
                </FormGroup>
                <button type="submit" className="contact__btn">
                  Send Your Message
                </button>
              </Form>
            </Col>
            <Col lg="5" md="5">
              <div className="contact__info">
                <h6>Contact Information</h6>
                <p className="section__description">123, Göteborg, Sweden</p>
                <div>
                  <h6>Phone:</h6>
                  <p className="section__description">+46 123 456 78 90</p>
                </div>
                <div>
                  <h6>Email:</h6>
                  <p className="section__description">abc@abc.com</p>
                </div>
                <h6>Follow Us</h6>
                <div>
                  <a href="#" className="social__link-icon">
                    <i class="ri-instagram-line"></i>
                  </a>
                  <a href="#" className="social__link-icon">
                    <i class="ri-twitter-x-line"></i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
