import React from "react";
import "./ManagedButtonData.css";

const ManagedButtonData = ({ btnData }) => {
  console.log(btnData);
  const { imgById, title, btnParagraph } = btnData;
  console.log(title);
  return (
    <div>
      <div className="content-div">
        <img className="imgById" src={imgById} alt="" />
        <div>
          <h2>{title}</h2>
          <p>{btnParagraph}</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default ManagedButtonData;
