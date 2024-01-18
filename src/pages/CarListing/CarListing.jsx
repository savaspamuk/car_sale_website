import React, { useState, useEffect } from "react";
import "./CarListing.css";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection/CommonSection";
import Cars from "../../components/UI/Cars/Cars";

const CarListing = () => {
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

  const handleSort = async (event) => {
    const selectedSort = event.target.value;
    try {
      const response = await fetch(
        `https://freetestapi.com/api/v1/cars?sort=name&order=${selectedSort}`
      );
      const data = await response.json();
      setCars(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching sorted data:", error);
    }
  };
  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="car__listing-sort">
                <span>
                  <i class="ri-sort-asc"></i> Sort By Model Name
                </span>
                <select className="car__listing-select" onChange={handleSort}>
                  <option>Select</option>
                  <option value="asc">A to Z</option>
                  <option value="des">Z to A</option>
                </select>
              </div>
            </Col>
            <Cars cars={cars} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
