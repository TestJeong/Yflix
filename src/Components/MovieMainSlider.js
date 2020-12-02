import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider-slick.scss";
import MainPoster from "./MainPoster";

const settings = {};

const movieMainSlider = ({ movieTrending }) => {
  return (
    <Slider {...settings}>
      {movieTrending.map((movie) => (
        <MainPoster imageUrl={movie.backdrop_path} title={movie.title} />
      ))}
    </Slider>
  );
};

export default movieMainSlider;
