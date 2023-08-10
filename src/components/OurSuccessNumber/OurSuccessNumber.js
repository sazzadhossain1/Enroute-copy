import React from "react";
import "./OurSuccessNumber.css";

const OurSuccessNumber = () => {
  return (
    <div className="ourSuccessNumbers">
      <h1 className="ourSuccessNumber">Our Success Number</h1>
      <div className="grid-parent-ourSuccessNumber-div">
        <div className="flex-div-ourSuccessNumber">
          <img
            className="logo-ourSuccessNumber"
            src="https://www.vhv.rs/dpng/d/416-4162657_people-icon-green-hd-png-download.png"
            alt=""
          />
          <div className="text-number-our-div">
            <p className="number">4,000+</p>
            <p className="p-ourSuccessNumber">Employees</p>
          </div>
        </div>
        <div className="flex-div-ourSuccessNumber">
          <img
            className="logo-ourSuccessNumber"
            src="https://uxwing.com/wp-content/themes/uxwing/download/banking-finance/money-bag-dollar-color-icon.png"
            alt=""
          />
          <div className="text-number-our-div">
            <p className="number">100+</p>
            <p className="p-ourSuccessNumber">Employees</p>
          </div>
        </div>
        <div className="flex-div-ourSuccessNumber">
          <img
            className="logo-ourSuccessNumber"
            src="https://static.vecteezy.com/system/resources/previews/015/567/243/original/green-leaf-building-environment-logo-design-free-vector.jpg"
            alt=""
          />
          <div className="text-number-our-div">
            <p className="number">10+</p>
            <p className="p-ourSuccessNumber">Employees</p>
          </div>
        </div>
        <div className="flex-div-ourSuccessNumber">
          <img
            className="logo-ourSuccessNumber"
            src="https://png.pngtree.com/png-vector/20201208/ourmid/pngtree-green-star-elements-png-image_2526465.jpg"
            alt=""
          />
          <div className="text-number-our-div">
            <p className="number">15+</p>
            <p className="p-ourSuccessNumber">Employees</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSuccessNumber;
