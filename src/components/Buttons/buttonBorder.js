import React from "react";
import "./buttonBorder.css";

/*Icons*/
import { BiPlayCircle } from "react-icons/bi";

const ButtonBorder = (props) => {
  return (
    <button id="buttonBorder" className="btn ">
      {props.video === true ? (
        <i style={{ marginRight: "5px" }}>
          <BiPlayCircle
            className="playIcon"
            size={20}
            color={"var(--theme-orange)"}
          />
        </i>
      ) : (
        ""
      )}

      {props.title}
    </button>
  );
};

export default ButtonBorder;
