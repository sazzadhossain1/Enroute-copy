import React from "react";
import "./CustomizedProgram.css";

const CustomizedProgram = () => {
  return (
    <div>
      <div className="customized-program-background-img-div">
        <h1 className="hrConsulting">Customized Program</h1>
      </div>
      <div className="hrConsulting-grid-div">
        <div>
          <img
            className="hrConsulting-img"
            src="https://enroute.com.bd/wp-content/uploads/2022/03/HR-Consulting-About.jpg"
            alt=""
          />
        </div>
        <div className="hrConsulting-text-container-div">
          <div className="hrConsulting-flex-div">
            <div className="hrConsulting-blank-div"></div>
            <p className="hrConsulting-dynamic">
              Excellence In Delivering Results
            </p>
          </div>
          <h2 className="hrConsulting-heading">
            <span>Customized Programs </span>
            <span className="text-color">
              That Make
              <br /> a Difference in
            </span>
            <span> Bottom Line</span>
          </h2>
          <p className="hrConsulting-p ">
            Enroute has the best customized training programs in Bangladesh.
            People are the most important asset to any organization. It’s the
            people with skills that take the organizations forward with their
            capacity for development. However, without focusing on the right
            skill development, they become unable to bring out their true
            capabilities to drive ultimate business objectives. With over a
            decade of corporate training expertise, we help organizations
            facilitate transforming approaches for the people according to their
            best potential with our customized training programs.
          </p>
          <p className="hrConsulting-p">
            In a physical lab (training venue) we engage participants on
            selected topics by seasoned industry professionals. The
            participant’s capacity varies from time to time, starting from 20 to
            60 per batch. The duration also varies from 1 day to 5 days sessions
            depending on the needs of trainees and content design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomizedProgram;
