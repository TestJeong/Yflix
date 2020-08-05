import React, { useState, useEffect } from "react";
import { movieApi, tvApi } from "api";
import styled from "styled-components";
import noImage from "../../../assets/noimage.png";

const Box = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  margin-left: 10px;
  width: 100%;
  padding: 15px 0px;
  border-radius: 0 10px 10px 10px;
`;

const Container = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const Image = styled.img`
  width: 50px;
  margin: 10px 30px;
`;

const US = styled.span`
  margin: 10px 30px;
  width: 50px;
  color: green;
`;

const Country = (props) => {
  const {
    match: {
      params: { id, type, country },
    },
  } = props;

  console.log(props);
  const parsedId = parseInt(id);
  const [state, setState] = useState({
    loading: true,
    error: null,
    result: null,
  });

  useEffect(() => {
    const getCountry = async () => {
      try {
        if (type === "movie") {
          const {
            data: { production_countries: result },
          } = await movieApi.movieDetail(parsedId);
          setState((pre) => {
            return { ...pre, result, error, loading: false };
          });
        }
        if (type === "show" && country === "network") {
          const {
            data: { networks: result },
          } = await tvApi.showDetail(parsedId);
          setState((pre) => {
            return { ...pre, result, error, loading: false };
          });
        }
      } catch (error) {
        setState((pre) => {
          return { ...pre, error, loading: false };
        });
      }
    };

    getCountry();
  }, [parsedId, type]);
  const { result, error, loading } = state;

  return (
    <Box>
      {loading
        ? null
        : error
        ? null
        : type === "show" && country === "network"
        ? result &&
          result.map((c, index) => (
            <Container key={index}>
              <Image
                src={
                  c.logo_path
                    ? `https://image.tmdb.org/t/p/original/${c.logo_path}`
                    : noImage
                }
              />
              {c.name}
            </Container>
          ))
        : result &&
          result.map((c, index) => (
            <Container key={index}>
              <US>{c.iso_3166_1}</US>
              {c.name}
            </Container>
          ))}
    </Box>
  );
};

export default Country;
