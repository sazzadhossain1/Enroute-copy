import React from "react";
import "./SuccessStories.css";
import { Link } from "react-router-dom";

const SuccessStories = ({ singleCart }) => {
  console.log(singleCart);
  const { img, heading } = singleCart;

  return (
    <div className="">
      <div className="successStories-child-div">
        <img className="img-successStories" src={img} alt="" />
        <div className="text-successStories">
          <p className="heading-successStories">{heading}</p>
        </div>
        <div className="div-flex">
          <Link className="see-more-btn">See More</Link>
          <button>
            <img
              className="icon-successStories"
              src="https://assets-global.website-files.com/60085ab794a530634c4e73ce/60104e685c77205c5a73b589_arrow-right.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
