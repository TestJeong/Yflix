import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 30px 10px 30px 0px;
  font-size: 12px;
  a {
    color: inherit;
    text-decoration: none;
    font-size: inherit;
    font: inherit;
  }
`;

const ImageContainer = styled.div``;

const Image = styled.div`
  margin: 0 10px;
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.bgUrl});
  border-radius: 50%;
  border: 2px solid white;
`;

const Character = styled.span`
  margin-top: 5px;
  text-align: center;
  display: block;
`;

const Name = styled.span`
  margin: 5px;
  text-align: center;
  display: block;
`;

const Country = styled.span`
  margin: 5px;
  text-align: center;
  display: block;
`;

type GreetingsProps = {
  id: string;
  char: string;
  name: string;
  imgUrl: string;
  origin_country: string;
};

const CastProfile: React.FC<GreetingsProps> = ({ id, char, name, imgUrl, origin_country }) => {
  return (
    <Link to={`/person/${id}/`}>
      <Container>
        <ImageContainer>
          <Image bgUrl={`https://image.tmdb.org/t/p/w300${imgUrl}`} />
        </ImageContainer>
        <Character>
          {char && char.length > 10 ? char.substring(0, 10) + "..." : char}
        </Character>
        <Name>
          {name && name.length > 10 ? name.substring(0, 10) + "..." : name}
        </Name>
        <Country>{origin_country}</Country>
      </Container>
    </Link>
  );
};



export default CastProfile;
