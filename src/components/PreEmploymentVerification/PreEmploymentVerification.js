import React from "react";
import "./PreEmploymentVerification.css";
import { useLoaderData } from "react-router-dom";
import Carousel from "react-multi-carousel";
import SuccessStories from "../SuccessStories/SuccessStories";

const PreEmploymentVerification = () => {
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
  console.log(getDataForCarousel);
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
      {/*  */}
      <div className="whatWeDo-grid-div common-parent">
        <div className="text-container-main-parent-div pre">
          <div className="text-content-parent-div">
            <div className="focus-flex-div">
              <div className="focus-blank-div"></div>
              <p className="focus-p">
                Combined with Business Intelligence & Legitimacy
              </p>
            </div>
            <h2 className="what-heading">We have a strong network with</h2>
            <p className="whatWeDo-p p-for-pre">
              Enroute is one of the renowned employee background verification
              companies in Bangladesh. Our well-organized operational process
              and network with the top government organizations give us an edge
              in reliability.
            </p>
            <div>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Bangladesh Election Commission</span>
              </p>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Different Government Bodies</span>
              </p>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Educational Board</span>
              </p>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Road Transport Authorities</span>
              </p>

              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Public, Private & National Universities</span>
              </p>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Reputed Associations & Clubs</span>
              </p>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Different Organizations</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="whatWeDo-image pre-img "
            src="https://s7d1.scene7.com/is/image/CENODS/09917-feature4-network?$responsive$&wid=700&qlt=90,0&resMode=sharp2"
            alt=""
          />
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="whatWeDo-grid-div pre-parent common-parent">
        <div>
          <img
            className="whatWeDo-image pre-img"
            src="https://www.forbesindia.com/media/images/2022/Jul/img_190601_professionalnetworking.jpg"
            alt=""
          />
        </div>
        <div className="text-container-main-parent-div pre">
          <div className="text-content-parent-div">
            <div className="focus-flex-div">
              <div className="focus-blank-div"></div>
              <p className="focus-p">Our Process Is Sophisticatedly Designed</p>
            </div>
            <h2 className="what-heading">
              Enroute’s Leading Verification Services
            </h2>

            <div>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Educational background Certification</span>
              </p>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Medical Verification</span>
              </p>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Previous employment reference checking</span>
              </p>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Social Reputation Verification</span>
              </p>

              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Social Media Footprint Certification</span>
              </p>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Driving License / National ID Card Verification</span>
              </p>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Permanent Address Verification</span>
              </p>
              <p className="flex-p">
                <img
                  className="tick-mark-logo"
                  src="https://thumbs.dreamstime.com/b/green-check-mark-icon-tick-symbol-green-color-vector-illustration-green-check-mark-icon-tick-symbol-green-color-vector-137770439.jpg"
                  alt=""
                />
                <span>Immigration Verification</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
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

export default PreEmploymentVerification;
