import React from "react";

import Produtos from "../../components/produtos/produtos";
import { Freelancers, Empresas } from "../../mocks/produtos";

const ProdutosContainer = () => {
	return <Produtos produtos={Freelancers} produtosEmpresas={Empresas} />;
};

export default ProdutosContainer;
