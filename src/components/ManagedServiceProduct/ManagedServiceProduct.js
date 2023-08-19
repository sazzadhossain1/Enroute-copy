import React from "react";
import { useLoaderData } from "react-router-dom";
import "./ManagedServiceProduct.css";

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
  } = getManageServiceProductApi;
  console.log(img);
  return (
    <div className="manageServiceProduct-grid-div">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <div>
          <div></div>
          <p>{pTitleById}</p>
        </div>
        <h2>
          <span>{headingOne}</span> <span>{headingTwo}</span>{" "}
          <span>{headingThree}</span>
        </h2>
        <p>{pFirst}</p>
        <p>{pSecond}</p>
      </div>
    </div>
  );
};

export default ManagedServiceProduct;
