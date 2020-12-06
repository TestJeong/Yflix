import React from "react";
import Section from "../Components/Section";
import Poster from "../Components/Poster";
import { useEffect } from "react";

const Recommend = ({ recommend, isMovie, urlId }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [urlId]);
  return (
    <Section title="추천 영상">
      {recommend.map((movie) => (
        <Poster
          imageUrl={movie.poster_path}
          title={isMovie ? movie.title : movie.name}
          id={movie.id}
          isMovie={isMovie}
          key={movie.key}
          rating={movie.vote_average}
          year={
            movie.release_date
              ? movie.release_date.substring(0, 4)
              : movie.first_air_date.substring(0, 4)
          }
        />
      ))}
    </Section>
  );
};

export default Recommend;
