import React from "react";
const Register = () => {
  return (
    <div className="Register">
      <div className="flex">
        <div>
          <h1>Signup</h1>
          <p>We do not share your personel details with anyone.</p>
        </div>
        <form>
          <div className="group">
            <input type="text" required />
            <span className="highlight" />
            <span className="bar" />
            <label>First Name</label>
          </div>

          <div className="group">
            <input type="text" required />
            <span className="highlight" />
            <span className="bar" />
            <label>Last Name</label>
          </div>

          <div className="group">
            <input type="text" required />
            <span className="highlight" />
            <span className="bar" />
            <label>Email</label>
          </div>

          <div className="group">
            <input type="text" required />
            <span className="highlight" />
            <span className="bar" />
            <label>Password</label>
          </div>

          <div className="group">
            <input type="text" required />
            <span className="highlight" />
            <span className="bar" />
            <label>Confirm Password</label>
          </div>

          <div className="group">
            <input type="button" value="Signup" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
