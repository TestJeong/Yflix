import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "Components/Poster";
import MovieMainSlider from "../../Components/MovieMainSlider";

const Container = styled.div``;

const TVPresenter = ({
  topRated,
  popular,
  airingToday,
  loading,
  error,
  tvTrending,
  isTV,
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title>Show | Nomflix</title>
      </Helmet>
      <MovieMainSlider tvTrending={tvTrending} isTV={isTV} />
      {topRated && topRated.length > 0 && (
        <Section title="최고 평점 TV">
          {topRated.map((show) => (
            <Poster
              imgageUrl={show.poster_path}
              title={show.name}
              id={show.id}
              key={show.key}
              rating={show.vote_average}
              year={show.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="인기 방송 TV">
          {popular.map((show) => (
            <Poster
              imgageUrl={show.poster_path}
              title={show.name}
              id={show.id}
              key={show.key}
              rating={show.vote_average}
              year={show.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="오늘의 방송 TV">
          {airingToday.map((show) => (
            <Poster
              imgageUrl={show.poster_path}
              title={show.name}
              id={show.id}
              key={show.key}
              rating={show.vote_average}
              year={show.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {error && <Message text={error} color="#e74c3c" />}
    </Container>
  );

TVPresenter.prototype = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
