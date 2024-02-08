import React from "react";
import "./AgencyList.css";
import { Col } from "reactstrap";
import agencyData from "../../../assets/data/agencyData";

const AgencyItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <div className="service__item">
      <span>
        <h4>{item.title}</h4>
      </span>

      <h6>{item.address}</h6>
      <p className="section__description">{item.desc}</p>
      <a href={item.location} target="_blank">
        <i className="ri-map-pin-range-fill"></i>
        <span>Click to see on map</span>
      </a>
    </div>
  </Col>
);

const AgencyList = () => {
  return (
    <>
      {agencyData.map((item) => (
        <AgencyItem item={item} key={item.id} />
      ))}
    </>
  );
};

export default AgencyList;
