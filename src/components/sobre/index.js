import React from "react";
import { Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

//css
import "./index.css"

//imgs
import sobre from "../../img/devs.jpeg"

const Sobre = () => {
	const mobile = useMediaQuery({ query: "(max-device-width: 840px)" })
	return(
		<div className="sobre-header container">
			<div>
				<hr/>
				<h1>Quem Somos</h1>
			</div>
			<Row>
				<Col xs={12} md={6} lg={6}>
					<span className="texto-sobre-container">
							A For Freelancers ou FoF para os mais íntimos nasceu com o intuito de inovar as negociações e gestões que são feitas entre freelancers e empresas, utilizando as melhores ferramentas do mercado para poder trazer uma experiência segura e agradável a todos nossos usuários.
						<br/>
						<br/>
						<h2 className="center">Missão</h2>
						<span>
							É trazer a transformação digital alinhada a estratégia na contratação de um ou vários freelancers, utilizando nossas métricas que foram pensadas e alinhadas, de modo que traga mais resultado e livre nosso cliente de preocupações.
							<ul>
								<li>
									Agilizar e Otimizar Processos;
								</li>
								<li>
									Reduzir Custos e Complexidade;
								</li>
								<li>
									Minimizar Falhas e Riscos;
								</li>
							</ul>
						</span>
						<br/>
						<h2 className="center">Visão</h2>
						<span>Poder mudar o cenário atual de contratação de freelancers, e poder usar essa mesma base para renovar a metodologia utilizada em outros tipos de contratações.</span>
					</span>
				</Col>
				<Col xs={12} md={6} lg={6}><img className="img-sobre-container" src={sobre}/></Col>
			</Row>
		</div>
	)
}

export default Sobre;