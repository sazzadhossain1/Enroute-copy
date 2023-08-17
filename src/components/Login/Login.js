import React, { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Login = () => {
  const { loginEmailPassword, googleSignIn } = useContext(AuthContext);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // User Login //
    loginEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        setError("");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setSuccess(false);
      });
  };

  // SignIn with Google //
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setSuccess(false);
      });
  };
  return (
    <div className="sign-up-parent-div">
      <div className="signup-form">
        <h2 className="signUp-title">Please Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>

          {success && <p className="successUser">User Login Successfully</p>}
          <p className="error">{error}</p>

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
        <button
          onClick={handleGoogleSignIn}
          className="google-btn"
          type="submit"
        >
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
