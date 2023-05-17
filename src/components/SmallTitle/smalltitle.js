import React from "react";
import "./smalltitle.css";

const SmallTitle = (props) => {
  return (
    <div className="btn" id="smallTitle">
      <small>{props.title}</small>
    </div>
  );
};

export default SmallTitle;
