import React from "react";
import "./Contact.css";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection/CommonSection";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row className="contact__from-row">
            <Col lg="4" md="4">
              <h6>Get In Touch</h6>
              <Form
                className="contact__form-container"
                action="mailto:abc@abc.com"
                method="post"
                encType="text/plain"
              >
                <FormGroup className="contact__form">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
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
                <div>
                  <div>
                    <h6>Contact Information</h6>
                    <p className="section__description">
                      <Link
                        to="https://www.google.com/maps/place/411+06+Nordstaden/@57.7069787,11.9276906,13z/data=!3m1!4b1!4m6!3m5!1s0x464ff36444097555:0xf5b54137131e1636!8m2!3d57.70694!4d11.96889!16s%2Fg%2F11rbh4kvsp?entry=ttu"
                        target="_blank"
                      >
                        <i className="ri-map-pin-2-fill"></i> 123, Göteborg,
                        Sweden
                      </Link>
                    </p>
                  </div>
                  <div>
                    <h6>Phone:</h6>
                    <p className="section__description">
                      <Link to="tel: +46 123 456 78 90">
                        <i className="ri-phone-fill"></i> +46 123 456 78 90
                      </Link>
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <h6>Email:</h6>
                    <p className="section__description">
                      <Link to="mailto: abc@abc.com">
                        <i className="ri-mail-fill"></i> abc@abc.com
                      </Link>
                    </p>
                  </div>
                  <h6>Follow Us</h6>
                  <div>
                    <p className="section__description">
                      <Link to="#" className="social__link-icon instagram">
                        <i className="ri-instagram-line"></i>
                      </Link>
                      <Link to="#" className="social__link-icon">
                        <i className="ri-twitter-x-line"></i>
                      </Link>
                    </p>
                  </div>
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
