import React from "react";
import { useLoaderData } from "react-router-dom";

const RecruitmentButtonDataById = () => {
  const getDataById = useLoaderData();
  const { backgroundTitle, backgroundImg } = getDataById;
  console.log(backgroundTitle);
  return <div>{backgroundTitle}</div>;
};

export default RecruitmentButtonDataById;
