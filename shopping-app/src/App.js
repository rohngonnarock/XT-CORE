import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Products from "./components/Products";
import Register from "./components/Register";
import Navbar from "./components/Navbar";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App wrapper">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/products" component={Products} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
