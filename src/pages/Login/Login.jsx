import React from "react";
import CommonSection from "../../components/UI/CommonSection/CommonSection";
import Helmet from "../../components/Helmet/Helmet";
import AboutSection from "../../components/UI/LoginPage/LoginPage";

const Login = () => {
  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <AboutSection />
    </Helmet>
  );
};

export default Login;
