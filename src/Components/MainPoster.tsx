import React from "react";
 
import styled from "styled-components";
import { Link } from "react-router-dom";

const Backdrop = styled.div<{bgImage : string}>`
  width: 100%;
  height: calc(100vh - 70px);
  background-image: linear-gradient(to right, black, transparent),
    url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
`;

const Conatiner = styled.div`
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  top: 40%;
  left: 15%;
`;

const Title = styled.div`
  font-size: 40px;
  opacity: 1;
  margin-bottom: 3%;
`;

const Overview = styled.div`
  font-size: 20px;
  width: 45%;
  line-height: 35px;
`;

const Button = styled.button`
  margin-top: 3%;
  padding: 10px 28px;
  font-size: 16px;
  border-radius: 10px;
  border: 0;
`;

type MainPosterProps ={
  imageUrl: string
  title: string
  isTV: boolean
  overview: string
  id: number
  key: number
}

const MainPoster = ({ imageUrl, title, isTV, overview, id, key } : MainPosterProps) => (
  <Conatiner>
    <Backdrop bgImage={`https://image.tmdb.org/t/p/original${imageUrl}`} />
    <Content key={key}>
      <Title>{title}</Title>
      <Overview>
        {overview.length > 300 ? overview.substring(0, 300) + "..." : overview}
      </Overview>
      <Link to={isTV ? `/tv/${id}` : `/movie/${id}`}>
        <Button>더 보기</Button>
      </Link>
    </Content>
  </Conatiner>
);



export default MainPoster;
