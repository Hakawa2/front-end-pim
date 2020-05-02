import React from "react";
import { Row, Col } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";

//utils

//style
import "./produtos.css";

const Produtos = ({ produtos, produtosEmpresas }) => {
	const produtosFreelancers = () => {
		return produtos.map((produto, index) => {
			return (
				<div className="produtos-card" key={index}>
					<div>
						<h1>{produto.name}</h1>
					</div>
					<div>
						<h2>{produto.desc}</h2>
					</div>
					<div>
						<h2>Preço: {produto.price}</h2>
					</div>
					<div>
						<a href="/">Comprar</a>
					</div>
				</div>
			);
		});
	};
	
	const produtosMockEmpresas = () => {
		return produtosEmpresas.map((produto, index) => {
			return (
				<div className="produtos-card" key={index}>
					<div>
						<h1>{produto.name}</h1>
					</div>
					<div>
						<h2>{produto.desc}</h2>
					</div>
					<div>
						<h2>Preço: {produto.price}</h2>
					</div>
					<div>
						<a href="/">Comprar</a>
					</div>
				</div>
			);
		});
	};

	const settings = {
		autoPlay: true,
		infiniteLoop: true,
		showArrows: false,
		showStatus: false,
		showThumbs: false,
		swipeable: true,
		interval: 5000
	};

	return( 
		<div className="produtos-container">
			<div className="container">
				<hr/>
				<h1>Conheça Nossos Planos</h1>
			</div>
			<Row>
				<Col xs={12} md={6} lg={6}>
					<h2>Freelancers</h2>
					<Carousel className="slider-container" {...settings}>
						{produtosFreelancers()}
					</Carousel>
				</Col>
				<Col xs={12} md={6} lg={6}>
					<h2>Empresas</h2>
					<div>
						<Carousel className="slider-container" {...settings}>
							{produtosMockEmpresas()}
						</Carousel>
					</div>
				</Col>
			</Row>
		</div>
	)
};

export default Produtos;
