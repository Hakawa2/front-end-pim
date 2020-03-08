import React from "react";

import Produtos from "../../components/produtos/produtos";

const produtosMock = [
  {
    id: "1",
    name: "Plano Inicial",
    price: "R$ 19,99",
    desc: "deadfeadasdfrefadssdfdsasdsdfafasdfasagsdgsdwegeeg",
    type: "initial"
  },
  {
    id: "2",
    name: "Plano Medium",
    price: "R$ 39,99",
    desc: "deadfeadasdfrefadssdfdsasdsdfafasdfasagsdgsdwegeeg",
    type: "medium"
  },
  {
    id: "3",
    name: "Plano Premium",
    price: "R$ 59,99",
    desc: "deadfeadasdfrefadssdfdsasdsdfafasdfasagsdgsdwegeeg",
    type: "premium"
  }
];

const ProdutosContainer = () => {
  return <Produtos produtos={produtosMock} />;
};

export default ProdutosContainer;
