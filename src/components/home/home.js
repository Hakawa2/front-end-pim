import React from "react";
import { Col, Row } from "react-bootstrap";
// css
import "./home.css";

// img
import freelancer from "../../img/freelancer.png";
import total from "../../img/total.png";


const Home = () => (
  	<Row className="reverse-responsive">
		<Col xs={12} sm={12} md={4} lg={6}>
			<div className="home-container">
				<img src={total}/>
			</div>
		</Col>
		<Col xs={12} sm={12} md={4} lg={6}>
			<div className="home-image-container">
				<img src={freelancer} alt="Art vector created by stories - www.freepik.com" />
			</div>
		</Col>
	</Row>
);
export default Home;
