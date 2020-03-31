import React, { useEffect, useState } from "react";
import Container from "./container/container";
//style
import "./body.css";

const Body = ({ children, loading, home }) => {
	const [fakeLoading, setFakeLoading] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			setFakeLoading(false);
		}, 2000);
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
			{fakeLoading && loading ? (
				open()
			) : !fakeLoading && (
				<div>
					<Container home={home} children={children} />
				</div>
			)}
		</>
	);
};

export default Body;
