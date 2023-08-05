import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://enroute.com.bd/wp-content/uploads/2022/05/home-slide-recruitment.jpg"
          className="w-full"
          alt=""
        />
        <div className="banner-container absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <div>
            <div className="banner-p-text-parent-div">
              <div className="banner-blank-div"></div>
              <p className="banner-p-text">
                Formulating Competitive HR Advantage
              </p>
              <div className="banner-blank-div"></div>
            </div>

            <h3 className="banner-specialized">
              Specialized{" "}
              <span className="banner-human-color-text">
                Human <br /> Resource{" "}
              </span>{" "}
              solution
            </h3>
            <p className="banner-p-text mt-7 mb-7">
              We take a bold approach to formulate and implement HR <br />{" "}
              strategies for competitive advantage
            </p>
            <button className="banner-get-start-btn">GET STARTED</button>
          </div>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://enroute.com.bd/wp-content/uploads/2022/05/home-slide-managed-service.jpg"
          className="w-full"
          alt=""
        />
        <div className="banner-container absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <div>
            <div className="banner-p-text-parent-div">
              <div className="banner-blank-div"></div>
              <p className="banner-p-text">
                Formulating Competitive HR Advantage
              </p>
              <div className="banner-blank-div"></div>
            </div>

            <h3 className="banner-specialized">
              Specialized{" "}
              <span className="banner-human-color-text">
                Human <br /> Resource{" "}
              </span>{" "}
              solution
            </h3>
            <p className="banner-p-text mt-7 mb-7">
              We take a bold approach to formulate and implement HR <br />{" "}
              strategies for competitive advantage
            </p>
            <button className="banner-get-start-btn">GET STARTED</button>
          </div>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://enroute.com.bd/wp-content/uploads/2022/05/home-slide-executive-edu.jpg"
          className="w-full"
          alt=""
        />
        <div className="banner-container absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <div>
            <div className="banner-p-text-parent-div">
              <div className="banner-blank-div"></div>
              <p className="banner-p-text">
                Formulating Competitive HR Advantage
              </p>
              <div className="banner-blank-div"></div>
            </div>

            <h3 className="banner-specialized">
              Specialized{" "}
              <span className="banner-human-color-text">
                Human <br /> Resource{" "}
              </span>{" "}
              solution
            </h3>
            <p className="banner-p-text mt-7 mb-7">
              We take a bold approach to formulate and implement HR <br />{" "}
              strategies for competitive advantage
            </p>
            <button className="banner-get-start-btn">GET STARTED</button>
          </div>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://enroute.com.bd/wp-content/uploads/2022/05/home-slide-consulting.jpg"
          className="w-full"
          alt=""
        />
        <div className="banner-container absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <div>
            <div className="banner-p-text-parent-div">
              <div className="banner-blank-div"></div>
              <p className="banner-p-text">
                Formulating Competitive HR Advantage
              </p>
              <div className="banner-blank-div"></div>
            </div>

            <h3 className="banner-specialized">
              Specialized{" "}
              <span className="banner-human-color-text">
                Human <br /> Resource{" "}
              </span>{" "}
              solution
            </h3>
            <p className="banner-p-text mt-7 mb-7">
              We take a bold approach to formulate and implement HR <br />{" "}
              strategies for competitive advantage
            </p>
            <button className="banner-get-start-btn">GET STARTED</button>
          </div>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
