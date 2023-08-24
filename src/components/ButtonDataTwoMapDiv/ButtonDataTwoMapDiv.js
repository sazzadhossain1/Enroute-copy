import React from "react";
import "./ButtonDataTwoMapDiv.css";

const ButtonDataTwoMapDiv = ({ bdtDataTwo }) => {
  //   console.log(bdtDataTwo);
  const { logo, secondPartTitle, secondPartP } = bdtDataTwo;
  return (
    <div className="buttonDataTwoMapDiv-flex-div align">
      <div>
        <h3 className="common-title">{secondPartTitle}</h3>
        <p className="common-p">{secondPartP}</p>
      </div>
      <div>
        <img className="bdtDataTwoLogo" src={logo} alt="" />
      </div>
    </div>
  );
};

export default ButtonDataTwoMapDiv;
