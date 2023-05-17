import React, { useState, useEffect } from "react";
import "./navbar.css";

import ButtonFill from "../Buttons/buttonFill";

import logo from "../../assets/Logo/logo.png";
import { useMediaQuery } from "react-responsive";
import { FaBars } from "react-icons/fa";

const Navbar = (props) => {
  const [active, setActive] = useState(1);

  useEffect(() => {
    if (props.dSession === true) setActive(0);
  });

  const mobileNavBar = () => {
    if (document.getElementById("navlinks").style.display === "block") {
      document.getElementById("navlinks").style.display = "none";
    } else document.getElementById("navlinks").style.display = "block";
  };

  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <nav
      id="navbar-top"
      className={`navbar navbar-expand-sm ${
        isMobile === true ? "" : "sticky-top"
      } navbar-light py-3 `}
      style={{ backgroundColor: "white" }}
    >
      <div className="container py-1">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="img" height={70} />
        </a>

        {isMobile === false ? (
          <div
            className="collapse navbar-collapse d-flex flex-row-reverse"
            id="navbar1"
          >
            <ul className="navbar-nav">
              <li className="nav-item" style={{ marginRight: "20px" }}>
                <a
                  className={`nav-link fromLeft ${
                    active === 1 ? "active" : "non-active"
                  }`}
                  href={props.dSession === true ? "/" : "#Home"}
                  onClick={() => setActive(1)}
                >
                  Home
                </a>
              </li>
              <li className="nav-item" style={{ marginRight: "20px" }}>
                <a
                  className={`nav-link fromLeft ${
                    active === 2 ? "active" : "non-active"
                  }`}
                  href={props.dSession === true ? "/" : "#AboutUs"}
                  onClick={() => setActive(2)}
                >
                  About
                </a>
              </li>
              <li className="nav-item" style={{ marginRight: "20px" }}>
                <a
                  className={`nav-link fromLeft ${
                    active === 3 ? "active" : "non-active"
                  }`}
                  href={props.dSession === true ? "/" : "#OurServices"}
                  onClick={() => setActive(3)}
                >
                  Services
                </a>
              </li>
              <li className="nav-item" style={{ marginRight: "20px" }}>
                <a
                  className={`nav-link fromLeft ${
                    active === 4 ? "active" : "non-active"
                  }`}
                  href={props.dSession === true ? "/" : "#Career"}
                  onClick={() => setActive(4)}
                >
                  Career
                </a>
              </li>
              <li className="nav-item" style={{ marginRight: "20px" }}>
                <a
                  className={`nav-link fromLeft ${
                    active === 5 ? "active" : "non-active"
                  }`}
                  href="#ContactUS"
                  onClick={() => setActive(5)}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  href={
                    props.dSession === true ? "#DSession" : "/discovery-session"
                  }
                  onClick={() => setActive(0)}
                >
                  <ButtonFill id="discovery-btn" title="Discovery Session" />
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <i onClick={() => mobileNavBar()}>
              <FaBars color="white" size={23} />
            </i>
          </div>
        )}
      </div>
      {isMobile === true ? (
        <div id="navlinks" className="mt-3">
          <a href={props.dSession === true ? "/" : "#Home"}>Home</a>
          <a href={props.dSession === true ? "/" : "#AboutUs"}>About</a>
          <a href={props.dSession === true ? "/" : "#OurServices"}>Services</a>
          <a href={props.dSession === true ? "/" : "#Career"}>Career</a>
          <a href="#ContactUS">Contact</a>
          <a
            href={props.dSession === true ? "#DSession" : "/discovery-session"}
          >
            Discovery Session
          </a>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
