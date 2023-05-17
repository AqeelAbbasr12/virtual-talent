import React from "react";
import "./carousel.css";
// import { useMediaQuery } from "react-responsive";

import { Fade } from "react-slideshow-image";

import ButtonFill from "../Buttons/buttonFill";

/*Slider Images*/
import image from "../../assets/images/hero-bg.jpg";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";

export default function Carousel() {
  // const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  const slideImages = [
    {
      url: image,
      title: "WE DO HEAD HUNTING SO YOU DON’T HAVE TO.",
      link: "/discovery-session",
    },
    {
      url: image1,
      title: "PROVIDING VIRTUAL EMPLOYEES AT FRACTION OF A COST.",
      link: "/discovery-session",
    },
    {
      url: image2,
      title:
        "ALLOWING YOU TO FOCUS ON STRATEGIC DEVELOPMENT AND PROFITIBILITY.",
      link: "/discovery-session",
    },
  ];

  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div
                className="sliderImageSection"
                style={{
                  backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.589) 0%, rgba(0, 0, 0, 0.698) 100%), url( " ${slideImage.url} ")`,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="container-fluied slider-text d-flex flex-column text-center"
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <h1
                    className="col-md-9"
                    style={{ fontWeight: "bold", color: "white" }}
                  >
                    {slideImage.title}
                  </h1>

                  <a className="mt-4" href={slideImage.link}>
                    <ButtonFill title="Learn more" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    );
  };
  return (
    <div className="container-fluied">
      <Slideshow />
    </div>
  );
}
