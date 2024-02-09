import React from "react";
import "./CommonSection.css";
import { Container } from "reactstrap";

interface CommonSectionProps {
  title: string;
}

const CommonSection: React.FC<CommonSectionProps> = ({ title }) => {
  return (
    <section className="common__section">
      <Container>
        <h1 className="text-light">{title}</h1>
      </Container>
    </section>
  );
};

export default CommonSection;
