import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider-slick.scss";

const settings = {};

const movieMainSlider = () => {
  return (
    <Slider {...settings}>
      <div>
        <img style={{ width: "100%" }} src="http://placekitten.com/g/400/200" />
      </div>
      <div>
        <img style={{ width: "100%" }} src="http://placekitten.com/g/400/200" />
      </div>
      <div>
        <img style={{ width: "100%" }} src="http://placekitten.com/g/400/200" />
      </div>
      <div>
        <img style={{ width: "100%" }} src="http://placekitten.com/g/400/200" />
      </div>
    </Slider>
  );
};

export default movieMainSlider;
