import React from "react";
import Home from "../../pages/home/home";
import Planos from "../../pages/planos/planos";
import Sobre from "../../pages/sobre/sobre";
import Header from "../../containers/header/header";
import Footer from "../../components/footer";

import "react-tabs/style/react-tabs.css";

//style
import "./app.css";

const App = () => {
	return (
		<>
			<Header/>
			<section id='home'>
				<Home />
			</section>
			<section id='sobre'>
				<Sobre/>
			</section>
			<section id='planos'>
				<Planos/>
			</section>
			<Footer/>
		</>
	);
};

export default App;
