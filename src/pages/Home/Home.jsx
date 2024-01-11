import React, { useState, useEffect } from "react";
import Helmet from "../../components/Helmet/Helmet";
import HeroSlider from "../../components/UI/HeroSlider/HeroSlider";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../../components/UI/FindCarForm/FindCarForm";
import AboutSection from "../../components/UI/AboutSection/AboutSection";
import AgencyList from "../../components/UI/AgencyList/AgencyList";
import CarItem from "../../components/UI/CarItem/CarItem";
import BlogList from "../../components/UI/BlogList/BlogList";

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function getCars() {
      try {
        const response = await fetch("https://freetestapi.com/api/v1/cars");
        const data = await response.json();
        setCars(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getCars();
  }, []);
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
      <AboutSection />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Centers</h2>
            </Col>
            <AgencyList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h6 className="section__subtitle">Come with</h6>
              <h4 className="section__title">Hot Offers</h4>
            </Col>
            <CarItem cars={cars} />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h6 className="section__subtitle">Read</h6>
              <h4 className="section__title">Our authors' reviews</h4>
            </Col>
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
