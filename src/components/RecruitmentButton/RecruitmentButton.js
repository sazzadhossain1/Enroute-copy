import React from "react";
import "./RecruitmentButton.css";
import { Link } from "react-router-dom";

const RecruitmentButton = ({ btn }) => {
  console.log(btn);
  const { buttonOne, buttonTwo, buttonThree, buttonFour, logo } = btn;
  console.log(logo);
  return (
    <div>
      <div className="btn-all">
        <img className="managedService-logo" src={logo} alt="" />
        <Link>{buttonOne}</Link>
        <Link>{buttonTwo}</Link>
        <Link>{buttonThree}</Link>
        <Link>{buttonFour}</Link>
      </div>
    </div>
  );
};

export default RecruitmentButton;
