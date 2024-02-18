import React from "react";
import CommonSection from "../../components/UI/CommonSection/CommonSection";
import Helmet from "../../components/Helmet/Helmet";
import AboutSection from "../../components/UI/AboutSection/AboutSection";

const About: React.FC = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About" />
      <AboutSection />
    </Helmet>
  );
};

export default About;
