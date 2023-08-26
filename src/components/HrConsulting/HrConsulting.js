import React from "react";
import "./HrConsulting.css";
import AccordionForm from "../AccordionForm/AccordionForm";
import { useLoaderData } from "react-router-dom";
import Carousel from "react-multi-carousel";
import SuccessStories from "../SuccessStories/SuccessStories";

const HrConsulting = () => {
  const getDataForCarousel = useLoaderData();
  console.log(getDataForCarousel[0].successCart);

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
      <div>
        <div className="accordionForm-service-grid-div for-carousel">
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
              Throughout the decade we have been part of some inspiring success
              stories. These success stories motivate us to strive for an even
              better tomorrow.
            </p>
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

export default HrConsulting;
