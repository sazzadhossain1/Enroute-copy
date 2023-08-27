import React from "react";
import "./PreEmploymentVerification.css";

const PreEmploymentVerification = () => {
  return (
    <div>
      <div className="preEmploymentVerification-background-img-div">
        <h1 className="preEmploymentVerification-heading">
          Pre-Employment Verification
        </h1>
      </div>
      <div className="hrConsulting-grid-div">
        <div>
          <img
            className="hrConsulting-img"
            src="https://enroute.com.bd/wp-content/uploads/2022/05/pre-employment-verification-about.jpg"
            alt=""
          />
        </div>
        <div className="hrConsulting-text-container-div">
          <div className="hrConsulting-flex-div">
            <div className="hrConsulting-blank-div"></div>
            <p className="hrConsulting-dynamic">
              No 1 Verification Services in Bangladesh
            </p>
          </div>
          <h2 className="hrConsulting-heading">
            <span>Our Reliable</span>
            <span className="text-color">
              Background <br /> Verification
            </span>
            <span>Services For You</span>
          </h2>
          <p className="hrConsulting-p ">
            Enroute is the No 1 employment verification service provider in
            bangladesh. Our experienced and efficient professionals provide
            verification services that include certificates, driving licenses,
            locations, references, and previous employer reference verification
            services all over Bangladesh.
          </p>
          <p className="hrConsulting-p">
            Trusted by many national and MNC’s Enroute ensures reliable and
            accurate results driven by its tenacious individuals who process the
            verification taking full authority and keeping the client’s
            requirements in mind. For growing businesses where employees are the
            center of your sustainability, we take the pre employment background
            verification seriously that upholds the reputation of your
            organization in the long run.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreEmploymentVerification;
