import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Helmet } from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import MovieMainSlider from "../../Components/MovieMainSlider";
import { movieApi } from "api";

const Container = styled.div``;

const HomeContainer = () => {
  const [nowPlaying, setnowPlaying] = useState(null);
  const [popular, setpopular] = useState(null);
  const [upcoming, setupcoming] = useState(null);
  const [loading, setloading] = useState(null);
  const [error, seterror] = useState(null);
  const [movieTrending, setmovieTrending] = useState(null);

  useEffect(() => {
    Promise.allSettled([
      movieApi.movieTrending(),
      movieApi.nowPlaying(),
      movieApi.upcoming(),
      movieApi.popular(),
    ])
      .then(([movieTrending, nowPlaying, upcoming, popular]) => {
        console.log(movieTrending.value.data.results);
        setmovieTrending(movieTrending.value.data.results);
        setnowPlaying(nowPlaying.value.data.results);
        setupcoming(upcoming.value.data.results);
        setpopular(popular.value.data.results);
      })
      .catch((_) => seterror("Can't find movies information."))
      .finally((_) => setloading(false));
  }, []);

  return (
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

          {movieTrending && <MovieMainSlider movieTrending={movieTrending} />}
          {nowPlaying && (
            <Section title={"현재 상영"}>
              {nowPlaying.map((movie, index) => (
                <Poster
                  imageUrl={movie.poster_path}
                  title={movie.title}
                  id={movie.id}
                  isMovie={true}
                  key={index}
                  rating={movie.vote_average}
                  year={movie.release_date.substring(0, 4)}
                />
              ))}
            </Section>
          )}

          {upcoming && (
            <Section title="개봉 예정">
              {upcoming.map((movie, index) => (
                <Poster
                  imageUrl={movie.poster_path}
                  title={movie.title}
                  id={movie.id}
                  isMovie={true}
                  key={index}
                  rating={movie.vote_average}
                  year={movie.release_date.substring(0, 4)}
                />
              ))}
            </Section>
          )}
          {popular && (
            <Section title="인기 영화">
              {popular.map((movie, index) => (
                <Poster
                  imageUrl={movie.poster_path}
                  title={movie.title}
                  id={movie.id}
                  isMovie={true}
                  key={index}
                  rating={movie.vote_average}
                  year={movie.release_date}
                />
              ))}
            </Section>
          )}
          {error && <Message text={error} color="#e74c3c" />}
        </Container>
      )}
    </>
  );
};

// 논리연산자 &&(and)는 두가지 모두 true 일때만 true를 출력한다 여러개를 쓸 경우 왼쪽부터 오른쪽으로 간다
// subtring은 자르는 기능 (0,4) 0번째에서 4번째가지 자른다

export default HomeContainer;
