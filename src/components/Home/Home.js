import React from "react";
import Banner from "../Banner/Banner";
import "./Home.css";
import EnrouteInternational from "../EnrouteInternational/EnrouteInternational";
import { useLoaderData } from "react-router-dom";
import ManagedService from "../ManagedService/ManagedService";
import Recruitment from "../Recruitment/Recruitment";
import ExecutiveEducation from "../ExecutiveEducation/ExecutiveEducation";
import SuccessStories from "../SuccessStories/SuccessStories";

const Home = () => {
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
      <SuccessStories></SuccessStories>
    </div>
  );
};

export default Home;
