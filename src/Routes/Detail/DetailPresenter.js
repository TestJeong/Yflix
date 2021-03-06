import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Cast from "../../Components/Cast";
import CastProfile from "../../Components/CastProfile";
import Recommend from "../../Components/Recommend";
import Seasons from "../../Components/Season";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  padding: 70px 0px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Backdrop = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 130px);
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

const Cover = styled.img`
  border-radius: 5px;
  min-width: 30%;
  margin: 0px 20px;
  height: 100%;
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
  @media screen and (max-width: 768px) {
    padding-top: 5%;
    width: 90%;
    margin-left: 0;
    margin: 0 auto;
    overflow: unset;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: 700;
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
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`;

const CastContainer = styled.div`
  margin-top: 50px;
`;

const VideoContainer = styled.div`
  margin-top: 50px;
  width: 100%;
`;

const SeasonsContainer = styled.div`
  display: flex;
  width: 100%;
`;

const CompanyContainer = styled.div`
  margin-top: 50px;
`;

const Video = styled.iframe`
  border-radius: 10px;
  margin: 30px 40px 30px 0px;
`;

const SeasonTitle = styled.div`
  margin: 20px 0px;
  font-size: 20px;
  font-weight: 700;
`;

const DetailPresenter = ({
  result,
  error,
  loading,
  credits,
  recommend,
  isMovie,
  urlId,
}) => {
  console.log("res", isMovie);
  return loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message text={error} color="#e74c3c" />
  ) : (
    <>
      <Container>
        <Helmet>
          <title>{result.title ? result.title : result.name}</title>
        </Helmet>
        <Backdrop
          bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        />
        <Content>
          <Cover
            src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
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
                {result.runtime ? result.runtime : result.episode_run_time} 분
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
            {result.videos.results == 0 ? null : (
              <VideoContainer>
                {
                  <Cast title="Trailer">
                    {result.videos.results.map((i) => (
                      <Video
                        title={i.name}
                        src={`https://www.youtube.com/embed/${i.key}`}
                      />
                    ))}
                  </Cast>
                }
              </VideoContainer>
            )}
            <CastContainer>
              {credits.length === 0 ? null : (
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
              )}
            </CastContainer>

            {result.production_companies == 0 ? null : (
              <CompanyContainer>
                <Cast title="제작사">
                  {result.production_companies.map((company) => (
                    <CastProfile
                      name={company.name}
                      imgUrl={company.logo_path}
                      origin_country={company.origin_country}
                    />
                  ))}
                </Cast>
              </CompanyContainer>
            )}

            {isMovie ? null : (
              <>
                <SeasonTitle>시즌 정보</SeasonTitle>
                <SeasonsContainer>
                  {result.seasons.map((season) => (
                    <Seasons
                      imgUrl={season.poster_path}
                      name={season.name}
                      episode_count={season.episode_count}
                    />
                  ))}
                </SeasonsContainer>
              </>
            )}
          </Data>
        </Content>
      </Container>
      <Recommend recommend={recommend} isMovie={isMovie} urlId={urlId} />
    </>
  );
};

DetailPresenter.prototype = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
