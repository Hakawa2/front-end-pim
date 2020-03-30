import React from "react";
import { Col, Row } from "react-bootstrap";
// css
import "./home.css";

// img
import freelancer from "../../img/freelancer.png";


const Home = () => (
  	<Row className="reverse-responsive">
		<Col xs={12} sm={12} md={4} lg={6}>
			<div className="home-container">
				<h2>Welcome To </h2>
				<h1>For Freelancers</h1>
				<span>
					<h3>Feito pela comunidade, para a comunidade.</h3>
					<h4>Role a página para conhecer nossa história</h4>
				</span>
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
