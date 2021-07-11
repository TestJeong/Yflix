import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "Components/Poster";
import MovieMainSlider from "../../Components/MovieMainSlider";
import { tvApi } from "api";
import { useLocation } from "react-router-dom";

const Container = styled.div``;

const TVPresenter = () => {
  const [topRated, settopRated] = useState(null);
  const [popular, setpopular] = useState(null);
  const [airingToday, setairingToday] = useState(null);
  const [loading, setloading] = useState(null);
  const [error, seterror] = useState(null);
  const [tvTrending, settvTrending] = useState(null);

  const location = useLocation();

  useEffect(() => {
    Promise.allSettled([
      tvApi.topRated(),
      tvApi.popular(),
      tvApi.airingToday(),
      tvApi.tvTrending(),
    ])
      .then(([topRated, popular, airingToday, tvTrending]) => {
        settopRated(topRated.value.data.results);
        setpopular(popular.value.data.results);
        setairingToday(airingToday.value.data.results);
        settvTrending(tvTrending.value.data.results);
      })
      .catch((_) => seterror("Can't find movies information."))
      .finally((_) => setloading(false));
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title>Show | Nomflix</title>
      </Helmet>
      {tvTrending && (
        <MovieMainSlider
          tvTrending={tvTrending}
          isTV={location.pathname.includes("/tv")}
        />
      )}
      {topRated && topRated.length > 0 && (
        <Section title="최고 평점 TV">
          {topRated.map((show) => (
            <Poster
              imageUrl={show.poster_path}
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
              imageUrl={show.poster_path}
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
              imageUrl={show.poster_path}
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
};

TVPresenter.prototype = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
