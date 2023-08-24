import React from "react";
import "./ButtonDataTwoMapDiv.css";

const ButtonDataTwoMapDiv = ({ bdtDataTwo }) => {
  console.log(bdtDataTwo);
  const { logo, secondPartTitle, secondPartP } = bdtDataTwo;
  return (
    <div className="buttonDataTwoMapDiv-flex-div">
      <div>
        <h3>{secondPartTitle}</h3>
        <p>{secondPartP}</p>{" "}
      </div>
      <div>
        <img className="bdtDataTwoLogo" src={logo} alt="" />
      </div>
    </div>
  );
};

export default ButtonDataTwoMapDiv;
