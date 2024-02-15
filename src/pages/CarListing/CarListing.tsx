// @ts-nocheck
import { ChangeEvent } from "react";
import "./CarListing.css";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection/CommonSection";
import Cars from "../../components/UI/Cars/Cars";
import { useCarsContext } from "../../context/CarsProvider";
import { useCarsDispatch } from "../../context/CarsProvider";
import { CarsActionType } from "../../models/Car";

const CarListing: React.FC = () => {
  const { cars } = useCarsContext();
  const dispatch = useCarsDispatch();

  const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = event.target.value;

    if (selectedSort === "asc" || selectedSort === "desc") {
      dispatch({
        type: CarsActionType.SORT_CARS,
        payload: {
          cars,
          sorting: selectedSort,
        },
      });
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
                  <i className="ri-sort-asc"></i> Sort By Model Name
                </span>
                <select className="car__listing-select" onChange={handleSort}>
                  <option value="asc" selected>
                    A to Z
                  </option>
                  <option value="desc">Z to A</option>
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
