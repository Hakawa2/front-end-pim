import React from "react";

//utils
import * as tiposPlanos from "../../utils/tipoPlanos";

//style
import "./produtos.css";

//img
import initialIcon from "../../img/inicial.png";
import mediumIcon from "../../img/medium.png";
import premiumIcon from "../../img/premium.png";

const Produtos = ({ produtos }) => {
  const icon = produto => {
    switch (produto.type) {
      case tiposPlanos.INITIAL:
        return initialIcon;
      case tiposPlanos.MEDIUM:
        return mediumIcon;
      case tiposPlanos.PREMIUM:
        return premiumIcon;
      default:
        return initialIcon;
    }
  };

  const produtosMap = () => {
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

  return <div className="produtos-container">{produtosMap()}</div>;
};

export default Produtos;
