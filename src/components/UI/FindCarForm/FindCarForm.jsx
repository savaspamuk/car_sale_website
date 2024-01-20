import React, { useState } from "react";
import "./FindCarForm.css";
import { Form, FormGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";

const FindCarForm = () => {
  const [makeModel, setMakeModel] = useState("");
  const [transmission, setTransmission] = useState("automatic");
  const [year, setYear] = useState("");
  const [budget, setBudget] = useState("");
  const [fuelType, setFuelType] = useState("gasoline");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://freetestapi.com/api/v1/cars?search=${makeModel}`
    );
    const data = await response.json();

    console.log(data);

    setSearchResults(data);
    navigate("/results", { state: { results: data } });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="form">
        <FormGroup className="form__group">
          <input
            type="text"
            placeholder="Make/Model"
            value={makeModel}
            onChange={(e) => setMakeModel(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
          >
            <option value="automatic">Automatic</option>
            <option value="manuel">Manuel</option>
          </select>
        </FormGroup>
        <FormGroup className="form__group">
          <input
            type="number"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="form__group">
          <input
            type="number"
            placeholder="Budget (€)"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
          >
            <option value="gasoline">Gasoline</option>
            <option value="electric">Electric</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button type="submit" className="btn find__car-btn">
            Find Car
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
