import React from "react";
import { NavLink, Route, Redirect, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Cast from "../../Components/Cast";
import CastProfile from "../../Components/CastProfile";
import Company from "../Detail/Company";
import Country from "../Detail/Country";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  padding: 70px 0px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Backdrop = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  position: absolute;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: relative;
    width: 100%;
  }
`;

const Cover = styled.div`
  border-radius: 5px;
  min-width: 30%;
  margin: 0px 20px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: auto;
`;

const Data = styled.div`
  width: 65%;
  height: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    background: rgba(0, 0, 0, 0.1);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  margin-left: 10px;
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
  font-size: 18px;
  padding: 5px 0 5px;
  opacity: 0.7;
  line-height: 1.5;
  width: 95%;
`;

const CastContainer = styled.div`
  margin-top: 50px;
`;

const VideoContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 420px;
`;

const Video = styled.iframe`
  margin: 20px;
  height: 300px;
  border-radius: 3px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const ButtonLink = styled(NavLink)`
  padding: 10px 10px;
  font-size: 25px;
  display: block;
`;

const DetailPresenter = ({ result, error, loading, credits, isMovie }) =>
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
          <VideoContainer>
            <Cast title="Trailer">
              {result.videos.results.map((i) => (
                <Video
                  title={i.name}
                  src={`https://www.youtube.com/embed/${i.key}`}
                />
              ))}
            </Cast>
          </VideoContainer>
          <ButtonContainer>
            <ButtonLink // Link와 같이 a같은 개념이므로 클릭시 해당 url로 이동이 되면서 Router에 설정해놓은 url과 같으면 Company 컴포넌트가 실행이된다.
              to={{
                pathname: isMovie
                  ? `/movie/${result.id}/company/`
                  : `/show/${result.id}/company/`,
              }}
            >
              Company
            </ButtonLink>
            {isMovie ? (
              <ButtonLink
                to={{
                  pathname: `/movie/${result.id}/country/`,
                }}
              >
                Country
              </ButtonLink>
            ) : (
              <ButtonLink
                to={{
                  pathname: `/show/${result.id}/network/`,
                }}
              >
                Network
              </ButtonLink>
            )}
          </ButtonContainer>
          <Switch>
            <Route
              path={"/:type/:id/company/"} //해당 url이 요청이 되면 Company 컴포넌트가 실행이 된다. :type :id는 값이 바뀐다는 뜻으로 match => params에 저장이 된다
              exact
              component={Company}
            />
            <Route path={"/:type/:id/:country"} exact component={Country} />
            <Redirect
              from="*"
              to={
                isMovie
                  ? `/movie/${result.id}/company/`
                  : `/show/${result.id}/company/`
              }
            />
          </Switch>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.protmovie = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;

// Redirect 같은 경우는 route의 path와 같기 때문에 동시에  값을 불러오가 때문에 화면에 Company나 Country 내용이 같이 나온다
