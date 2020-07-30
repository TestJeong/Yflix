import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
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
  width: 80px;
  height: 70px;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.bgUrl});
  border-radius: 3px;
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

const CastProfile = ({ id, char, name, imgUrl }) => {
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
      </Container>
    </Link>
  );
};

CastProfile.propTypes = {
  id: PropTypes.number.isRequired,
  Image: PropTypes.string,
  Character: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
};

export default CastProfile;
