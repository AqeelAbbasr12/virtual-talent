import React from "react";
import "./Slider.css";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

/*Slider Images*/
import testimonial1 from "../../assets/images/image10.png";
import testimonial2 from "../../assets/images/image19.jpeg";

const Slider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className="testimonials-seciton">
      <AutoplaySlider
        animation="cubeAnimation"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div className="text-center">
          <img className="testimonial-img mb-4" src={testimonial1} alt="img" />
          <div className="px-5 mx-5 mb-5" id="testimonial-text-holder">
            <p
              style={{
                fontSize: "25px",
                fontWeight: "300",
                fontStyle: "italic",
              }}
              id="testimonial-text"
            >
              “It’s not about what I achieve, it’s all about transforming
              people’s lives by creating an opportunity for them to thrive
              through vision, support & challenge”
            </p>
          </div>
          <h4 className="m-0" style={{ color: "white" }} id="testimonial-title">
            Taimoor Khan
          </h4>
          <h6 className="mt-2">
            <span>CEO</span>
          </h6>
        </div>
        <div className="text-center">
          <img className="testimonial-img mb-4" src={testimonial2} alt="img" />
          <div className="px-5 mx-5 mb-5" id="testimonial-text-holder">
            <p
              style={{
                fontSize: "25px",
                fontWeight: "300",
                fontStyle: "italic",
              }}
              id="testimonial-text"
            >
              “Why settle when sky’s the limit, surrounding ourselves with
              people who brings out the best in ourselves, to reaching sky
              together”
            </p>
          </div>

          <h4 className="m-0" style={{ color: "white" }} id="testimonial-title">
            Yasir Nawab
          </h4>
          <h6 className="mt-2">
            <span>COO</span>
          </h6>
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default Slider;
