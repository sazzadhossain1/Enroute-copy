import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../Context/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("LogOut successfully");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="header-parent-div">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="bgc menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link>Service</Link>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/industry">Industry</Link>
              </li>
              <li>
                <Link to="/contactUs">Contact Us</Link>
              </li>
              {user?.uid ? (
                <li>
                  <button onClick={handleLogOut}>LogOut</button>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signUp">Sign Up</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/home" className="enroute">
            enr<span className="o">o</span>ute copy
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="home">
              <Link to="/home">Home</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Service</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/industry">Industry</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact Us</Link>
            </li>

            {user?.uid ? (
              <li>
                <button onClick={handleLogOut}>LogOut</button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signUp">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <h1 className="mr-5 displayName">{user?.displayName}</h1>
          <Link className="header-free-btn">FREE CONSULTATION</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
