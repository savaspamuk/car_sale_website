import React from "react";
import Helmet from "../../components/Helmet/Helmet";
import HeroSlider from "../../components/UI/HeroSlider/HeroSlider";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../../components/UI/FindCarForm/FindCarForm";

const Home = () => {
  return (
    <Helmet title="Home">
      <section className="p-0 hero__slider-section">
        <HeroSlider />
        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your car here!</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </Helmet>
  );
};

export default Home;
