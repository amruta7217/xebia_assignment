import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./screens/Login/Login";
import Product from "./screens/Product/Product";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Product} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
}

export default App;
