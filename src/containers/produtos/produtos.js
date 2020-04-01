import React,{ useState } from "react";

import Produtos from "../../components/produtos/produtos";
import { Freelancers, Empresas } from "../../mocks/produtos";

const ProdutosContainer = () => {
	const [selected, setSelected] = useState(1);

	const selectCard = (key) => {
		setSelected(key)
	}

	return <Produtos produtos={Freelancers} produtosEmpresas={Empresas} selected={selected} selectCard={selectCard} />;
};

export default ProdutosContainer;
