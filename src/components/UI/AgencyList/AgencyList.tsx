import React from "react";
import "./AgencyList.css";
import { Col } from "reactstrap";
import agencyData from "../../../assets/data/agencyData";

interface AgencyItem {
  title: string;
  address: string;
  desc: string;
  location: string;
  id: number;
}

interface AgencyItemProps {
  item: AgencyItem;
}

export const AgencyItem: React.FC<AgencyItemProps> = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <div className="service__item">
      <h4>{item.title}</h4>

      <h6>{item.address}</h6>
      <p className="section__description">{item.desc}</p>
      <a href={item.location} target="_blank" rel="noreferrer">
        <i className="ri-map-pin-range-fill"></i>
        Click to see on map
      </a>
    </div>
  </Col>
);

const AgencyList: React.FC = () => {
  return (
    <>
      {agencyData.map((item: AgencyItem) => (
        <AgencyItem item={item} key={item.id} />
      ))}
    </>
  );
};

export default AgencyList;
