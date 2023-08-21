import React from "react";
import { useLoaderData } from "react-router-dom";
import "./ManagedServiceProduct.css";
import ManagedButtonData from "../ManagedButtonData/ManagedButtonData";

const ManagedServiceProduct = () => {
  const getManageServiceProductApi = useLoaderData();
  const {
    img,
    pTitleById,
    headingOne,
    headingTwo,
    headingThree,
    pFirst,
    pSecond,
    buttonData,
    backgroundImg,
    backgroundTitle,
  } = getManageServiceProductApi;
  console.log(backgroundImg, backgroundTitle);
  return (
    <div>
      <div
        className="backgroundTitle-parent-div"
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
      <div className="manageServiceProduct-parent-div">
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
              <span>{headingOne}</span>{" "}
              <span className="common-color-red">{headingTwo}</span>{" "}
              <span>{headingThree}</span>
            </h2>
            <p className="pFirst">{pFirst}</p>
            <p className="pSecond">{pSecond}</p>
          </div>
        </div>
        <div className="parent-map-div">
          {buttonData.map((btnData) => (
            <ManagedButtonData
              btnData={btnData}
              key={btnData.id}
            ></ManagedButtonData>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagedServiceProduct;
