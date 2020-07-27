import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
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
        <Section title="UPComing Movies">
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
        <Section title="Popular Movies">
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
