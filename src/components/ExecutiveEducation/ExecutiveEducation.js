import React from "react";
import { Link } from "react-router-dom";
import "./ExecutiveEducation.css";

const ExecutiveEducation = ({ tp }) => {
  // console.log(tp);

  const { img, pHeading, heading, pOne, btnOne, btnTwo, btnThree, btnFour } =
    tp;
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
          <div className="flex-btn-div">
            <div className="all-btn-div">
              <button className="btn-all Exe-btn">
                <img
                  className="managedService-logo"
                  src="https://www.vhv.rs/dpng/d/416-4162657_people-icon-green-hd-png-download.png"
                  alt=""
                />
                <Link to="/customizedProgram">{btnOne}</Link>
              </button>

              <button className="btn-all Exe-btn">
                <img
                  className="managedService-logo"
                  src="https://w7.pngwing.com/pngs/341/591/png-transparent-green-color-brush-color-watercolor-painting-green-hand-painted-graffiti-ink-leaf-simple-thumbnail.png"
                  alt=""
                />
                <Link>{btnTwo}</Link>
              </button>
            </div>
            <div className="all-btn-div">
              <button className="btn-all Exe-btn">
                <img
                  className="managedService-logo"
                  src="https://w7.pngwing.com/pngs/337/803/png-transparent-green-liquid-fried-plantain-green-painting-color-color-splash-leaf-vegetable-white-food-thumbnail.png"
                  alt=""
                />
                <Link>{btnThree}</Link>
              </button>
              <button className="btn-all Exe-btn">
                <img
                  className="managedService-logo"
                  src="https://w7.pngwing.com/pngs/283/605/png-transparent-butterfly-green-color-butterfly-brush-footed-butterfly-symmetry-insects-thumbnail.png"
                  alt=""
                />
                <Link>{btnFour}</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="managedService-img-div">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default ExecutiveEducation;
