import React, { useEffect, useState } from "react";
import Container from "./container/container";
//style
import "./body.css";

const Body = ({ children }) => {
  const [fakeLoading, setFakeLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFakeLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const open = () => {
    return (
      <div className="loading-container">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  };

  return (
    <>
      {fakeLoading ? (
        open()
      ) : (
        <div>
          <Container children={children} />
        </div>
      )}
    </>
  );
};

export default Body;
