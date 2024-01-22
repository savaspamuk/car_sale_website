import React, { useContext } from "react";
import "./CarDetails.css";
import Helmet from "../../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import CarForSale from "../../assets/images/car-for-sale.png";
import { GetListContext } from "../../context/getCarList";

const CarDetails = () => {
  const { cars, handleSort } = useContext(GetListContext);
  const { model } = useParams();

  const singleCarItem = cars.find((item) => item.carName === model);
  if (!singleCarItem) {
    return <div>No car found with the specified model.</div>;
  }
  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6" className="car__info-container">
              <div>
                <img src={CarForSale} alt="Car Sale" />
              </div>
              <div className="car__info">
                <h2>
                  {`${singleCarItem.year}-${singleCarItem.make} ${singleCarItem.model}`}
                </h2>
                <div className="car__info-price">
                  <i class="ri-price-tag-3-fill"></i>
                  <h6 className="sell__price">${singleCarItem.price}</h6>
                </div>
                <div className="car__info-details">
                  <span>
                    <i class="ri-palette-fill"></i> {singleCarItem.color}
                  </span>
                  <span>
                    <i class="ri-route-line"></i> {singleCarItem.mileage} km
                  </span>
                  <span>
                    <i class="ri-contrast-drop-2-fill"></i>
                    {singleCarItem.fuelType}
                  </span>
                  <span>
                    <i class="ri-settings-5-fill"></i>
                    {singleCarItem.transmission}
                  </span>
                  <span>
                    <i class="ri-artboard-2-fill"></i>
                    {singleCarItem.engine}
                  </span>
                  <span>
                    <i class="ri-dashboard-2-fill"></i>
                    {singleCarItem.horsepower} hp
                  </span>
                  <span>
                    <i class="ri-inbox-unarchive-fill"></i>
                    {singleCarItem.features}
                  </span>
                  <span>
                    <i class="ri-folder-user-fill"></i>
                    {singleCarItem.owners} (Ex-owner)
                  </span>
                </div>
                <button className="car__info-btn">Buy this car</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
