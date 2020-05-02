import React from "react";

//style
import "./container.css";

const Container = ({ children, home }) => {
	return (
		<>
			<div className={ home ? "" : "main-container" }>
				{children}
			</div>
		</>);
};

export default Container;
