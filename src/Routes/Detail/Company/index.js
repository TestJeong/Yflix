import React, { useState, useEffect } from "react";
import { movieApi, tvApi } from "api";
import styled from "styled-components";

const Box = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  margin-left: 10px;
  width: 100%;
  padding: 15px 10px;
`;

const Container = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  margin: 5px 10px;
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
    console.log("Effect");
    const getCountry = async () => {
      try {
        if (type === "movie") {
          const {
            data: { production_companies: result },
          } = await movieApi.movieDetail(parsedId);
          setState((pre) => {
            return { ...pre, result };
          });
        }
        if (type === "show") {
          const {
            data: { production_companies: result },
          } = await tvApi.showDetail(parsedId);
          setState((pre) => {
            return { ...pre, result };
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCountry();
  }, [parsedId, type]);
  const { result } = state;

  return (
    <Box>
      {result &&
        result.map((c, index) => (
          <Container key={index}>
            <Image src={`https://image.tmdb.org/t/p/original/${c.logo_path}`} />
            {c.name}
          </Container>
        ))}
    </Box>
  );
};

export default Company;

//useEffect 자체가 return먼저 실행 후 useEffect를 실행 초기값 state는 null이기때문에 result에 값이 들어 와 있는지 확인 후에야 map 메소드를 사용 할 수 있음
