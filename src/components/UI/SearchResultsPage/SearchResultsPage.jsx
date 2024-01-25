import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import "./SearchResultsPage.css";
import { Col } from "reactstrap";
import CarForSale from "../../../assets/images/car-for-sale.png";
import { GetListSearchContext } from "../../../context/ListProvider";

const SearchResultsPage = () => {
  const {
    makeModel,
    setMakeModel,
    transmission,
    setTransmission,
    year,
    setYear,
    budget,
    setBudget,
    fuelType,
    setFuelType,
    handleSubmit,
    searchResults,
  } = useContext(GetListSearchContext);
  return (
    <div className="search__results">
      <div className="search__items">
        {searchResults ? (
          searchResults.map((result, index) => (
            <Col key={index} lg="4" md="4" sm="6" className="mb-5">
              <div className="car__item">
                <div className="car__img">
                  <img src={CarForSale} alt="Car" />
                </div>
                <div className="car__item-content">
                  <h4 className="section__title">{`${result.year} ${result.make} ${result.model}`}</h4>
                  <h6 className="car__price">€{result.price}</h6>
                  <div className="car__item-info">
                    <span>
                      <i class="ri-palette-line"></i>
                      {` ${result.color}`}
                    </span>
                    <span>
                      <i className="ri-map-pin-range-line"></i>
                      {` ${result.mileage} km`}
                    </span>
                    <span>
                      <i className="ri-gas-station-line"></i>
                      {` ${result.fuelType}`}
                    </span>
                    <span>
                      <i className="ri-settings-2-line"></i>
                      {` ${result.transmission}`}
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
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
