import React from "react";

const ButtonDataTwoMapDivAgain = ({ dbtDataTwoAgain }) => {
  console.log(dbtDataTwoAgain);
  const { logo, secondPartTitle, secondPartP } = dbtDataTwoAgain;
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

export default ButtonDataTwoMapDivAgain;
