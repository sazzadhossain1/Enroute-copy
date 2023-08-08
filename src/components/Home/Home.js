import React from "react";
import Banner from "../Banner/Banner";
import "./Home.css";
import EnrouteInternational from "../EnrouteInternational/EnrouteInternational";
import { useLoaderData } from "react-router-dom";
import ManagedService from "../ManagedService/ManagedService";

const Home = () => {
  const getApis = useLoaderData();
  // console.log(getApis);
  return (
    <div>
      <Banner></Banner>
      <EnrouteInternational></EnrouteInternational>
      <div>
        {getApis.map((getApi) => (
          <ManagedService getApi={getApi} key={getApi._id}></ManagedService>
        ))}
      </div>
    </div>
  );
};

export default Home;
