import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./header.css";

const Header = location => {
  const { pathname } = location.location;

  return (
    <div className="header-container">
      <div className="nav-logo container">
        <Link to="/">
          <div>logo</div>
        </Link>
        <div>
          <Link to="/">
            <button className={pathname === "/" ? "active" : undefined}>
              Home
            </button>
          </Link>
          <Link to="/sobre">
            <button className={pathname === "/sobre" ? "active" : undefined}>
              Sobre
            </button>
          </Link>
          <Link to="/planos">
            <button className={pathname === "/planos" ? "active" : undefined}>
              Planos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
