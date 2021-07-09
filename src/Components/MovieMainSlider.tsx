import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider-slick.scss";
import MainPoster from "./MainPoster";

const settings = {
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

type MovieMainSliderProps = {
  movieTrending: Array<TrendingProps>;
  tvTrending: Array<TrendingProps>;
  isTV: boolean;
};

type TrendingProps ={
  backdrop_path : string
  name: string
  title: string
  overview: string
  id: number
  key: number
  
}

const movieMainSlider = ({ movieTrending, tvTrending, isTV }: MovieMainSliderProps) => {
  return isTV ? (
    <Slider {...settings}>
      {tvTrending.map((tv:TrendingProps) => (
        <MainPoster
          imageUrl={tv.backdrop_path}
          title={tv.name}
          overview={tv.overview}
          id={tv.id}
          key={tv.id}
          isTV={isTV}
        />
      ))}
    </Slider>
  ) : (
    <Slider {...settings}>
      {movieTrending.map((movie: TrendingProps) => (
        <MainPoster
          imageUrl={movie.backdrop_path}
          title={movie.title}
          overview={movie.overview}
          id={movie.id}
          key={movie.id}
          isTV={isTV}
        />
      ))}
    </Slider>
  );
};



export default movieMainSlider;
