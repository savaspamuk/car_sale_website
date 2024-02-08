import React, { useState, useEffect } from "react";
import Helmet from "../../components/Helmet/Helmet";
import HeroSlider from "../../components/UI/HeroSlider/HeroSlider";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../../components/UI/FindCarForm/FindCarForm";
import AboutSection from "../../components/UI/AboutSection/AboutSection";
import AgencyList from "../../components/UI/AgencyList/AgencyList";
import Cars from "../../components/UI/Cars/Cars";
import BlogList from "../../components/UI/BlogList/BlogList";

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function getCars() {
      try {
        const response = await fetch("https://freetestapi.com/api/v1/cars");
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getCars();
  }, []);

  const displayCars = cars.slice(0, 6);
  return (
    <Helmet title="Home">
      <section className="p-0 hero__slider-section">
        <HeroSlider />
        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="12" md="12">
                <div className="find__cars-top">
                  <h2>Find your car here!</h2>
                </div>
              </Col>

              <Col lg="12" md="12" sm="12">
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
              <h6 className="section__subtitle" id="sale_centers">
                Sale Centers
              </h6>
              <h2 className="section__title">Our popular sales centers</h2>
            </Col>
            <AgencyList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h6 className="section__subtitle">Car List</h6>
              <h4 className="section__title">
                Check out the vehicles on our list
              </h4>
            </Col>
            <Cars cars={displayCars} />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h6 className="section__subtitle">Read Our Blogs</h6>
              <h4 className="section__title">News from the car world</h4>
            </Col>
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
