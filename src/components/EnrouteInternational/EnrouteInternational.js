import React from "react";
import "./EnrouteInternational.css";

const EnrouteInternational = () => {
  return (
    <div className="mt-40">
      <div className="enrouteInternational-grid-div">
        <div className="enroute-text-div">
          <div className="enoute-flex-div">
            <div className="enroute-blank-div"></div>
            <p>An expedition of implementation</p>
          </div>
          <h1 className="enroute-heading">
            We are{" "}
            <span className="enroute-color">
              Enroute Copy international limited -
            </span>
            Forward Thinking Business Consultants
          </h1>
          <p className="enroute-p-one">
            Enroute has been the pioneer in developing and implementing
            integrated business strategies since its inception in 2008.
          </p>
          <p className="enroute-p-two">
            Targeted at benefiting the client’s business and all its
            stakeholders by developing a transformational approach Enroute has
            collaborated with many local and international companies of a
            selected segment. With a team of extremely passionate individuals,
            Enroute is defined by its people and management.
          </p>
          <p className="enroute-p-three">
            Growing customer expectations and constantly changing markets need
            the highest level of recruitment. Bringing new talent into the firm
            Enroute has always envisioned for the future. An intelligent rate of
            recruitments to deliver quick and precise solutions to its clients
            has always been the primary goal for the company.
          </p>
        </div>
        <div className="enroute-img-div">
          <img
            className="enroute-img"
            src="https://enroute.com.bd/wp-content/uploads/2022/04/home-about.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default EnrouteInternational;
