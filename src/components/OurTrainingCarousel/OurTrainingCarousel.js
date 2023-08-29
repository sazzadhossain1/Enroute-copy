import React from "react";
import "./OurTrainingCarousel.css";
import Carousel from "react-multi-carousel";

const OurTrainingCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1224 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1224, min: 864 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 864, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="ourTrainingCarousel-parent-div">
      <div className="ourTrainingCarousel-grid-div">
        <div>
          <div className="Organizational-flex-div">
            <div className="Organizational-blank-div"></div>
            <p>Organizational Development Assurance With</p>
          </div>
          <h1 className="ourTrainingCarousel-heading">
            <span>
              Enroute Signature <span className="courses">Courses</span>
            </span>
          </h1>
        </div>
        <div>
          <p className="ourSignature">
            Our signature customized courses are developed and delivered
            according to our proven customized personal trainer programs. This
            tried and tested process ensures maximum output
          </p>
        </div>
      </div>
      <div className="carousel-div">
        <Carousel responsive={responsive}>
          <div className="carousel-cart">
            <h3 className="ourTrainingCarousel-heading-h3">
              Strategic Negotiation
            </h3>
            <div className="ourTrainingCarousel-border-div"></div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Fundamentals of Negotiation</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Why negotiate?</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>3D Model</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Best Alternative to Negotiated Agreement</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Zone of Possible Agreement</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Playing with your tactics</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Handling Ethical issues</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Negotiation secrets</p>
            </div>
          </div>
          <div className="carousel-cart">
            <h3 className="ourTrainingCarousel-heading-h3">
              Strategic Negotiation
            </h3>
            <div className="ourTrainingCarousel-border-div"></div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Fundamentals of Negotiation</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Why negotiate?</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>3D Model</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Best Alternative to Negotiated Agreement</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Zone of Possible Agreement</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Playing with your tactics</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Handling Ethical issues</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Negotiation secrets</p>
            </div>
          </div>
          <div className="carousel-cart">
            <h3 className="ourTrainingCarousel-heading-h3">
              Strategic Negotiation
            </h3>
            <div className="ourTrainingCarousel-border-div"></div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Fundamentals of Negotiation</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Why negotiate?</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>3D Model</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Best Alternative to Negotiated Agreement</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Zone of Possible Agreement</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Playing with your tactics</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Handling Ethical issues</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Negotiation secrets</p>
            </div>
          </div>
          <div className="carousel-cart">
            <h3 className="ourTrainingCarousel-heading-h3">
              Strategic Negotiation
            </h3>
            <div className="ourTrainingCarousel-border-div"></div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Fundamentals of Negotiation</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Why negotiate?</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>3D Model</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Best Alternative to Negotiated Agreement</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Zone of Possible Agreement</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Playing with your tactics</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Handling Ethical issues</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Negotiation secrets</p>
            </div>
          </div>
          <div className="carousel-cart">
            <h3 className="ourTrainingCarousel-heading-h3">
              Strategic Negotiation
            </h3>
            <div className="ourTrainingCarousel-border-div"></div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Fundamentals of Negotiation</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Why negotiate?</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>3D Model</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Best Alternative to Negotiated Agreement</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Zone of Possible Agreement</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Playing with your tactics</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Handling Ethical issues</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Negotiation secrets</p>
            </div>
          </div>
          <div className="carousel-cart">
            <h3 className="ourTrainingCarousel-heading-h3">
              Strategic Negotiation
            </h3>
            <div className="ourTrainingCarousel-border-div"></div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Fundamentals of Negotiation</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Why negotiate?</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>3D Model</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Best Alternative to Negotiated Agreement</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Zone of Possible Agreement</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Playing with your tactics</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Handling Ethical issues</p>
            </div>
            <div className="ourTrainingCarousel-flex-div">
              <img
                className="tick-mark-logo"
                src="https://static.vecteezy.com/system/resources/previews/014/455/871/large_2x/green-check-mark-icon-on-transparent-background-free-png.png"
                alt=""
              />
              <p>Negotiation secrets</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default OurTrainingCarousel;
