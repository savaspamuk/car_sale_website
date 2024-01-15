import React from "react";
import "./FindCarForm.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form>
      <div className="form">
        <FormGroup className="form__group">
          <input type="text" placeholder="Make/Model" />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="automatic">Automatic</option>
            <option value="manuel">Manuel</option>
          </select>
        </FormGroup>
        <FormGroup className="form__group">
          <input type="text" placeholder="Year" />
        </FormGroup>
        <FormGroup className="form__group">
          <input type="number" placeholder="Budget (€)" />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
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
