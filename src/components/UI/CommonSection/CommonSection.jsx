import React from "react";
import "./CommonSection.css";
import { Container } from "reactstrap";

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container className="text-center">
        <h1 className="text-light">{title}</h1>
      </Container>
    </section>
  );
};

export default CommonSection;
