import React from "react";
import "./SuccessStories.css";

const SuccessStories = ({ singleCart }) => {
  console.log(singleCart);
  const { img, heading } = singleCart;

  return (
    <div className="">
      <div>
        <img src={img} alt="" />
        <p>{heading}</p>
      </div>
    </div>
  );
};

export default SuccessStories;
