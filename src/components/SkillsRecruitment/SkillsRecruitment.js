import React from "react";
import "./SkillsRecruitment.css";
import { useLoaderData } from "react-router-dom";
import Carousel from "react-multi-carousel";
import SuccessStories from "../SuccessStories/SuccessStories";

const SkillsRecruitment = () => {
  //
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1430 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1430, min: 954 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 954, min: 0 },
      items: 1,
    },
  };
  //

  const getDataForCarousel = useLoaderData();
  // console.log(getDataForCarousel[0]);
  return (
    <div>
      <div className="skillsRecruitment-background-image-div">
        <h1 className="SkillsRecruitment-heading">Skills Recruitment</h1>
      </div>
      <div className="hrConsulting-grid-div">
        <div>
          <img
            className="hrConsulting-img"
            src="https://enroute.com.bd/wp-content/uploads/2022/03/skills-recruitment-about.jpg"
            alt=""
          />
        </div>
        <div className="hrConsulting-text-container-div">
          <div className="hrConsulting-flex-div">
            <div className="hrConsulting-blank-div"></div>
            <p className="hrConsulting-dynamic">
              Redefined Recruitment Process
            </p>
          </div>
          <h2 className="hrConsulting-heading">
            <span>Your Reliable Partner in</span>
            <span className="text-color">
              Skills <br /> Recruitment
            </span>
          </h2>
          <p className="hrConsulting-p ">
            Enroute International Ltd is certified under ISO 9001:2015 for
            Quality Management System and ISO 14001:2015 for Environmental
            Management System for the scope of HR Consultancy Services, People
            Outsourcing, Headhunting (Recruitment), Background Verification,
            Payroll Management, Marketing Solution & Facility Management. We are
            the leading skilled recruitment agency in Bangladesh with experience
            of over 15 years.
          </p>
          <p className="hrConsulting-p">
            We are experienced in working with the country’s best multinational
            and local organizations for HR consultation and defined recruitment
            process as a value-added partner. Based on the client’s business
            objectives, the agency determines the profile of skills and
            background required for a position. We work with the highest
            standards of integrity and confidentiality. We identify and evaluate
            the relevant competencies of the candidates in the most systematic
            approach.
          </p>
        </div>
      </div>

      <div className="whatWeDo-grid-div">
        <div className="text-container-main-parent-div">
          <div className="text-content-parent-div">
            <div className="focus-flex-div">
              <div className="focus-blank-div"></div>
              <p className="focus-p">Focus On Strengthening Workforce</p>
            </div>
            <h2 className="what-heading">What We Do</h2>
            <p className="whatWeDo-p">
              Enroute is one of the best skilled worker recruitment agency in
              Bangladesh. We redefine your organizational ambition for the
              future ahead. The process is designed for the maximum outcome with
              minimal engagement. Partnering with the right skills recruitment
              agency will help you with sourcing proper skilled recruits that
              will impact your growth and lead the future to success.
            </p>
            <div>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Job Announcement</span>
              </p>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Resume Shortlisting as per requirement</span>
              </p>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Written Test</span>
              </p>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Written exam management</span>
              </p>

              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Skill Test/IT Skill Test</span>
              </p>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Interview based on Competency</span>
              </p>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Assessment Center</span>
              </p>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Facilitating the final selection</span>
              </p>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Support during joining</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="whatWeDo-image"
            src="https://5.imimg.com/data5/SELLER/Default/2023/5/305143451/YG/FI/KU/131208625/hr-payrol-software-erpnext-human-resource-management-payrol-management-erpnext-erp-500x500.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="">
        <div className="for-carousel mb-12">
          <div className="accordionForm-service-grid-div ">
            <div>
              <div className="blank-flex-div">
                <div className="accordionForm-blank-div"></div>
                <p>Some of our inspiring</p>
              </div>
              <h1 className="accordionForm-heading">
                <span>Success</span> <span className="color">Stories</span>
              </h1>
            </div>
            <div>
              <p>
                Throughout the decade we have been part of some inspiring
                success stories. These success stories motivate us to strive for
                an even better tomorrow.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Carousel className="carousel-width " responsive={responsive}>
            {getDataForCarousel[0].successCart.map((singleCart) => (
              <SuccessStories
                singleCart={singleCart}
                key={singleCart.id}
              ></SuccessStories>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SkillsRecruitment;
