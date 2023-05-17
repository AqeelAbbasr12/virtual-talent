import React from "react";
import "./card.css";

import ButtonFill from "../Buttons/buttonFill";

import { HiArrowCircleRight } from "react-icons/hi";

const Card = (props) => {
  return (
    <div className="card small-card">
      <div className="card-body">
        <div className="text-center">
          <props.icon
            className="small-card-icon"
            size={50}
            color={"var(--theme-orange)"}
            style={{ marginBottom: "15px" }}
          />
        </div>
        <h4 className="card-title text-white text-center">{props.title}</h4>
        <p className="card-text text-center">{props.text}</p>

        <div className="">
          {props.points ? (
            <div
              className="container mt-4"
              style={{
                listStyle: "none",
                color: "white",
              }}
            >
              <div className="d-flex mt-3" style={{ width: "100%" }}>
                <div style={{ marginRight: "30px" }}>
                  <HiArrowCircleRight
                    className="thumb"
                    size={30}
                    color="var(--theme-orange)"
                  />
                </div>
                {props.points[0].point}
              </div>
              <div className="d-flex mt-2">
                <div style={{ marginRight: "30px" }}>
                  <HiArrowCircleRight
                    className="thumb"
                    size={30}
                    color="var(--theme-orange)"
                  />
                </div>
                {props.points[1].point}
              </div>
              <div className="d-flex mt-2">
                <div style={{ marginRight: "30px" }}>
                  <HiArrowCircleRight
                    className="thumb"
                    size={30}
                    color="var(--theme-orange)"
                  />
                </div>
                {props.points[2].point}
              </div>
              <div className="d-flex mt-2">
                <div style={{ marginRight: "30px" }}>
                  <HiArrowCircleRight
                    className="thumb"
                    size={30}
                    color="var(--theme-orange)"
                  />
                </div>
                {props.points[3].point}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <a
          href={props.link}
          className="row text-center mx-5 mt-4"
          style={{
            textDecoration: "none",
            paddingTop: `${props.smallCheck === true ? "28px" : ""}`,
          }}
        >
          <ButtonFill title={props.buttonTitle} white_bg={true} />
        </a>
      </div>
    </div>
  );
};

export default Card;
