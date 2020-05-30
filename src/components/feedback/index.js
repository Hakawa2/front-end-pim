import React from "react";
import { Row, Col } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import { relatos } from "../../mocks/clientes";

//css
import "./index.css";

//imgs
import jovemF from "../../img/jovem_f.png";
import senhor from "../../img/senhor.png";
import senhora from "../../img/senhora.png";
import jovem from "../../img/jovem_m.png";

const FeedbackArea = () => {
	
	
	const userImage = (sexo, idade) => {
		switch(sexo) {
			case("M"):
				if(idade < 30)
					return jovem
				else
					return senhor
			case("F"):
				if(idade < 30)
					return jovemF
				else
					return senhora
		}
	}


	const userSlides = () => {
		return relatos.map((user, index) => {
			return(
				<div className="user-feedback-container" key={index}>
					<div className="icon">
						<img src={userImage(user.sexo, user.idade)}/>
					</div>
					<div>
						<h1>{`${user.nome}, ${user.idade}`}</h1>
						<h2>{user.mensagem}</h2>
					</div>
				</div>
			)
		})
	}

	const settings = {
		autoPlay: true,
		infiniteLoop: true,
		showArrows: true,
		showStatus: false,
		showThumbs: false,
		swipeable: true,
		interval: 5000
	};


	return(
		<>
			<div className="center container">
				<hr/>
				<h1>Relatos de Nossos Clientes</h1>
			</div>
			<Row>
				<Col xs={12} sm={12} md={12} lg={12} className="no-padding">
					<Carousel className="user-feedback" {...settings}>
						{userSlides()}
					</Carousel>
				</Col>
			</Row>
		</>
	)
}

export default FeedbackArea