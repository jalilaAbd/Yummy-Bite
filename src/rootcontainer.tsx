import React from "react";
import { Router } from "@reach/router";
import Home from "./pages/HomeContainer/home";
import Product from "./Containers/Product/product";

const RootContainer = () => {
  return (
    <div>
      <Router>
        <Home exact path="/" />
        <Product exact path="/product/:name" />
      </Router>
    </div>
  );
};

export default RootContainer;
