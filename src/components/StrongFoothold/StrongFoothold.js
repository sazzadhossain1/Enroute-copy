import React from "react";
import "./StrongFoothold.css";

const StrongFoothold = () => {
  return (
    <div className="strongFoothold-parent-div">
      <div className="strongFoothold-child-div">
        <h1 className="strongFoothold-heading">
          We Have A <span className="text-color">Strong Foothold </span> in The
          Following
          <span className="text-color"> Industries</span>
        </h1>
      </div>
      {/*  */}
      <div className="strongFoothold-textAndLogo-grid-div">
        <div>
          <div className="strongFoothold-textAndLogo-div">
            <div className="strongFoothold-right-text-container">
              <h1 className="strongFoothold-logo-heading">UN & INGO</h1>
              <p className="strongFoothold-p">
                Our collaboration with UN & INGO organizations resulted in
                excellency in implementation & people-centric solutions that
                served in solving the humanitarian crisis.
              </p>
            </div>
            <div className="strongFoothold-logo-div">
              <img
                className="strongFoothold-logo"
                src="https://enroute.com.bd/wp-content/uploads/2022/05/UN.svg"
                alt=""
              />
            </div>
          </div>
          <div className="strongFoothold-textAndLogo-div">
            <div className="strongFoothold-right-text-container">
              <h1 className="strongFoothold-logo-heading">
                FMCG – Fast Moving Consumer Goods
              </h1>
              <p className="strongFoothold-p">
                We help FMCG companies prepare for the future by developing
                consumer-centric innovation in dynamic market system.
              </p>
            </div>
            <div className="strongFoothold-logo-div">
              <img
                className="strongFoothold-logo"
                src="https://enroute.com.bd/wp-content/uploads/2022/05/FMCG.svg"
                alt=""
              />
            </div>
          </div>
          <div className="strongFoothold-textAndLogo-div">
            <div className="strongFoothold-right-text-container">
              <h1 className="strongFoothold-logo-heading">
                Education, Medical & Healthcare
              </h1>
              <p className="strongFoothold-p">
                Our futuristic approach in the education, medical & healthcare
                sectors is prioritized to accelerate social impact.
              </p>
            </div>
            <div className="strongFoothold-logo-div">
              <img
                className="strongFoothold-logo"
                src="https://enroute.com.bd/wp-content/uploads/2022/05/Education.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* ------------------------------------------- */}
        <div>
          <div className="strongFoothold-textAndLogo-div">
            <div className="strongFoothold-logo-div">
              <img
                className="strongFoothold-logo"
                src="https://enroute.com.bd/wp-content/uploads/2022/05/Logistics.svg"
                alt=""
              />
            </div>
            <div className="strongFoothold-left-text-container">
              <h1 className="strongFoothold-logo-heading">Express Logistics</h1>
              <p className="strongFoothold-p">
                Enroute’s value-driven approach across the express logistics,
                and transport industry positions companies for success in face
                of current challenges.
              </p>
            </div>
          </div>
          <div className="strongFoothold-textAndLogo-div">
            <div className="strongFoothold-logo-div">
              <img
                className="strongFoothold-logo"
                src="https://enroute.com.bd/wp-content/uploads/2022/05/Telco.svg"
                alt=""
              />
            </div>
            <div className="strongFoothold-left-text-container">
              <h1 className="strongFoothold-logo-heading">
                Telco, Electronics & Network
              </h1>
              <p className="strongFoothold-p">
                We have helped unleash the potential in Telco, Electronics &
                Network Industries by developing capabilities and turning
                possibilities into reality.
              </p>
            </div>
          </div>
          <div className="strongFoothold-textAndLogo-div">
            <div className="strongFoothold-logo-div">
              <img
                className="strongFoothold-logo"
                src="https://enroute.com.bd/wp-content/uploads/2022/05/Financial-Institutions.svg"
                alt=""
              />
            </div>
            <div className="strongFoothold-left-text-container">
              <h1 className="strongFoothold-logo-heading">
                Financial Institutions
              </h1>
              <p className="strongFoothold-p">
                We are transforming the financial service through digitalization
                and changes in fundamental aspects enabling their capabilities
                for the future of banking and finance.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default StrongFoothold;
