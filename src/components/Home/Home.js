import React from "react";
import Banner from "../Banner/Banner";
import "./Home.css";
import EnrouteInternational from "../EnrouteInternational/EnrouteInternational";
import { useLoaderData } from "react-router-dom";
import ManagedService from "../ManagedService/ManagedService";
import Recruitment from "../Recruitment/Recruitment";
import ExecutiveEducation from "../ExecutiveEducation/ExecutiveEducation";
import SuccessStories from "../SuccessStories/SuccessStories";
import OurSuccessNumber from "../OurSuccessNumber/OurSuccessNumber";

//
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//

const Home = () => {
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
  const getApis = useLoaderData();
  console.log(getApis);
  return (
    <div>
      <Banner></Banner>
      <EnrouteInternational></EnrouteInternational>
      <div>
        {getApis.map((getApi) => (
          <ManagedService getApi={getApi} key={getApi._id}></ManagedService>
        ))}
      </div>
      <div>
        {getApis[0].secondPart.map((sp) => (
          <Recruitment sp={sp} key={sp._id}></Recruitment>
        ))}
      </div>

      <div>
        {getApis[0].thirdPart.map((tp) => (
          <ExecutiveEducation tp={tp} key={tp._id}></ExecutiveEducation>
        ))}
      </div>
      <OurSuccessNumber></OurSuccessNumber>

      <div className="successStories-parent-div">
        <div className="success-flex-div">
          <div className="success-blank-div"></div>
          <p className="p">Some of out inspiring</p>

          <div className="success-blank-div"></div>
        </div>
        <h2 className="success-heading">Success Stories</h2>
        <div>
          {/* className="successStories-grid-div" */}
          {/* {getApis[0].successCart.map((singleCart) => (
            <SuccessStories
              singleCart={singleCart}
              key={singleCart.id}
            ></SuccessStories>
          ))} */}
          <Carousel className="carousel-width" responsive={responsive}>
            {getApis[0].successCart.map((singleCart) => (
              <SuccessStories
                singleCart={singleCart}
                key={singleCart.id}
              ></SuccessStories>
            ))}
          </Carousel>
          ;
        </div>
      </div>
    </div>
  );
};

export default Home;
