import React from "react";
import { useLoaderData } from "react-router-dom";
import ButtonDataMapDiv from "../ButtonDataMapDiv/ButtonDataMapDiv";
import ButtonDataTwoMapDiv from "../ButtonDataTwoMapDiv/ButtonDataTwoMapDiv";
import "./RecruitmentButtonDataById.css";
import ButtonDataTwoMapDivAgain from "../ButtonDataTwoMapDivAgain/ButtonDataTwoMapDivAgain";

const RecruitmentButtonDataById = () => {
  const getDataById = useLoaderData();
  const {
    backgroundTitle,
    backgroundImg,
    pTitleById,
    headingOne,
    headingTwo,
    headingThree,
    pFirst,
    pSecond,
    pThird,
    img,
    buttonData,
    buttonDataTwo,
    buttonDataTwoAgain,
  } = getDataById;
  // console.log(buttonDataTwoAgain);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "70vh",
        }}
      >
        <h3 className="backgroundTitle">{backgroundTitle}</h3>
      </div>
      <div className="manageServiceProduct-grid-div">
        <div>
          <img className="img-manageServiceProduct" src={img} alt="" />
        </div>
        <div className="manageServiceProduct-text-div">
          <div className="manageServiceProduct-flex-div">
            <div className="blank-manageServiceProduct-div"></div>
            <p className="p-title">{pTitleById}</p>
          </div>
          <h2 className="first-heading-manageServiceProduct">
            <span>{headingOne}</span>
            <span className="common-color-red">{headingTwo}</span>
            <span>{headingThree}</span>
          </h2>
          <p className="pFirst">{pFirst}</p>
          <p className="pSecond">{pSecond}</p>
          <p className="pSecond">{pThird}</p>
        </div>
      </div>
      <div>
        {buttonData.map((bdtData) => (
          <ButtonDataMapDiv
            bdtData={bdtData}
            key={bdtData.id}
          ></ButtonDataMapDiv>
        ))}
      </div>

      <div className="parent-of-two-map-div">
        <div className="">
          {buttonDataTwo.map((bdtDataTwo) => (
            <ButtonDataTwoMapDiv
              bdtDataTwo={bdtDataTwo}
              key={bdtDataTwo.id}
            ></ButtonDataTwoMapDiv>
          ))}
        </div>
        <div>
          {buttonDataTwoAgain.map((dbtDataTwoAgain) => (
            <ButtonDataTwoMapDivAgain
              dbtDataTwoAgain={dbtDataTwoAgain}
              key={dbtDataTwoAgain.id}
            ></ButtonDataTwoMapDivAgain>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitmentButtonDataById;
