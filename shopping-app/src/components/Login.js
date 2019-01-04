import React from "react";
const Login = () => {
  return (
    <div className="Login">
      <div className="flex">
        <div>
          <h1>Login</h1>
          <p>Get access to yours Orders, Wishlist and Recommendations</p>
        </div>
        <form name="loginForm" action="/" target="_self">
          <div className="group">
            <input type="text" required name="name" id="name" />
            <span className="highlight" />
            <span className="bar" />
            <label htmlFor="name">Name</label>
          </div>

          <div className="group">
            <input type="email" required name="email" id="email" />
            <span className="highlight" />
            <span className="bar" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="group">
            <input type="submit" value="Login" name="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
