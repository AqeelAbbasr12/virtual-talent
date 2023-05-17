import React, { useState, useEffect } from "react";
import "./discovery-session.css";

import localhost from "../../utils/constants";

/*Package*/
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Components
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import SmallTitle from "../../components/SmallTitle/smalltitle";
import ButtonFill from "../../components/Buttons/buttonFill";

//Icons
import { HiLocationMarker } from "react-icons/hi";
import { IoMailSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

import { InlineWidget } from "react-calendly";

const DiscoverySession = () => {
  const [f_name, setF_name] = useState("");
  const [l_name, setL_name] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [disable, setDisable] = useState(false);

  useEffect(() => {
    document.title = "Discovery Session";
  }, []);

  const Checks = () => {
    if (f_name !== "") {
      document.getElementById("fname").style.border = "none";
    }
    if (l_name !== "") {
      document.getElementById("lname").style.border = "none";
    }
    if (email !== "") {
      document.getElementById("email").style.border = "none";
    }
    if (subject !== "") {
      document.getElementById("subject").style.border = "none";
    }
    if (message !== "") {
      document.getElementById("message").style.border = "none";
    }

    if (f_name === "") {
      document.getElementById("fname").placeholder = "Please enter first name!";
      document.getElementById("fname").style.border = "1px solid red";
    } else if (l_name === "") {
      document.getElementById("lname").placeholder = "Please enter last name!";
      document.getElementById("lname").style.border = "1px solid red";
    } else if (email === "") {
      document.getElementById("email").placeholder = "Please enter email!";
      document.getElementById("email").style.border = "1px solid red";
    } else if (subject === "") {
      document.getElementById("subject").placeholder = "Please enter subject!";
      document.getElementById("subject").style.border = "1px solid red";
    } else if (message === "") {
      document.getElementById("message").placeholder =
        "Please enter your message!";
      document.getElementById("message").style.border = "1px solid red";
    }

    if (f_name && l_name && email && subject && message !== "") {
      document.getElementById("fname").placeholder = "First name...";
      document.getElementById("lname").placeholder = "Last name...";
      document.getElementById("email").placeholder = "Email...";
      document.getElementById("subject").placeholder = "Subject...";
      document.getElementById("message").placeholder = "Message...";

      setDisable(true);
      SendEmail();
    }
  };

  const SendEmail = () => {
    NotiInfo("Sending...");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("f_name", f_name);
    urlencoded.append("l_name", l_name);
    urlencoded.append("subject", subject);
    urlencoded.append("message", message);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(localhost + "/sendEmail", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true) {
          NotiSuccess(result.message);
          setF_name("");
          setL_name("");
          setEmail("");
          setSubject("");
          setMessage("");

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
    <div>
      {/*Navbar*/}
      <Navbar dSession={true} />
      {/*Navbar end*/}

      {/*Hero*/}
      <div className="discovery-hero container-fluied d-flex align-items-center justify-content-center">
        <div
          className="container-fluied slider-text d-flex flex-column text-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <h1
            className="col-md-12"
            style={{
              fontWeight: "bold",
              color: "white",
              textTransform: "uppercase",
            }}
          >
            Discovery Session
          </h1>
          <p className="mt-2">
            Looking forward to work with Virtual Talent? Select a date to
            discuss business coalition with us.{" "}
          </p>
        </div>
      </div>
      {/*Hero end*/}

      {/*Discovery Session*/}
      <section
        id="DSession"
        className="discovery-seciton container-fluied bg-black "
      >
        <InlineWidget
          url="https://calendly.com/discovervirtualtalent/30min"
          styles={{
            height: "700px",
          }}
          pageSettings={{
            backgroundColor: "2E2E2E",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "f16c19",
            textColor: "FFFFFF",
          }}
        />
      </section>
      {/*Discovery Session end*/}

      {/*Contact us*/}
      <section
        id="ContactUS"
        className="contact-seciton container-fluied bg-black"
        style={{ paddingBottom: "80px" }}
      >
        <div className="container text-center">
          <SmallTitle title="contact us" />
          <h2 className="my-3" style={{ fontWeight: "700" }}>
            Contact <span>Us</span>
          </h2>
        </div>

        <div className="container mt-5" id="faq">
          <div className="row" id="contact-us-section">
            <div className="col-6 text-center">
              <div className="card" id="contactus-card">
                <div className="card-body d-flex flex-column justify-content-center align-items-center ">
                  <IoMailSharp size={35} color="var(--theme-orange)" />
                  <h5 className="m-0 text-white mt-2">Email</h5>
                  <p
                    className="m-0 text-white mt-3"
                    style={{ fontSize: "18px" }}
                  >
                    info@virtual-talent.co
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 text-center">
              <div className="card" id="contactus-card">
                <div className="card-body d-flex justify-content-center align-items-center">
                  <div className="d-flex">
                    <a
                      href="https://www.linkedin.com/company/virtual-talent1/?viewAsMember=true"
                      style={{ marginRight: "50px" }}
                    >
                      <BsLinkedin size={35} color="var(--theme-orange)" />
                    </a>
                    <a href="https://www.instagram.com/virtualtalent01/?hl=en">
                      <BsInstagram size={35} color="var(--theme-orange)" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="card" id="form-card">
            <div className="card-body p-4">
              <div className="row" id="contact-us-inputs">
                <div className="col-6">
                  <h6>First Name</h6>
                  <input
                    placeholder="First name..."
                    className="form-input"
                    id="fname"
                    value={f_name}
                    onChange={(e) => setF_name(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <h6>Last Name</h6>
                  <input
                    placeholder="Last name..."
                    className="form-input"
                    id="lname"
                    value={l_name}
                    onChange={(e) => setL_name(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mt-4" id="contact-us-inputs">
                <div className="col-6">
                  <h6>Email*</h6>
                  <input
                    placeholder="Email..."
                    className="form-input"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <h6>Subject</h6>
                  <input
                    placeholder="Subject..."
                    className="form-input"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-12">
                  <h6>Message*</h6>
                  <textarea
                    placeholder="Message..."
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mt-4 text-center">
                <div className="col-12">
                  <i
                    onClick={() => {
                      disable === false ? Checks() : setDisable(true);
                    }}
                  >
                    <ButtonFill title="SUBMIT" />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Contact end*/}

      {/*Notify*/}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
      {/*Notify end*/}

      {/*Footer*/}
      <Footer dSession={true} />
      {/*Footer end*/}
    </div>
  );
};

export default DiscoverySession;
