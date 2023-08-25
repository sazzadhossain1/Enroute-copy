import React from "react";
import "./ButtonDataTwoMapDivAgain.css";

const ButtonDataTwoMapDivAgain = ({ dbtDataTwoAgain }) => {
  // console.log(dbtDataTwoAgain);
  const { logo, secondPartTitle, secondPartP } = dbtDataTwoAgain;
  return (
    <div className="buttonDataTwoMapDiv-flex-div text-align">
      <div className="common-logo-div">
        <img className="bdtDataTwoLogo" src={logo} alt="" />
      </div>
      <div>
        <h3 className="common-title">{secondPartTitle}</h3>
        <p className="common-p">{secondPartP}</p>
      </div>
    </div>
  );
};

export default ButtonDataTwoMapDivAgain;
