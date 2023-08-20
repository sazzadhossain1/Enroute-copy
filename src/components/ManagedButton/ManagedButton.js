import React from "react";
import "./ManagedButton.css";
import { Link } from "react-router-dom";

const ManagedButton = ({ btn }) => {
  //   console.log(btn);
  const { buttonOne, buttonTwo, buttonThree, buttonFour, id, logo } = btn;
  // console.log(logo);
  return (
    <div>
      <div className="btn-all">
        <img className="managedService-logo" src={logo} alt="" />
        <Link to={`/manageServiceProduct/${id}`}>{buttonOne}</Link>
        <Link to={`/manageServiceProduct/${id}`}>{buttonTwo}</Link>
        <Link to={`/manageServiceProduct/${id}`}>{buttonThree}</Link>
        <Link to={`/manageServiceProduct/${id}`}>{buttonFour}</Link>
      </div>
    </div>
  );
};

export default ManagedButton;
