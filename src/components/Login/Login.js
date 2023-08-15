import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="sign-up-parent-div">
      <div className="signup-form">
        <h2 className="signUp-title">Please Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>

          <p className="successUser">User Created Successfully</p>
          <p className="error"></p>

          <p className="pleaseLoginLink">
            Are You New To This Site?
            <Link className="link" to="/signUp">
              Please SignUp
            </Link>
          </p>
          <button className="signUp-btn" type="submit">
            Login
          </button>
        </form>
        <button className="google-btn" type="submit">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png?20230305195327"
            alt=""
          />
          <p> SignIn With Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
