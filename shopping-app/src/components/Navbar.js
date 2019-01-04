import React from "react";
import { NavLink, withRouter, Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav>
      <Link className="brand-logo" to="/">
        <img src="images/logo.png" alt="" />
      </Link>
      <div className="nav-links">
        <ul className="hide-mobile">
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
          <li className="hide-mobile">
            <NavLink exact to="/login">
              SignIn
            </NavLink>
          </li>
          <li className="hide-mobile">
            <NavLink exact to="/register">
              Register
            </NavLink>
          </li>
          <li>
            <a
              href="/"
              role="button"
              onClick={e => {
                e.preventDefault();
                props.toggleHandler();
              }}
              className="cart"
            >
              <img src="images/cart.svg" alt="cart" />
              <div>
                {props.totalItems} {props.totalItems > 1 ? "items" : "item"}
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default withRouter(Navbar);
