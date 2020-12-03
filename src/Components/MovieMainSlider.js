import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider-slick.scss";
import MainPoster from "./MainPoster";

const settings = {};

const movieMainSlider = ({ movieTrending, tvTrending, isTV }) => {
  return isTV ? (
    <Slider {...settings}>
      {tvTrending.map((tv) => (
        <MainPoster
          imageUrl={tv.backdrop_path}
          title={tv.name}
          overview={tv.overview}
          id={tv.id}
          isTV={isTV}
        />
      ))}
    </Slider>
  ) : (
    <Slider {...settings}>
      {movieTrending.map((movie) => (
        <MainPoster
          imageUrl={movie.backdrop_path}
          title={movie.title}
          overview={movie.overview}
          id={movie.id}
          isTV={isTV}
        />
      ))}
    </Slider>
  );
};

export default movieMainSlider;
