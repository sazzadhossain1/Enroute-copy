import React from "react";
import { useLoaderData } from "react-router-dom";

const RecruitmentButtonDataById = () => {
  const getDataById = useLoaderData();
  const { backgroundTitle, backgroundImg } = getDataById;
  console.log(backgroundTitle);
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "70vh",
      }}
    >
      {backgroundTitle}
    </div>
  );
};

export default RecruitmentButtonDataById;
