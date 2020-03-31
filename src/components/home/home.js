import React from "react";
import { Col, Row } from "react-bootstrap";
import Particles from "../UI/particles"

// css
import "./home.css";


const Home = () => {

  	return(
	  	<Row className="no-padding max-width">
			<Col xs={12} sm={12} md={12} lg={12} className="no-padding">
				<div className="text-home-container">
					<Particles/>
					<div style={{ position: "absolute" }}>
						<h2>Bem vindos a </h2>
						<h1>For freelancers</h1>
						<h3>Feito pela comunidade para a comunidade</h3>
						<h4>Role a página e conheça mais de nossa história, e venha fazer parte dessa incrível família</h4>
					</div>
				</div>
			</Col>
		</Row>
	)
}
export default Home;
