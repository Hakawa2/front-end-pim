import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { useMediaQuery } from "react-responsive"

//utils
import * as tiposPlanos from "../../utils/tipoPlanos";

//style
import "./produtos.css";

//img
import junior from "../../img/junior.png";
import pleno from "../../img/pleno.png";
import senior from "../../img/senior.png";


const DataFreelancer = ({ id, type, name, desc, price, icon }) => {
	return (
		<div className="produtos-card" key={id}>
			<div>
				<img src={icon(type)} alt={type} />
			</div>
			<div>
				<h1>{name}</h1>
			</div>
			<div>
				<h2>{desc}</h2>
			</div>
			<div>
				<h2>Preço: {price}</h2>
			</div>
			<div>
				<a href="/">Comprar</a>
			</div>
		</div>
	)
}

const DataEmpresa = ({ id, type, name, desc, price, icon }) => {
	return (
		<div className="produtos-card" key={id}>
			<div>
				<img src={icon(type)} alt={type} />
			</div>
			<div>
				<h1>{name}</h1>
			</div>
			<div>
				<h2>{desc}</h2>
			</div>
			<div>
				<h2>Preço: {price}</h2>
			</div>
			<div>
				<a href="/">Comprar</a>
			</div>
		</div>
	)
}


const Produtos = ({ produtos, produtosEmpresas, selectCard, selected }) => {
	const mobile = useMediaQuery({ query: "(max-device-width: 840px)" })
	const icon = (produto) => {
		const iconType = mobile ? produto : produto.type
		switch (iconType) {
			case tiposPlanos.INITIAL:
				return junior;
			case tiposPlanos.MEDIUM:
				return pleno;
			case tiposPlanos.PREMIUM:
				return senior;
			default:
				return junior;
		}
	};

	const produtosFreelancers = () => {
		return produtos.map((produto, index) => {
			return (
				<div className="produtos-card" key={index}>
					<div>
						<img src={icon(produto)} alt={produto.type} />
					</div>
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
						<img src={icon(produto)} alt={produto.type} />
					</div>
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

	const menuFreelancer = produtos.map(el => {
		const { id, type, name, desc, price } = el;

		return <DataFreelancer key={id} type={type} name={name} desc={desc} price={price} icon={icon} selected={selected} />;
	})

	
	const menuEmpresa = produtosEmpresas.map(el => {
		const { id, type, name, desc, price } = el;

		return <DataEmpresa key={id} type={type} name={name} desc={desc} price={price} icon={icon} selected={selected} />;
	})

	return( 
		<div className="produtos-container">
			<div>
				<h1>Conheça Nossos Planos</h1>
			</div>
			<Tabs defaultActiveKey={"freelancers"} className="planos-tabs" >
				<Tab eventKey="freelancers" title="Freelancers">
					<div className="itens-container">
						{mobile ? 
							<ScrollMenu 
								data={menuFreelancer}
								onSelect={selectCard}
								selected={selected}
								scrollToSelected={true}
								wheel={false}
							/> : produtosFreelancers()}
					</div>
				</Tab>
				<Tab eventKey="empresas" title="Empresas">
					<div className="itens-container">
						{mobile ? 
							<ScrollMenu 
								data={menuEmpresa}
								onSelect={selectCard}
								selected={selected}
								scrollToSelected={true}
								wheel={false}
							/> : produtosMockEmpresas()}
					</div>
				</Tab>
			</Tabs>
		</div>
	)
};

export default Produtos;
