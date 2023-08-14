import { useContext } from "react";
import "./SignUp.css";

import { AuthContext } from "../../Context/UserContext";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  console.log(createUser);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(name, email, password, confirmPassword);

    // create user //
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
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
          <button className="signUp-btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
