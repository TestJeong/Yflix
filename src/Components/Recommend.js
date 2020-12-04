import React from "react";
import reset from "styled-reset";
import Section from "../Components/Section";
import Poster from "../Components/Poster";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Recommend = ({ recommend, isMovie }) => {
  console.log("is", isMovie);
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
        />
      ))}
    </Section>
  );
};

export default Recommend;

//window.location.replace("/")
