import React from "react";
const Register = () => {
  const formSubmit = e => {
    if (e.target["password"].value !== e.target["confirmPassword"].value) {
      alert("Password and confirm password do not match.");
      e.preventDefault();
      return false;
    }
  };
  return (
    <div className="Register">
      <div className="flex">
        <div>
          <h1>Signup</h1>
          <p>We do not share your personel details with anyone.</p>
        </div>
        <form
          name="registerForm"
          action="/"
          target="_self"
          onSubmit={formSubmit}
        >
          <div className="group">
            <input type="text" name="fname" id="fname" required />
            <span className="highlight" />
            <span className="bar" />
            <label htmlFor="fname">First Name</label>
          </div>

          <div className="group">
            <input type="text" name="lname" id="lname" required />
            <span className="highlight" />
            <span className="bar" />
            <label htmlFor="lname">Last Name</label>
          </div>

          <div className="group">
            <input type="email" required name="email" id="email" />
            <span className="highlight" />
            <span className="bar" />
            <label htmlFor="email">Email</label>
          </div>

          <div className="group">
            <input
              type="password"
              name="password"
              id="password"
              required
              minLength="8"
            />
            <span className="highlight" />
            <span className="bar" />
            <label htmlFor="password">Password</label>
          </div>

          <div className="group">
            <input
              type="password"
              required
              name="confirmPassword"
              id="confirmPassword"
              minLength="8"
            />
            <span className="highlight" />
            <span className="bar" />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>

          <div className="group">
            <input type="submit" value="Signup" name="signup" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
