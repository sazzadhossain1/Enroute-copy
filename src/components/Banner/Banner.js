import React from "react";
import "./Banner.css";
import Header from "../Header/Header";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Pagination, Navigation, HashNavigation } from "swiper/modules";

const Banner = () => {
  return (
    // <div>
    //   <Swiper
    //     spaceBetween={30}
    //     hashNavigation={{
    //       watchState: true,
    //     }}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     navigation={true}
    //     modules={[Pagination, Navigation, HashNavigation]}
    //     className="mySwiper"
    //   >
    //     <SwiperSlide data-hash="slide1">
    //       <img
    //         src="https://enroute.com.bd/wp-content/uploads/2022/05/home-slide-recruitment.jpg"
    //         alt=""
    //       />
    //     </SwiperSlide>
    //     <SwiperSlide data-hash="slide2">
    //       <img
    //         src="https://enroute.com.bd/wp-content/uploads/2022/05/home-slide-managed-service.jpg"
    //         alt=""
    //       />
    //     </SwiperSlide>
    //     <SwiperSlide data-hash="slide3">
    //       <img
    //         src="https://enroute.com.bd/wp-content/uploads/2022/05/home-slide-executive-edu.jpg"
    //         alt=""
    //       />
    //     </SwiperSlide>
    //     <SwiperSlide data-hash="slide4">
    //       <img
    //         src="https://enroute.com.bd/wp-content/uploads/2022/05/home-slide-consulting.jpg"
    //         alt=""
    //       />
    //     </SwiperSlide>
    //   </Swiper>
    // </div>
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://enroute.com.bd/wp-content/uploads/2022/05/home-slide-recruitment.jpg"
          className="w-full"
          alt=""
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <div>
            <div>
              <div></div>
              <p>Formulating Competitive HR Advantage</p>
              <div></div>
            </div>

            <h3>
              Specialized <span>Human Resource </span> solution
            </h3>
            <p>
              We take a bold approach to formulate and implement HR strategies
              for competitive advantage
            </p>
            <button>GET STARTED</button>
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
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
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
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
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
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
