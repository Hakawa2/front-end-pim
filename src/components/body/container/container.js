import React from "react";

//style
import "./container.css";

const Container = ({ children, home }) => {
	return <div className={ home ? "" : "main-container container" }>{children}</div>;
};

export default Container;
