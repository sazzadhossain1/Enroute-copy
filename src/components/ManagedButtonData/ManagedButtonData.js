import React from "react";
import "./ManagedButtonData.css";

const ManagedButtonData = ({ btnData }) => {
  //   console.log(btnData);
  const { imgById, title, btnParagraph, btnParagraphTwo, btnParagraphThree } =
    btnData;
  //   console.log(title);
  return (
    <div className="parent-managedButtonData-div">
      <div className="content-div">
        <div>
          <img className="imgById" src={imgById} alt="" />
        </div>
        <div className="text-managedButtonData">
          <h2 className="btnData-title">{title}</h2>
          <p className="btnData-paragraph">{btnParagraph}</p>
          <p className="btnData-paragraph mt-10">{btnParagraphTwo}</p>
          <p className="btnData-paragraph mt-10">{btnParagraphThree}</p>
        </div>
      </div>
    </div>
  );
};

export default ManagedButtonData;
