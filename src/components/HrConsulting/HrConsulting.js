import React from "react";
import "./HrConsulting.css";
import AccordionForm from "../AccordionForm/AccordionForm";

const HrConsulting = () => {
  return (
    <div className="hrConsulting-parent-div">
      <div className="hrConsulting-div">
        <h1 className="hrConsulting">HR Consulting</h1>
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
              Dynamic Human Resource solutions
            </p>
          </div>
          <h2 className="hrConsulting-heading">
            <span>We Provide Leading </span>
            <span className="text-color">
              HR <br /> Consultation
            </span>
            <span> Services</span>
          </h2>
          <p className="hrConsulting-p ">
            HR Consulting also refers as human resource advisory for
            organizations. Enroute covers from advisory to implementation of
            human resource requirement for partner organizations. It covers
            services in different spectrums. We strategize your human capital
            policy and design the deployment initiatives. As the hr compliance
            consultant we also focus on compensation and benefits framework with
            a view of transforming your HR function.
          </p>
          <p className="hrConsulting-p">
            We are the country’s top hr consulting firms in Bangladesh in terms
            of expertise and solutions provided throughout the time. In decade
            long continuous progress working with renowned multinational and
            local organization for human resource consultation we are committed
            to provide the best solution for your business.
          </p>
        </div>
      </div>
      <div>
        <div className="hrConsulting-main-parent-div">
          <AccordionForm></AccordionForm>
        </div>
      </div>
    </div>
  );
};

export default HrConsulting;
