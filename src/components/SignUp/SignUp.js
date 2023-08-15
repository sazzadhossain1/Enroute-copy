import { useContext, useState } from "react";
import "./SignUp.css";

import { AuthContext } from "../../Context/UserContext";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  // console.log(createUser);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(name, email, password, confirmPassword);

    // password authentication //
    if (password.length < 8) {
      setError("Please input at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Your Password dose's Match");
      return;
    }
    // create user //
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setSuccess(true);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setSuccess(false);
        setError(error.message);
        form.reset();
      });
  };

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
        <h2 className="signUp-title">Please Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="form-group">
            <label htmlFor="yourName">Your Name</label>
            <input type="text" id="yourName" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
            />
          </div>
          {success && <p className="successUser">User Created Successfully</p>}
          <p className="error">{error}</p>

          <p className="pleaseLoginLink">
            Already have an account?{" "}
            <Link className="link" to="/login">
              Please Login
            </Link>
          </p>
          <button className="signUp-btn" type="submit">
            Sign Up
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

export default SignUp;
