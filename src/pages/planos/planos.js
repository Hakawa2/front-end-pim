import React from "react";
import Body from "../../components/body/body";
import Produtos from "../../containers/produtos/produtos";

const Planos = () => {
	return (
		<>
			<Body children={<Produtos />} />
		</>
	);
};

export default Planos;
