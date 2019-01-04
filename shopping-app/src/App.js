import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { showCart, hideCart } from "./store/actions/actions";
import Home from "./components/Home";
import Login from "./components/Login";
import Products from "./components/Products";
import Register from "./components/Register";
import Navbar from "./components/Navbar";

import Footer from "./components/footer";
import Cart from "./components/cart";

import "./App.scss";

class App extends Component {
  cartToggleHandler() {
    if (this.props.hideCart) {
      this.props.showCartFn();
    } else {
      this.props.hideCartFn();
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App wrapper">
          <Navbar
            totalItems={this.props.totalItems}
            toggleHandler={() => {
              this.cartToggleHandler();
            }}
          />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/products" component={Products} />
            <Route path="/register" component={Register} />
          </Switch>
          <Cart />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    hideCart: state.hideCart,
    totalItems: state.cartTotolItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showCartFn: () => dispatch(showCart()),
    hideCartFn: () => dispatch(hideCart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
