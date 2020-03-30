import React from "react";
import { Col, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
// css
import "./home.css";

// img
import freelancer from "../../img/freelancer.png";
import total from "../../img/total.png";


const Home = () => {
	const mobile = useMediaQuery({ query: "(max-device-width: 840px)" })


  	return(
	  	<Row>
			<Col xs={12} sm={12} md={6} lg={6} className="no-padding">
				<div className="first-container">
					<img src={total}/>
				</div>
			</Col>
			{!mobile && 
			<Col xs={12} sm={12} md={6} lg={6}>
				<div className="home-image-container">
					<img src={freelancer} alt="Art vector created by stories - www.freepik.com" />
				</div>
			</Col>}
		</Row>
	)
}
export default Home;
