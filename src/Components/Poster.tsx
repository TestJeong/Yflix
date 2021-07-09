import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  height: 100%;
  border-radius: 10px;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  height: 250px;
  margin-bottom: 5px;

  position: relative;
  justify-content: center;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  position: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

type GreetingsProps = {
  id: number;
  imageUrl: string;
  title: string;
  rating: number;
  year: string;
  isMovie: boolean;
  key: number;
};

const Poster = ({ id, imageUrl, title, rating, year, isMovie, key } : GreetingsProps) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container key={key}>
      <ImageContainer>
        <Image
          src={imageUrl ? `https://image.tmdb.org/t/p/w500${imageUrl}` : "no"}
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>
          &nbsp;&nbsp;{rating} / 10
        </Rating>
      </ImageContainer>

      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

export default Poster;
