import React from "react";
import "./ManagedService.css";
import { Link } from "react-router-dom";

const ManagedService = ({ getApi }) => {
  const { pHeading, pOne, img, heading, btnOne, btnTwo, btnThree, btnFour } =
    getApi;
  console.log(pHeading);
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
          <button>
            <Link>{btnOne}</Link>
          </button>

          <button>
            <Link>{btnTwo}</Link>
          </button>

          <button>
            <Link>{btnThree}</Link>
          </button>

          <button>
            <Link>{btnFour}</Link>
          </button>
        </div>
      </div>
      <div className="managedService-img-div">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default ManagedService;
