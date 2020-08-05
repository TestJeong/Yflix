import React, { useState, useEffect } from "react";
import { movieApi, tvApi } from "api";
import styled from "styled-components";
import noImage from "../../../assets/noimage.png";

const Box = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  margin-left: 10px;
  width: 100%;
  padding: 15px 0px;
`;

const Container = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 70px;
  margin: 10px 30px;
`;

const Company = (props) => {
  const {
    match: {
      params: { id, type },
    },
  } = props;
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
            data: { production_companies: result },
          } = await movieApi.movieDetail(parsedId);
          setState((pre) => {
            return { ...pre, result, error, loading: false };
          });
        }
        if (type === "show") {
          const {
            data: { production_companies: result },
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
        : result &&
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
          ))}
    </Box>
  );
};

export default Company;

//useEffect 자체가 return먼저 실행 후 useEffect를 실행 초기값 state는 null이기때문에 result에 값이 들어 와 있는지 확인 후에야 map 메소드를 사용 할 수 있음
