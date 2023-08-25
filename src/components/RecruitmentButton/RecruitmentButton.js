import React from "react";
import "./RecruitmentButton.css";
import { Link } from "react-router-dom";

const RecruitmentButton = ({ btn }) => {
  //   console.log(btn);
  const { buttonOne, buttonTwo, buttonThree, buttonFour, logo, id } = btn;
  // console.log(id);
  return (
    <div>
      <div className="btn-all">
        <img className="managedService-logo" src={logo} alt="" />
        <Link to={`/recruitmentButtonDataBy/${id}`}>{buttonOne}</Link>
        <Link to="/hrConsulting">{buttonTwo}</Link>
        <Link to={`/recruitmentButtonDataBy/${id}`}>{buttonThree}</Link>
        <Link to={`/recruitmentButtonDataBy/${id}`}>{buttonFour}</Link>
      </div>
    </div>
  );
};

export default RecruitmentButton;
