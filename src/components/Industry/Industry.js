import React from "react";
import "./Industry.css";
import StrongFoothold from "../StrongFoothold/StrongFoothold";

const Industry = () => {
  return (
    <div>
      <div className="industry-background-img-div">
        <h2 className="leadership-heading">This is industry</h2>
      </div>

      <div>
        <div className="hrConsulting-grid-div">
          <div>
            <img
              className="hrConsulting-img"
              src="https://enroute.com.bd/wp-content/uploads/2022/05/industry-page-about.jpg"
              alt=""
            />
          </div>
          <div className="hrConsulting-text-container-div">
            <div className="hrConsulting-flex-div">
              <div className="hrConsulting-blank-div"></div>
              <p className="hrConsulting-dynamic">
                Prioritizing Innovation & Excellence
              </p>
            </div>
            <h2 className="hrConsulting-heading">
              <span>Enroute’s </span>
              <span className="text-color">Industry-Specific </span>
              <br />
              <span>Service Excellency</span>
            </h2>
            <p className="hrConsulting-p ">
              Companies throughout different industries are confronting the need
              for change by redefining themselves, their operations, and the way
              they do business. Regardless of their specific industrial sector
              companies must think beyond their traditional business and
              operating models to choose where and how to create value in the
              future.
            </p>
            <p className="hrConsulting-p">
              Enroute is covering the full spectrum of services in different
              industries focusing on the fundamentals of people strategy,
              leadership culture, Innovation, supply chain transformation, and
              operational agility. Our professional consultants help the clients
              develop and deliver the right strategy based on analytics and
              technological insight to thrive in this dynamic market.
            </p>
          </div>
        </div>
      </div>
      <StrongFoothold></StrongFoothold>
    </div>
  );
};

export default Industry;
