import React, { useState, useEffect } from "react";
import "./home.css";

/*Package*/
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/*API*/
import localhost from "../../utils/constants";

/*Components*/
import Navbar from "../../components/Navbar/navbar";
import Card from "../../components/Cards/card";

/*Components*/
import ButtonFill from "../../components/Buttons/buttonFill";
import SmallTitle from "../../components/SmallTitle/smalltitle";
import Footer from "../../components/Footer/footer";
import Carousel from "../../components/Carousel/carousel";
import Slider from "../../components/Slider/Slider";

/*Images*/
import whyUs from "../../assets/images/image13.jpg";
import career from "../../assets/images/career.jpg";
import aboutUs from "../../assets/images/aboutImg.jpg";
import roadmap from "../../assets/images/roadmap.jpg";

/*Icons*/
import { FaCalculator, FaPaintBrush, FaBook } from "react-icons/fa";
import { MdArchitecture } from "react-icons/md";
import { SiGoogleassistant } from "react-icons/si";
import { IoMailSharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { HiArrowCircleRight } from "react-icons/hi";
import { BsInstagram, BsLinkedin, BsFillPhoneFill } from "react-icons/bs";

const Home = () => {
  const [f_name, setF_name] = useState("");
  const [l_name, setL_name] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [disable, setDisable] = useState(false);

  useEffect(() => {
    document.title = "Virtual Talent";
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

  const Customer_Service_VA = [
    {
      point: "Dealing with customer inquiries",
    },
    {
      point: "Processing customer orders",
    },
    {
      point: "Managing the shipment of products",
    },
    {
      point: "Coordinating with logistics",
    },
    {
      point: "Keeping records",
    },
    {
      point: "Reply to customer concerns",
    },
  ];

  const Administrative_Support = [
    {
      point: "Email & Inbox Management",
    },
    {
      point: "Research",
    },
    {
      point: "Drafting Templates",
    },
    {
      point: "Essential Paperwork",
    },
    {
      point: "Managing Diaries",
    },
    {
      point: "Arranging & Organizing meetings",
    },
  ];

  const Graphic_Design = [
    {
      point: "Design Marketing Material",
    },
    {
      point: "Banners & Templates for Social Media",
    },
    {
      point: "Website Design",
    },
    {
      point: "Create other Graphic for Marketing",
    },
    {
      point: "Design for Blogs",
    },
    {
      point: "Logos & Photo Editing",
    },
  ];

  const Social_Media_Management = [
    {
      point: "Maintaining Social Media Accounts",
    },
    {
      point: "Scheduling & Planning",
    },
    {
      point: "Actively Posting on SM Platforms",
    },
    {
      point: "Engaging with Followers",
    },
    {
      point: "Running Campaigns on SM Platforms",
    },
    {
      point: "Providing Content for SM Post",
    },
  ];

  const Book_Keeper = [
    {
      point: "Daily Record Keeping of Transactions",
    },
    {
      point: "Bank Reconciliation",
    },
    {
      point: "Data Entry using book keeping software’s i.e. QuickBooks",
    },
    {
      point: "Accounts Payable Processing",
    },
    {
      point: "Accounts Receivable Processing",
    },
    {
      point: "PAYROLL Processing",
    },
  ];

  const Architecture_Technologist = [
    {
      point: "Prepare Technical Drawings",
    },
    {
      point: "Prepare Architecture drafting",
    },
    {
      point: "Model 3D Rendering of space",
    },
    {
      point: "Landscape design & Retail design",
    },
    {
      point: "Expertise in AutoCAD, Lumion, Revit, V-ray, etc.",
    },
    {
      point: "Projecting plans into real-life experience",
    },
  ];

  return (
    <div className="home">
      {/*Navbar*/}
      <Navbar />
      {/*Navbar end*/}

      {/*Carousel*/}
      <div id="Home" className="container-fluied">
        <Carousel />
      </div>
      {/*Carousel end*/}

      {/*Cards*/}
      <section className="cards-seciton container-fluied bg-black">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="card small-card">
                <div className="card-body">
                  <div className="text-center">
                    <BiSupport
                      className="small-card-icon"
                      size={50}
                      color={"var(--theme-orange)"}
                      style={{ marginBottom: "15px" }}
                    />
                  </div>
                  <h4 className="card-title text-white text-center">
                    Customer Service VA’s
                  </h4>
                  <a
                    href="#OurServices"
                    className="row text-center mx-5 mt-4"
                    style={{ textDecoration: "none" }}
                  >
                    <ButtonFill title="Learn more" white_bg={true} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card small-card">
                <div className="card-body">
                  <div className="text-center">
                    <FaPaintBrush
                      className="small-card-icon"
                      size={50}
                      color={"var(--theme-orange)"}
                      style={{ marginBottom: "15px" }}
                    />
                  </div>
                  <h4 className="card-title text-white text-center">
                    Graphic Design VA’s
                  </h4>
                  <a
                    href="#OurServices"
                    className="row text-center mx-5 mt-4"
                    style={{ textDecoration: "none" }}
                  >
                    <ButtonFill title="Learn more" white_bg={true} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card small-card">
                <div className="card-body">
                  <div className="text-center">
                    <BsFillPhoneFill
                      className="small-card-icon"
                      size={50}
                      color={"var(--theme-orange)"}
                      style={{ marginBottom: "15px" }}
                    />
                  </div>
                  <h4 className="card-title text-white text-center">
                    Social Media Management VA’s
                  </h4>
                  <a
                    href="#OurServices"
                    className="row text-center mx-5 mt-4"
                    style={{ textDecoration: "none" }}
                  >
                    <ButtonFill title="Learn more" white_bg={true} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-4">
              <div className="card small-card">
                <div className="card-body">
                  <div className="text-center">
                    <SiGoogleassistant
                      className="small-card-icon"
                      size={50}
                      color={"var(--theme-orange)"}
                      style={{ marginBottom: "15px" }}
                    />
                  </div>
                  <h4 className="card-title text-white text-center">
                    Administrative Support VA’s
                  </h4>
                  <a
                    href="#OurServices"
                    className="row text-center mx-5 mt-4"
                    style={{ textDecoration: "none" }}
                  >
                    <ButtonFill title="Learn more" white_bg={true} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card small-card">
                <div className="card-body">
                  <div className="text-center">
                    <FaBook
                      className="small-card-icon"
                      size={50}
                      color={"var(--theme-orange)"}
                      style={{ marginBottom: "15px" }}
                    />
                  </div>
                  <h4 className="card-title text-white text-center">
                    Book Keeper & Payroll Specialist VA’s
                  </h4>
                  <a
                    href="#OurServices"
                    className="row text-center mx-5 mt-4"
                    style={{ textDecoration: "none" }}
                  >
                    <ButtonFill title="Learn more" white_bg={true} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card small-card">
                <div className="card-body">
                  <div className="text-center">
                    <MdArchitecture
                      className="small-card-icon"
                      size={50}
                      color={"var(--theme-orange)"}
                      style={{ marginBottom: "15px" }}
                    />
                  </div>
                  <h4 className="card-title text-white text-center">
                    Architecture Technologist VA’s
                  </h4>
                  <a
                    href="#OurServices"
                    className="row text-center mx-5 mt-4"
                    style={{ textDecoration: "none" }}
                  >
                    <ButtonFill title="Learn more" white_bg={true} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Cards end*/}

      {/*About*/}
      <section
        id="AboutUs"
        className="container-fluied pb-5"
        style={{ backgroundColor: "black" }}
      >
        <div className="container text-center">
          <SmallTitle title="about" />
          <h2 className="my-3" style={{ fontWeight: "700" }}>
            About <span> Us</span>
          </h2>
          <div className="d-flex justify-content-center">
            <p
              className="col-md-10"
              style={{
                lineHeight: "28px",
              }}
            >
              Virtual Talent is all about offering incredible{" "}
              <span>Talent</span> across borders to meet the demands of
              businesses, allowing owners to step back from the hassles of
              <span-blue> recruiting,</span-blue>
              <span-blue> training</span-blue> and
              <span-blue> liability</span-blue>.
            </p>
          </div>
        </div>

        <div className="container mt-5" id="about">
          <div className="row" id="about-data">
            <div
              className="col-6 d-flex align-items-center"
              style={{ justifyContent: "flex-end" }}
            >
              <img
                className="aboutImg"
                src={aboutUs}
                alt="img"
                style={{
                  background:
                    "linear-gradient(45deg, rgba(0, 0, 0, 0.589) 0%, rgba(0, 0, 0, 0.698) 100%)",
                }}
              />
            </div>

            <div className="col-6 p-3">
              <p
                className="mb-2 col-md-10"
                style={{
                  lineHeight: "28px",
                  textAlign: "justify",
                }}
              >
                We began operations in 2021, and since then, we have assisted
                several businesses in minimizing their costs, and we continue to
                do so.
                <br />
                <br />
                We operate under 6 Ace Niches,
              </p>

              <div className="row">
                <div className="col-6">
                  <div className="row mt-4" id="about-icon-holder">
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <i id="circle-bg-icon">
                        <BiSupport size={20} color={"var(--theme-orange)"} />
                      </i>
                    </div>
                    <div className="col-10">
                      <h6 className="text-white mb-2">
                        <b>Customer Service</b>
                      </h6>
                      <small className="text-white">
                        Instead of focusing on the competition, focus on the
                        customer - Scott Cook
                      </small>
                    </div>
                  </div>

                  <div className="row mt-5" id="about-icon-holder">
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <i id="circle-bg-icon">
                        <FaPaintBrush size={20} color={"var(--theme-orange)"} />
                      </i>
                    </div>
                    <div className="col-10">
                      <h6 className="text-white mb-2">
                        <b>Graphic Design</b>
                      </h6>
                      <small className="text-white">
                        Good design is good business - Thomas Watson
                      </small>
                    </div>
                  </div>

                  <div className="row mt-5" id="about-icon-holder">
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <i id="circle-bg-icon">
                        <BsFillPhoneFill
                          size={20}
                          color={"var(--theme-orange)"}
                        />
                      </i>
                    </div>
                    <div className="col-10">
                      <h6 className="text-white mb-2">
                        <b>Social Media Management</b>
                      </h6>
                      <small className="text-white">
                        Social media is about sociology and psychology more than
                        technology - Brian Solis
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row mt-4" id="about-icon-holder">
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <i id="circle-bg-icon">
                        <SiGoogleassistant
                          size={20}
                          color={"var(--theme-orange)"}
                        />
                      </i>
                    </div>
                    <div className="col-10">
                      <h6 className="text-white mb-2">
                        <b>Administrative Support</b>
                      </h6>
                      <small className="text-white">
                        How we spend our hours is how we spend our lives - Laura
                        Vanderkam
                      </small>
                    </div>
                  </div>

                  <div className="row mt-5" id="about-icon-holder">
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <i id="circle-bg-icon">
                        <FaBook size={20} color={"var(--theme-orange)"} />
                      </i>
                    </div>
                    <div className="col-10">
                      <h6 className="text-white mb-2">
                        <b>Book Keeper & Payroll Specialist</b>
                      </h6>
                      <small className="text-white">
                        A good accountant is a good poet. He appreciates the
                        true value of things - Robert Frost
                      </small>
                    </div>
                  </div>

                  <div className="row mt-5" id="about-icon-holder">
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <i id="circle-bg-icon">
                        <MdArchitecture
                          size={20}
                          color={"var(--theme-orange)"}
                        />
                      </i>
                    </div>
                    <div className="col-10">
                      <h6 className="text-white mb-2">
                        <b>Architecture Technologist</b>
                      </h6>
                      <small className="text-white">
                        We shape our buildings: thereafter they shape us -
                        Winston Churchill
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About end*/}

      {/*Why us*/}
      <div id="WhyVT" className="whyus-seciton container-fluied bg-black my-4">
        <div style={{ display: "flex" }} id="why-choose-us">
          <div className="col-6">
            <img
              src={whyUs}
              alt="img"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="col-6 d-flex flex-column p-5">
            <div className="container">
              <div>
                <SmallTitle title="Why us" />
              </div>
              <h2 className="my-3 mt-4 pt-2" style={{ fontWeight: "700" }}>
                Why Virtual<span> Talent</span>
              </h2>
              <p className="m-0 col-11" style={{ textAlign: "justify" }}>
                The core proposition of Virtual Talent is to provide
                <span> skilled </span>
                recruits to the businesses. The virtual employees provided by
                Virtual Talent helps businesses <span>grow </span> exponentially
                at <span>fraction </span> of the <span>cost</span>. We want to
                help businesses save <span>time</span>, <span>cost</span>, and
                <span> effort</span> required in
                <span-blue> interviewing</span-blue>,
                <span-blue> training</span-blue> and
                <span-blue> performance</span-blue>.
                <br />
                <br />
                What we do differently is that we cherry-pick the best talent,
                and train them to industry standards. Communicate with the
                client to offer the recruits according to their needs. We offer
                ourselves as a bridge between clients and talent to improve
                client satisfaction and talent performance. <span>VT </span>
                ensures that the best talent is provided to you keeping in mind
                your requirements.
                <br />
                <br />
                We have a high acceptance rate in the interviewing stage, after
                which the talent is ready to work with you in as little time as
                possible.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*Why us end*/}

      {/*Roadmap*/}
      <div id="RoadMap" className="container-fluied bg-black pt-5">
        <div
          className="Roadmap-seciton container-fluied py-3"
          style={{ backgroundColor: "#151515" }}
        >
          <div className="container py-5">
            <div className="row" id="road-map-section">
              <div
                className="col-6"
                style={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div>
                  <SmallTitle title="Road Map" />
                </div>
                <h2 className="my-3 mt-4 pt-2" style={{ fontWeight: "700" }}>
                  Road <span> Map</span>
                </h2>
                <p style={{ textAlign: "justify" }}>
                  The candidates are vigorously trained according to the client
                  needs, to deliver the best services. The recruits are passed
                  through series of interviews and training session before
                  deployment. Our team of highly motivated, self-driven and
                  disciplined <span>talent</span> will help you take a breath of
                  relief from the hectic routine of running a business and allow
                  you to scale your business.
                </p>
              </div>
              <div className="col-6 text-center">
                <img src={roadmap} alt="img" height={400} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Roadmap end*/}

      {/*Services*/}
      <section
        id="OurServices"
        className="services-seciton container-fluied bg-black"
      >
        <div className="container text-center">
          <SmallTitle title="services" />
          <h2 className="my-3" style={{ fontWeight: "700" }}>
            Check our <span>Services</span>
          </h2>
        </div>

        <div className="container mt-5" id="our-services-cards">
          <div className="row" id="our-services-section">
            <div className="col-4">
              <div className="card small-card">
                <div className="card-body">
                  <div className="text-center">
                    <BiSupport
                      className="small-card-icon"
                      size={50}
                      color={"var(--theme-orange)"}
                      style={{ marginBottom: "15px" }}
                    />
                  </div>
                  <h4 className="card-title text-white text-center">
                    Customer Service VA’s
                  </h4>
                  <p className="card-text text-center">
                    Outsourcing this service to remote workers is a great
                    option. In every Industry, businesses want to keep their
                    customers happy to thrive and grow. Customer service VA’s
                    will perform the following task while you spend time on
                    critical decision making.
                  </p>

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
                      {Customer_Service_VA[0].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Customer_Service_VA[1].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Customer_Service_VA[2].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Customer_Service_VA[3].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Customer_Service_VA[4].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Customer_Service_VA[5].point}
                    </div>
                  </div>

                  <a
                    href="/discovery-session"
                    id="service_btn1"
                    className="row text-center mx-5"
                    style={{ textDecoration: "none", marginTop: "24px" }}
                  >
                    <ButtonFill title="Learn more" white_bg={true} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card small-card">
                <div className="card-body">
                  <div className="text-center">
                    <FaPaintBrush
                      className="small-card-icon"
                      size={50}
                      color={"var(--theme-orange)"}
                      style={{ marginBottom: "15px" }}
                    />
                  </div>
                  <h4 className="card-title text-white text-center">
                    Graphic Design VA’s
                  </h4>
                  <p className="card-text text-center">
                    Graphic Design VA’s create an image of the business for
                    existing and potential customers. Graphic Design VA’s are
                    highly in demand. The following are the few services our
                    Graphic Design VA’s provide.
                  </p>

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
                      {Graphic_Design[0].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Graphic_Design[1].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Graphic_Design[2].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Graphic_Design[3].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Graphic_Design[4].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Graphic_Design[5].point}
                    </div>
                  </div>

                  <a
                    href="/discovery-session"
                    className="row text-center mx-5 "
                    id="service_btn3"
                    style={{ textDecoration: "none", marginTop: "35px" }}
                  >
                    <ButtonFill title="Learn more" white_bg={true} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card small-card">
                <div className="card-body">
                  <div className="text-center">
                    <BsFillPhoneFill
                      className="small-card-icon"
                      size={50}
                      color={"var(--theme-orange)"}
                      style={{ marginBottom: "15px" }}
                    />
                  </div>
                  <h4 className="card-title text-white text-center">
                    Social Media Management VA’s
                  </h4>
                  <p className="card-text text-center">
                    Businesses need to maintain a social media presence. SM
                    presence for businesses is no longer an option but
                    necessity. It is for this reason that our SM Management VA’s
                    are the most in demand.
                  </p>

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
                      {Social_Media_Management[0].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Social_Media_Management[1].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Social_Media_Management[2].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Social_Media_Management[3].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Social_Media_Management[4].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Social_Media_Management[5].point}
                    </div>
                  </div>

                  <a
                    href="/discovery-session"
                    className="row text-center mx-5"
                    id="service_btn4"
                    style={{ textDecoration: "none", marginTop: "55px" }}
                  >
                    <ButtonFill title="Learn more" white_bg={true} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5" id="our-services-section">
            <div className="col-4">
              <div className="card small-card">
                <div className="card-body">
                  <div className="text-center">
                    <SiGoogleassistant
                      className="small-card-icon"
                      size={50}
                      color={"var(--theme-orange)"}
                      style={{ marginBottom: "15px" }}
                    />
                  </div>
                  <h4 className="card-title text-white text-center">
                    Administrative Support VA’s
                  </h4>
                  <p className="card-text text-center">
                    As Entrepreneurs live fast paced-lives, demand for admin
                    VA’s keep growing. The following admin tasks are highly time
                    consuming and are most closely associated with VA’s.
                  </p>

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
                      {Administrative_Support[0].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Administrative_Support[1].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Administrative_Support[2].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Administrative_Support[3].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Administrative_Support[4].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Administrative_Support[5].point}
                    </div>
                  </div>

                  <a
                    href="/discovery-session"
                    id="service_btn2"
                    className="row text-center mx-5"
                    style={{ textDecoration: "none", marginTop: "72px" }}
                  >
                    <ButtonFill title="Learn more" white_bg={true} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card small-card">
                <div className="card-body">
                  <div className="text-center">
                    <FaBook
                      className="small-card-icon"
                      size={50}
                      color={"var(--theme-orange)"}
                      style={{ marginBottom: "15px" }}
                    />
                  </div>
                  <h4 className="card-title text-white text-center">
                    Book Keeper & Payroll Specialist VA’s
                  </h4>
                  <p className="card-text text-center">
                    Book Keeping and Payroll Specialist VA’s demand has
                    increased since online accounting software’s are more
                    affordable now. They also come cheaper then hiring internal
                    staff.
                  </p>

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
                      {Book_Keeper[0].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Book_Keeper[1].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Book_Keeper[2].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Book_Keeper[3].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Book_Keeper[4].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Book_Keeper[5].point}
                    </div>
                  </div>

                  <a
                    href="/discovery-session"
                    className="row text-center mx-5"
                    id="service_btn5"
                    style={{ textDecoration: "none", marginTop: "24px" }}
                  >
                    <ButtonFill title="Learn more" white_bg={true} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card small-card">
                <div className="card-body">
                  <div className="text-center">
                    <MdArchitecture
                      className="small-card-icon"
                      size={50}
                      color={"var(--theme-orange)"}
                      style={{ marginBottom: "15px" }}
                    />
                  </div>
                  <h4 className="card-title text-white text-center">
                    Architecture Technologist VA’s
                  </h4>
                  <p className="card-text text-center">
                    Architecture technician VA’s understand how to conduct and
                    coordinate multiple parties, along with being able to design
                    something functional and beautiful.
                  </p>

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
                      {Architecture_Technologist[0].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Architecture_Technologist[1].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Architecture_Technologist[2].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Architecture_Technologist[3].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Architecture_Technologist[4].point}
                    </div>
                    <div className="d-flex mt-2">
                      <div style={{ marginRight: "30px" }}>
                        <HiArrowCircleRight
                          className="thumb"
                          size={30}
                          color="var(--theme-orange)"
                        />
                      </div>
                      {Architecture_Technologist[5].point}
                    </div>
                  </div>

                  <a
                    href="/discovery-session"
                    className="row text-center mx-5"
                    id="service_btn6"
                    style={{ textDecoration: "none", marginTop: "62px" }}
                  >
                    <ButtonFill title="Learn more" white_bg={true} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Services end*/}

      {/*Career*/}
      <div id="Career" className="container-fluied bg-black pt-5">
        <div
          className="Career-seciton container-fluied py-3"
          style={{ backgroundColor: "#151515" }}
        >
          <div className="container py-5">
            <div className="row" id="career-section">
              <div className="col-7 text-center">
                <img src={career} alt="img" height={450} />
              </div>
              <div
                className="col-5"
                style={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div>
                  <SmallTitle title="Career" />
                </div>
                <h2 className="my-3 mt-4 pt-2" style={{ fontWeight: "700" }}>
                  Career
                </h2>
                <p>
                  We are excited to welcome you to our <span>Talent</span> pool
                  - Virtual Talent aims to provide opportunity regardless of
                  <span> Gender</span>, <span> Race</span>, <span> Color</span>,
                  <span> Religion</span>, <span> Nationality</span> and
                  <span> Orientation</span>. Virtual Talent's vision is to
                  cultivate growth conducive environment.
                  <br /> <br />
                  If you are an architect, accountant and experienced in
                  personal assistant and administration then email us your
                  updated resume at <span>careers@virtual-talent.co</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Career end*/}

      {/*testimonials*/}
      <div className="my-5 d-flex justify-content-center">
        <Slider />
      </div>
      {/*testimonials end*/}

      {/*FAQ*/}
      <section
        id="FAQ"
        className="faq-seciton container-fluied bg-black"
        style={{ paddingBottom: "70px", marginTop: "50px" }}
      >
        <div className="container text-center">
          <SmallTitle title="f.a.q" />
          <h2 className="my-3" style={{ fontWeight: "700" }}>
            Frequently Asked <span>Questions</span>
          </h2>
        </div>

        <div
          className="container mt-4"
          style={{ width: "50vw" }}
          id="FAQ-buttons"
        >
          <div className="column">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item" id="accordion-item-holder">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Getting Started with Virtual Talent?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    If you are looking to hire, choose a niche and book a
                    discovery session with Us. When we understand your
                    requirements, we will provide the best possible talent to
                    you. <br /> <br />
                    If you are looking to be recruited, email us, follow our
                    LinkedIn page for job position or go to career.
                  </div>
                </div>
              </div>
              <div className="accordion-item" id="accordion-item-holder">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    How to book a Discovery Session?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    To book a discovery session go on to DISCOVERY SESSION and
                    select a date that best suits you, select the available time
                    and we will get back to you. Or <br />
                    <br />
                    You can write us an email and we will set an appointment
                    with you to discuss the prospects.
                  </div>
                </div>
              </div>
              <div className="accordion-item" id="accordion-item-holder">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    How long will it take to get Talent?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    After the discovery session, where you will tell us your
                    requirements and number of services that you need,
                    accordingly, best option will be provided to you. The
                    duration of onboarding the talent with you depends on your
                    skill set requirements, and how many virtual employees you
                    require.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*FAQ end*/}

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
      <Footer />
      {/*Footer end*/}
    </div>
  );
};

export default Home;
