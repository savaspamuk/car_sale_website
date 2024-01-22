import React, { useContext, useEffect } from "react";
import "./CarListing.css";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection/CommonSection";
import Cars from "../../components/UI/Cars/Cars";
import { GetListContext } from "../../context/getCarList";

const CarListing = () => {
  const { cars, handleSort, getCars } = useContext(GetListContext);

  useEffect(() => {
    getCars();
  }, []);

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
