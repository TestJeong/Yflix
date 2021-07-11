import React from "react";
import Section from "./Section";
import Poster from "./Poster";
import { useEffect } from "react";

type RecommendProps ={
  recommend : Array<PosterProps>
  isMovie: boolean
  urlId: number
}

type PosterProps = {
  poster_path : string
  title: string
  name: string
  id: number
  isMovie: boolean
  key: number
  vote_average: number
  release_date: string
  first_air_date: string
}

const Recommend = ({ recommend, isMovie, urlId }: RecommendProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [urlId]);
  return (
    <Section title="추천 영상" >
      {recommend.map((movie : PosterProps) => (
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
