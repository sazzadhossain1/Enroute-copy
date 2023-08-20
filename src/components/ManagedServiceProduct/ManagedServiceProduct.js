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
  } = getManageServiceProductApi;
  console.log(img);
  return (
    <div>
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
      <div>
        {buttonData.map((btnData) => (
          <ManagedButtonData
            btnData={btnData}
            key={btnData.id}
          ></ManagedButtonData>
        ))}
      </div>
    </div>
  );
};

export default ManagedServiceProduct;
