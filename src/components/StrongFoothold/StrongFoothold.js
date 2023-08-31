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
            <div>
              <h1>UN & INGO</h1>
              <p>
                Our collaboration with UN & INGO organizations resulted in
                excellency in implementation & people-centric solutions that
                served in solving the humanitarian crisis.
              </p>
            </div>
            <img
              className="strongFoothold-logo"
              src="https://enroute.com.bd/wp-content/uploads/2022/05/UN.svg"
              alt=""
            />
          </div>
        </div>
        {/* ------------------------------------------- */}
        <div>
          <div className="strongFoothold-textAndLogo-div">
            <img
              className="strongFoothold-logo"
              src="https://enroute.com.bd/wp-content/uploads/2022/05/UN.svg"
              alt=""
            />
            <div>
              <h1>UN & INGO</h1>
              <p>
                Our collaboration with UN & INGO organizations resulted in
                excellency in implementation & people-centric solutions that
                served in solving the humanitarian crisis.
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
