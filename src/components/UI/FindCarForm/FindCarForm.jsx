import React from "react";
import { useNavigate } from "react-router-dom";
import "./FindCarForm.css";
import { Form, FormGroup } from "reactstrap";
import { useCarsContext, useCarsDispatch } from "../../../context/CarsProvider";

const FindCarForm = () => {
  const navigate = useNavigate();
  const { makeModel, handleSearch } = useCarsContext();
  const setMakeModel = useCarsDispatch();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSearch(makeModel);
    navigate("/results");
  };

  console.log(makeModel);

  return (
    <Form onSubmit={handleFormSubmit}>
      <div className="form">
        <div className="form__description">
          <h6>Which model are you looking for?</h6>
          <div className="form__description explanation">
            <span className="section__description">*For example "Corolla"</span>
            <i className="ri-search-line"></i>
            <i className="ri-roadster-fill"></i>
          </div>
        </div>
        <div>
          <FormGroup className="form__group">
            <input
              type="text"
              placeholder="Enter a car model to search"
              value={makeModel}
              onChange={(e) => setMakeModel(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="form__group">
            <button type="submit" className="btn find__car-btn">
              Find Car
            </button>
          </FormGroup>
        </div>
      </div>
    </Form>
  );
};

export default FindCarForm;
