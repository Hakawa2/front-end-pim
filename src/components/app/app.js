import React from "react";
import Home from "../../pages/home/home";
import Planos from "../../pages/planos/planos";
import Sobre from "../../pages/sobre/sobre";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//style
import "./app.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/planos" component={Planos} />
          <Route path="/sobre" component={Sobre} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
