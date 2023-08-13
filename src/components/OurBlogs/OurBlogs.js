import React from "react";
import { Link } from "react-router-dom";
import "./OurBlogs.css";

const OurBlogs = ({ ourBlog }) => {
  console.log(ourBlog);
  const { comments, enoute, img, title } = ourBlog;
  return (
    <div className="single-cart-ourBlog-div">
      <img src={img} alt="" />
      <div className="text-ourBlog-div">
        <span className="text-link">
          BY <Link>{enoute}</Link> <Link>0 {comments}</Link>
        </span>
        <h3 className="title">{title}</h3>
        <button className="read-btn">READ MORE...</button>
      </div>
    </div>
  );
};

export default OurBlogs;
