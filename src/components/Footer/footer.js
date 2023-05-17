import React, { useState } from "react";
import "./footer.css";

/*Package*/
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMediaQuery } from "react-responsive";

/*API*/
import localhost from "../../utils/constants";

/*Icons*/
import { BsInstagram, BsArrowRight, BsLinkedin } from "react-icons/bs";

import Logo from "../../assets/Logo/logo.png";

const Footer = (props) => {
  const isMobile = useMediaQuery({ query: "(min-width: 480px)" });

  const [email, setEmail] = useState("");
  const [disable, setDisable] = useState(false);

  const Checks = () => {
    if (email !== "") {
      document.getElementById("subscribe").style.border = "none";
      document.getElementById("subscribe").placeholder = "Email...";
      setDisable(true);

      Subscribe();
    }
    if (email === "") {
      document.getElementById("subscribe").placeholder =
        "Please enter your email!";
      document.getElementById("subscribe").style.border = "1px solid red";
    }
  };

  const Subscribe = () => {
    NotiInfo("Sending...");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", email);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(localhost + "/subscribe", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          NotiSuccess(result.message);
          setEmail("");

          setDisable(false);
        } else if (result.errors) {
          setTimeout(function () {
            NotiError(result.errors[0].msg);
            setDisable(false);
          }, 4000);
        } else if (result.success === false) {
          setTimeout(function () {
            NotiError(result.message);
            setDisable(false);
          }, 4000);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const NotiSuccess = (text) =>
    toast.success(text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const NotiError = (text) =>
    toast.error(text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const NotiInfo = (text) =>
    toast.info(text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="footer container-fluied ">
      <div className="container-fluied py-3">
        <div
          className="top-footer container d-flex"
          style={{
            paddingTop: "110px",
            paddingBottom: "80px",
          }}
        >
          <div className="col-3">
            <img
              src={Logo}
              alt="img"
              height={60}
              style={{ marginBottom: "25px" }}
            />
            <div style={{ marginBottom: "25px" }}>
              <p className="col-8" id="slogan" style={{ color: "white" }}>
                We do head hunting so you don't have to.
              </p>
            </div>

            <div className="d-flex">
              <a href="https://www.linkedin.com/company/virtual-talent1/?viewAsMember=true">
                <BsLinkedin
                  className="nav-icon"
                  size={15}
                  color={"white"}
                  style={{ marginRight: "20px" }}
                />
              </a>
              <a href="https://www.instagram.com/virtualtalent01/?hl=en">
                <BsInstagram className="nav-icon" size={15} color={"white"} />
              </a>
            </div>
          </div>

          <div
            className="col-2 d-flex flex-column"
            style={{ justifyContent: "space-between" }}
          >
            <a href={props.dSession === true ? "/" : "#Home"}>
              <p>Home</p>
            </a>
            <a href={props.dSession === true ? "/" : "#AboutUs"}>
              <p>About Us</p>
            </a>
            <a href={props.dSession === true ? "/" : "#RoadMap"}>
              <p>Road Map</p>
            </a>
            <a href={props.dSession === true ? "/" : "#OurServices"}>
              <p>Our Services</p>
            </a>
          </div>

          <div
            className="col-2 d-flex flex-column"
            style={{ justifyContent: "space-between" }}
          >
            <a href={props.dSession === true ? "/" : "#Testimonials"}>
              <p>Testimonials</p>
            </a>
            <a href={props.dSession === true ? "/" : "#Career"}>
              <p>Career</p>
            </a>
            <a href={props.dSession === true ? "/" : "#WhyVT"}>
              <p>Why Virtual Talent</p>
            </a>
            <a href={props.dSession === true ? "/" : "#FAQ"}>
              <p>F.A.Q</p>
            </a>
            <a href="#ContactUS">
              <p>Contact Us</p>
            </a>
          </div>

          <div
            id="disc-section"
            className="col-2 d-flex flex-column"
            style={{ justifyContent: "space-between" }}
          >
            <p className="m-0 col-9" id="disc-title">
              Select a date to discuss business coalition with us.
            </p>
            <a
              href={
                props.dSession === true ? "#DSession" : "/discovery-session"
              }
            >
              <div className="d-flex view-map" style={{ alignItems: "center" }}>
                <p className="view">Discovery Session</p>
                <BsArrowRight
                  style={{ marginLeft: "8px" }}
                  color={"var(--theme-orange)"}
                />
              </div>
            </a>
          </div>

          <div
            className="col-3 d-flex flex-column email-sub"
            id="newsletter"
            style={{ justifyContent: "space-between" }}
          >
            <h3>Newsletter</h3>
            <div>
              <p className="text-white">Subscribe right now!</p>
            </div>

            <div className="d-flex">
              <input
                id="subscribe"
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={() => {
                  disable === false ? Checks() : setDisable(true);
                }}
                className="btn"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluied bottom-footer">
        <div className="container py-3">
          <small style={{ fontSize: "12px", color: "var(--theme-grey)" }}>
            ©Copyright Virtual Talent. All Rights Reserved
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
