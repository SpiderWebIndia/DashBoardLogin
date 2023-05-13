import React from "react";

function RightSidebar(props) {
  return (
    <>
      {" "}
      <div className="RgtCl12">
        <div className="FirtSec">
          <h3> {props.title1} </h3>
          <div className="PosrelShw"></div>
        </div>

        <div className="SecDta">
          <h3> {props.title2} </h3>
          <div className="PosrelShw"></div>
        </div>
      </div>{" "}
    </>
  );
}

export default RightSidebar;
