import React from "react";
import Container from "./container/container";
//style
import "./body.css";

const Body = ({ children }) => {
  return (
    <div className="body-container">
      <div className="background-animation-left"></div>
      <div className="background-animation-right"></div>
      <div>
        <Container children={children} />
      </div>
    </div>
  );
};

export default Body;
