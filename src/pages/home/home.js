import React from "react";
import Body from "../../components/body/body";
import HomeComponent from "../../components/home/home";

const Home = () => {
	return (
		<>
			<Body children={<HomeComponent />} loading/>
		</>
	);
};

export default Home;
