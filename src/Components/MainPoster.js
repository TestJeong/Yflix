import React from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;

  opacity: 0.3;
`;

const Conatiner = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
`;

const Title = styled.span`
  font-size: 40px;
  opacity: 1;
  margin-bottom: 3px;
`;

const MainPoster = ({ imageUrl, title, rating, year, overview }) => (
  <Conatiner>
    <Backdrop bgImage={`https://image.tmdb.org/t/p/original${imageUrl}`}>
      <Title>{title}</Title>
    </Backdrop>
    <Content></Content>
  </Conatiner>
);

export default MainPoster;
