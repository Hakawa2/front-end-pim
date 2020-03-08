import React from "react";
import Body from "../../components/body/body";
import Header from "../../components/header/header";
import Produtos from "../../containers/produtos/produtos";

const Planos = () => {
  return (
    <>
      <Header />
      <Body children={<Produtos />} />
    </>
  );
};

export default Planos;
