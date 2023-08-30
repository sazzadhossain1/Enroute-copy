import React from "react";
import "./LeadershipExecutiveCoaching.css";

const LeadershipExecutiveCoaching = () => {
  return (
    <div>
      <div className="leadership-background-img">
        <h2 className="leadership-heading">Leadership & Executive Coaching</h2>
      </div>
      <div>
        <div className="hrConsulting-grid-div">
          <div>
            <img
              className="hrConsulting-img"
              src="https://enroute.com.bd/wp-content/uploads/2022/04/LEC-about.jpg"
              alt=""
            />
          </div>
          <div className="hrConsulting-text-container-div">
            <div className="hrConsulting-flex-div">
              <div className="hrConsulting-blank-div"></div>
              <p className="hrConsulting-dynamic">Grow & Scale Your Career</p>
            </div>
            <h2 className="hrConsulting-heading">
              <span>Leadership & Executive </span>
              <span className="text-color">Coaching</span>
            </h2>
            <p className="hrConsulting-p ">
              According to the recent workforce learning report and statistics,
              94% of employees will be more engaged at work and stay longer at a
              company if it simply invests in executive learning and
              development.
            </p>
            <p className="hrConsulting-p">
              Enroute is the best professional leadership coaching provider in
              Bangladesh. We understand the fact that every individual has a
              unique style of learning. That being the case, a tailored learning
              process and environment are crucial to learning and development.
              In such an instance, executive and leadership coaching are one of
              the globally acclaimed and influential development tools for
              executives.
            </p>
            <p className="hrConsulting-p">
              We have initiated providing executive leadership coaching to
              enable leaders who can make sense in the face of uncertainty and
              can ensure a holding environment for the team to adapt, innovate
              and perform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipExecutiveCoaching;
