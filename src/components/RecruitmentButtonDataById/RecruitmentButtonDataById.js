import React from "react";
import { useLoaderData } from "react-router-dom";

const RecruitmentButtonDataById = () => {
  const getDataById = useLoaderData();
  console.log(getDataById);
  return <div>get by id</div>;
};

export default RecruitmentButtonDataById;
