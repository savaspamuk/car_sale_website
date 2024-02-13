import React, { ChangeEvent, Dispatch, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FindCarForm.css";
import { Form, FormGroup } from "reactstrap";
import { useCarsDispatch } from "../../../context/CarsProvider";
import { CarsAction, CarsActionType } from "../../../models/Car";

const FindCarForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useCarsDispatch() as Dispatch<CarsAction>;
  const [makeModel, setMakeModel] = useState<string>('');

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const cleansedMakeModel = makeModel.trim().toLowerCase();
    try {
      const response = await fetch(
        `https://freetestapi.com/api/v1/cars?search=${cleansedMakeModel}`
      );
      const data = await response.json();
      if (data) {
        dispatch({ type: CarsActionType.SET_SEARCH_RESULT, payload: data });
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
    navigate("/results");
  };

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
              onChange={(e: ChangeEvent<HTMLInputElement>) => setMakeModel(e.target.value)}
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
