import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Cast from "../../Components/Cast";
import CastProfile from "../../Components/CastProfile";

const Container = styled.div`
  height: calc(100vh);
  /* width: 100%; */
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 50%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 15px;
`;

const Data = styled.div`
  overflow: auto;
  width: 70%;
  margin-left: 30px;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`;

const ItemContainer = styled.div`
  margin-bottom: 15px;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 16px;
  line-height: 20px;
`;

const CastContainer = styled.div`
  margin-top: 50px;
`;

const DetailPresenter = ({ result, error, loading, credits }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message text={error} color="#e74c3c" />
  ) : (
    <Container>
      <Helmet>
        <title>{result.title ? result.title : result.name}</title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />

      <Content>
        <Cover
          bgImage={`https://image.tmdb.org/t/p/original${result.poster_path}`}
        />
        <Data>
          <Title>{result.title ? result.title : result.name}</Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} 분
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres.map(
                (genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / ` // map은 배열 하나하나를 적용시킨다
              )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <CastContainer>
            <Cast title="CAST">
              {credits.map((cast) => (
                <CastProfile
                  id={cast.id}
                  char={cast.character}
                  name={cast.name}
                  imgUrl={cast.profile_path}
                />
              ))}
            </Cast>
          </CastContainer>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.prototype = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
