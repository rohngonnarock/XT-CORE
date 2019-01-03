import React from "react";
import { NavLink, withRouter, Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav>
      <Link className="brand-logo" to="/">
        <img src="images/logo.png" alt="" />
      </Link>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/products">
              Products
            </NavLink>
          </li>
        </ul>
        <ul className="social">
          <li>
            <NavLink exact to="/login">
              SignIn
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/register">
              Register
            </NavLink>
          </li>
          <li>
            <a href="/" onClick={props.toggleHandler} className="cart">
              <img src="images/cart.svg" alt="cart" />
              <div>0 items</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default withRouter(Navbar);
