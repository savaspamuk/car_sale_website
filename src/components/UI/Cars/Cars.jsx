import React from "react";
import { Col } from "reactstrap";
import "./Cars.css";
import CarForSale from "../../../assets/images/car-for-sale.png";

const Cars = ({ cars }) => {
  return (
    <>
      {cars.map((car, index) => (
        <Col key={index} lg="4" md="4" sm="6" className="mb-5">
          <div className="car__item">
            <div className="car__img">
              <img src={CarForSale} alt="Car" />
            </div>
            <div className="car__item-content">
              <h4 className="section__title">{`${car.year} ${car.make} ${car.model}`}</h4>
              <h6 className="car__price">€{car.price}</h6>
              <div className="car__item-info">
                <span>
                  <i class="ri-palette-line"></i>
                  {` ${car.color}`}
                </span>
                <span>
                  <i className="ri-map-pin-range-line"></i>
                  {` ${car.mileage} km`}
                </span>
                <span>
                  <i className="ri-gas-station-line"></i>
                  {` ${car.fuelType}`}
                </span>
                <span>
                  <i className="ri-settings-2-line"></i>
                  {` ${car.transmission}`}
                </span>
              </div>
              <div className="car__item-btn-box">
                <button className="car__item-btn">See details</button>
                <button className="car__item-btn car__btn-details">
                  Buy this car
                </button>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </>
  );
};

export default Cars;
