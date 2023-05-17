import React from "react";
import "./buttonFill.css";

const ButtonFill = (props) => {
  if (props.white_bg === true) {
    return (
      <button id="buttonfill-white" className="btn">
        {props.title}
      </button>
    );
  }
  return (
    <button id="buttonfill" className="btn">
      {props.title}
    </button>
  );
};

export default ButtonFill;
