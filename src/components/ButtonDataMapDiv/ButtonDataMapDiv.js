import React from "react";
import "./ButtonDataMapDiv.css";

const ButtonDataMapDiv = ({ bdtData }) => {
  // console.log(bdtData);
  const {
    imgById,
    pHeading,
    heading,
    pFirst,
    pointOne,
    pointTwo,
    pointThree,
    pointFour,
    pointFive,
    pointSix,
    pointSeven,
    pointEight,
    pointNine,
    pointTen,
    pointEleven,
    pointTwelve,
    pointThirteen,
    pointFourteen,
    pointFifteen,
    logo,
    secondPartHeadingOne,
    secondPartHeadingTwo,
    secondPartHeadingThree,
    secondPartHeadingFour,
    secondPartParagraph,
  } = bdtData;

  return (
    <div>
      <div className="buttonDataMapDiv-grid-div">
        <div className="buttonDataMapDiv-text-container-div">
          <div className="pHeading-heading-pFirst-container">
            <div className="manageServiceProduct-flex-div">
              <div className="blank-manageServiceProduct-div"></div>
              <p className="p-title">{pHeading}</p>
            </div>
            <h2 className="heading">{heading}</h2>
            <p className="pFirst">{pFirst}</p>
          </div>
          <div className="ul-grid-div">
            <ul>
              <li className="li-flex">
                <img className="tick-mark-logo" src={logo} alt="" />
                <p>{pointOne}</p>
              </li>
              <li className="li-flex">
                <img className="tick-mark-logo" src={logo} alt="" />
                <p>{pointTwo}</p>
              </li>
              <li className="li-flex">
                <img className="tick-mark-logo" src={logo} alt="" />
                <p>{pointThree}</p>
              </li>
              <li className="li-flex">
                <img className="tick-mark-logo" src={logo} alt="" />
                <p>{pointFour}</p>
              </li>
              <li className="li-flex">
                <img className="tick-mark-logo" src={logo} alt="" />
                <p>{pointFive}</p>
              </li>
              <li className="li-flex">
                <img className="tick-mark-logo" src={logo} alt="" />
                <p>{pointSix}</p>
              </li>
              <li className="li-flex">
                <img className="tick-mark-logo" src={logo} alt="" />

                <p>{pointSeven}</p>
              </li>
            </ul>
            <ul>
              <li className="li-flex">
                <img className="tick-mark-logo" src={logo} alt="" />
                <p>{pointEight}</p>
              </li>
              <li className="li-flex">
                <img className="tick-mark-logo" src={logo} alt="" />
                <p>{pointNine}</p>
              </li>
              <li className="li-flex">
                <img className="tick-mark-logo" src={logo} alt="" />
                <p>{pointTen}</p>
              </li>
              <li className="li-flex">
                <img className="tick-mark-logo" src={logo} alt="" />
                <p>{pointEleven}</p>
              </li>
              <li className="li-flex">
                <img className="tick-mark-logo" src={logo} alt="" />
                <p>{pointTwelve}</p>
              </li>
              <li className="li-flex">
                <img className="tick-mark-logo" src={logo} alt="" />
                <p>{pointThirteen}</p>
              </li>
              <li className="li-flex">
                <img className="tick-mark-logo" src={logo} alt="" />

                <p>{pointFourteen}</p>
              </li>
              <li className="li-flex">
                <img className="tick-mark-logo" src={logo} alt="" />

                <p>{pointFifteen}</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img className="img-from-ButtonDataMapDiv" src={imgById} alt="" />
        </div>
      </div>
      <div className="secondPart-parent-div">
        <div className="secondPart-children-div">
          <h3 className="commonSiz secondPart-heading">
            <span>{secondPartHeadingOne}</span>
            <span className="commonColor">{secondPartHeadingTwo}</span>
            <span>{secondPartHeadingThree}</span>
            <span className="commonColor">{secondPartHeadingFour}</span>
          </h3>
          <p className="secondPartParagraph">{secondPartParagraph}</p>
        </div>
      </div>
    </div>
  );
};

export default ButtonDataMapDiv;
