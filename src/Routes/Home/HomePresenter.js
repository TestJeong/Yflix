import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PowerOf.scss";

/* import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css"; */

const Container = styled.div``;

const settings = {};

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => (
  <>
    <Helmet>
      <title>Loading | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Helmet>
          <title>Movies | Nomflix</title>
        </Helmet>
        <Slider {...settings}>
          <div>
            <img
              style={{ width: "100%" }}
              src="http://placekitten.com/g/400/200"
            />
          </div>
          <div>
            <img
              style={{ width: "100%" }}
              src="http://placekitten.com/g/400/200"
            />
          </div>
          <div>
            <img
              style={{ width: "100%" }}
              src="http://placekitten.com/g/400/200"
            />
          </div>
          <div>
            <img
              style={{ width: "100%" }}
              src="http://placekitten.com/g/400/200"
            />
          </div>
        </Slider>
        {/* <CarouselProvider
          visibleSlides={1}
          totalSlides={3}
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          infinite={true}
          step={1}
        >
          <Slider>
            <Slide tag="a" index={0}>
              <Image src="https://lorempixel.com/800/800/cats/0" />
            </Slide>
            <Slide tag="a" index={1}>
              <Image src="https://lorempixel.com/800/800/cats/1" />
            </Slide>
            <Slide tag="a" index={2}>
              <Image src="https://lorempixel.com/800/800/cats/2" />
            </Slide>
          </Slider>
        </CarouselProvider> */}
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="현재 상영중">
            {nowPlaying.map((movie) => (
              <Poster
                imgageUrl={movie.poster_path}
                title={movie.title}
                id={movie.id}
                isMovie={true}
                key={movie.key}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}

        {upcoming && upcoming.length > 0 && (
          <Section title="개봉 예정">
            {upcoming.map((movie) => (
              <Poster
                imgageUrl={movie.poster_path}
                title={movie.title}
                id={movie.id}
                isMovie={true}
                key={movie.key}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="인기 영화">
            {popular.map((movie) => (
              <Poster
                imgageUrl={movie.poster_path}
                title={movie.title}
                id={movie.id}
                isMovie={true}
                key={movie.key}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {error && <Message text={error} color="#e74c3c" />}
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcomfing: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;

// 논리연산자 &&(and)는 두가지 모두 true 일때만 true를 출력한다 여러개를 쓸 경우 왼쪽부터 오른쪽으로 간다
// subtring은 자르는 기능 (0,4) 0번째에서 4번째가지 자른다
