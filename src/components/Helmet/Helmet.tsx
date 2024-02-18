import React from "react";

type HelmetProps = {
  children: React.ReactNode;
  title: string;
};

const Helmet: React.FC<HelmetProps> = (props) => {
  return <div className="w-108">{props.children}</div>;
};

export default Helmet;
