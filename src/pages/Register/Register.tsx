import React from "react";
import CommonSection from "../../components/UI/CommonSection/CommonSection";
import Helmet from "../../components/Helmet/Helmet";
import AboutSection from "../../components/UI/RegisterPage/RegisterPage";

const Register: React.FC = () => {
  return (
    <Helmet title="Register">
      <CommonSection title="Register" />
      <AboutSection />
    </Helmet>
  );
};

export default Register;
