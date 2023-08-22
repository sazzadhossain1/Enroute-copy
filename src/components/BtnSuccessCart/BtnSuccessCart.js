import React from "react";
import { Link } from "react-router-dom";

const BtnSuccessCart = ({ btnSuccessCrt }) => {
  console.log(btnSuccessCrt);
  const { heading, img } = btnSuccessCrt;
  return (
    <div className=" single-parent-successStories-div">
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

export default BtnSuccessCart;
