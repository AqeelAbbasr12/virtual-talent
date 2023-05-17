import React from "react";
import "./teamCard.css";

import image1 from "../../assets/images/team-1.jpg";

const TeamCard = (props) => {
  return (
    <div>
      <div className="card" id="team-card">
        <img className="card-img-top" src={image1} alt="img" />
        <div className="card-body p-4">
          <h5 className="card-title" style={{ color: "white" }}>
            {props.title}
          </h5>
          <small
            className="card-text"
            style={{ fontWeight: "300", color: "white" }}
          >
            {props.sub_title}
          </small>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
