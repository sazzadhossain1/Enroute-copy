import React from "react";
import "./EnrouteIndustry.css";
import Rechart from "../Rechart/Rechart";

const EnrouteIndustry = () => {
  return (
    <div>
      {/*  */}
      <div>
        <div className=" leadership-parent-grid-div">
          <div className="leadership-text-color-div">
            <div className="leadership-text-div">
              <div className="focus-flex-div">
                <div className="focus-blank-div"></div>
                <p className="focus-p">
                  Strengthening Organizational People Strategy
                </p>
              </div>
              <h2 className="what-heading">
                Enroute’s Industry-Specific People Solutions
              </h2>
              <p className="whatWeDo-p p-for-pre leader-p">
                In post-pandemic times, a newer challenge in the job market has
                created a shortage of skillful employment options. Organizations
                are in dire need of skilled employees to emerge stronger, more
                agile, more innovative & better able to respond to an
                ever-changing environment.
              </p>
              <p className="whatWeDo-p p-for-pre leader-p">
                Enroute’s industry-specific solutions focus on responding to the
                crisis by focusing on supplying the human resource that is
                compliant with industrial and organizational policies. We also
                focus on the fundamentals of strategic leadership, talent
                culture, and reskilling existing human resources to prepare the
                partner organizations better to solve newer daunting challenges.
              </p>
            </div>
          </div>
          <div>
            <img
              className=" leader-img"
              src="https://static.vecteezy.com/system/resources/previews/026/928/579/non_2x/ai-generative-on-gray-backgrounds-of-five-multiracial-girls-and-guys-smile-look-at-camera-edate-website-ad-diverse-freelancer-webcam-pc-view-easy-convenient-usage-of-app-for-worldwide-comm-photo.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div>
        <div className=" leadership-parent-grid-div">
          <div className="rechart-img-div">
            <img
              className=" leader-img "
              src="https://previews.123rf.com/images/vadimgozhda/vadimgozhda1506/vadimgozhda150604353/41756197-two-young-beautiful-business-women-dressed-formal-shaking-hands-at-office.jpg"
              alt=""
            />
          </div>
          <div className="leadership-text-color-div rechart-text-div">
            <div className="leadership-text-div ">
              <div className="focus-flex-div">
                <div className="focus-blank-div"></div>
                <p className="focus-p">
                  Strengthening Organizational People Strategy
                </p>
              </div>
              <h2 className="what-heading">
                Enroute’s Industry-Specific People Solutions
              </h2>
              <Rechart></Rechart>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default EnrouteIndustry;
