import React from "react";
import { useLoaderData } from "react-router-dom";
import "./ManagedServiceProduct.css";
import ManagedButtonData from "../ManagedButtonData/ManagedButtonData";
import BtnSuccessCart from "../BtnSuccessCart/BtnSuccessCart";
import Carousel from "react-multi-carousel";

const ManagedServiceProduct = () => {
  const getManageServiceProductApi = useLoaderData();
  const {
    img,
    pTitleById,
    headingOne,
    headingTwo,
    headingThree,
    pFirst,
    pSecond,
    buttonData,
    backgroundImg,
    backgroundTitle,
    secondPartTitle,
    secondPartHeadingOne,
    secondPartHeadingTwo,
    secondPartParagraph,
    buttonSuccessCart,
  } = getManageServiceProductApi;
  console.log(buttonSuccessCart);

  //
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1430 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1430, min: 954 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 954, min: 0 },
      items: 1,
    },
  };
  //
  return (
    <div>
      <div
        className="backgroundTitle-parent-div"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "70vh",
        }}
      >
        <h3 className="backgroundTitle">{backgroundTitle}</h3>
      </div>
      <div className="manageServiceProduct-parent-div">
        <div className="manageServiceProduct-grid-div">
          <div>
            <img className="img-manageServiceProduct" src={img} alt="" />
          </div>
          <div className="manageServiceProduct-text-div">
            <div className="manageServiceProduct-flex-div">
              <div className="blank-manageServiceProduct-div"></div>
              <p className="p-title">{pTitleById}</p>
            </div>
            <h2 className="first-heading-manageServiceProduct">
              <span>{headingOne}</span>{" "}
              <span className="common-color-red">{headingTwo}</span>{" "}
              <span>{headingThree}</span>
            </h2>
            <p className="pFirst">{pFirst}</p>
            <p className="pSecond">{pSecond}</p>
          </div>
        </div>

        <div className="parent-map-div">
          {/*  */}
          <div className="second-part-parent-grid-div">
            <div>
              <div className="second-part-flex-div">
                <div className="second-part-blank-div"></div>
                <p className="secondPartTitle">{secondPartTitle}</p>
              </div>
              <h4 className="secondPartHeading-flex">
                <p className="secondPartHeadingOne">{secondPartHeadingOne}</p>
                <p className="secondPartHeadingTwo">{secondPartHeadingTwo}</p>
              </h4>
            </div>
            <div>
              <p className="secondPartParagraph">{secondPartParagraph}</p>
            </div>
          </div>
          {/*  */}
          {buttonData.map((btnData) => (
            <ManagedButtonData
              btnData={btnData}
              key={btnData.id}
            ></ManagedButtonData>
          ))}
        </div>
      </div>

      {/* Carousel Section */}
      <div>
        <Carousel className="carousel-width" responsive={responsive}>
          {buttonSuccessCart.map((btnSuccessCrt) => (
            <BtnSuccessCart
              btnSuccessCrt={btnSuccessCrt}
              key={btnSuccessCrt.id}
            ></BtnSuccessCart>
          ))}
        </Carousel>
      </div>
      {/*  */}
    </div>
  );
};

export default ManagedServiceProduct;
