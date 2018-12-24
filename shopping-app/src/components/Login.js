import React from "react";
const Login = () => {
  return (
    <div className="Login">
      <div className="flex">
        <div>
          <h1>Login</h1>
          <p>Get access to yours Orders, Wishlist and Recommendations</p>
        </div>
        <form>
          <div className="group">
            <input type="text" required />
            <span className="highlight" />
            <span className="bar" />
            <label>Name</label>
          </div>

          <div className="group">
            <input type="text" required />
            <span className="highlight" />
            <span className="bar" />
            <label>Email</label>
          </div>
          <div className="group">
            <input type="button" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
