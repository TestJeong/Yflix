import React from "react";
import reset from "styled-reset";
import Section from "../Components/Section";
import Poster from "../Components/Poster";
import { Link } from "react-router-dom";

const Recommend = ({ recommend, isMovie }) => (
  <Section title="추천 영상">
    <Link to="/movie/531219">helll</Link>
  </Section>
);

export default Recommend;

//window.location.replace("/")