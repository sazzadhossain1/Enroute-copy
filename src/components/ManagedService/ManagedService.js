import React from "react";
import "./ManagedService.css";

import ManagedButton from "../ManagedButton/ManagedButton";

const ManagedService = ({ getApi }) => {
  const {
    pHeading,
    pOne,
    img,
    heading,

    button,
  } = getApi;
  // console.log(button);
  return (
    <div className="managedService-grid-div">
      <div className="managedService-text-div">
        <div className="child-div">
          <div className="managed-flex-div">
            <div className="enroute-blank-div"></div>
            <p>{pHeading}</p>
          </div>
          <h1 className="heading-manageService">{heading}</h1>
          <p>{pOne}</p>

          <div className="manageService-btn-div flex-btn-div">
            {button.map((btn) => (
              <ManagedButton btn={btn} key={btn.id}></ManagedButton>
            ))}
          </div>
        </div>
      </div>
      <div className="managedService-img-div">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default ManagedService;
