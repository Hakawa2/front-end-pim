import React from "react";

//style
import "./container.css";

const Container = ({ children }) => {
  return <div className="main-container container">{children}</div>;
};

export default Container;
