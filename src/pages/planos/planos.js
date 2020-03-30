import React from "react";
import Body from "../../components/body/body";
import Produtos from "../../containers/produtos/produtos";
import AnchorLink from "react-anchor-link-smooth-scroll"

const Planos = () => {
	return (
		<>
			<Body children={<Produtos />} />
		</>
	);
};

export default Planos;
