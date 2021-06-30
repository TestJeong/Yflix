import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 30px;
`;

const ImageContainer = styled.div`
  height: 250px;
  margin-bottom: 5px;
  position: relative;
  justify-content: center;
`;

const Image = styled.img`
  height: 100%;
  border-radius: 10px;
`;

const Name = styled.div`
  margin-bottom: 3px;
`;
const Count = styled.div`
  margin-bottom: 3px;
`;

type GreetingsProps = {
  imgUrl: string;
  name: string;
  episode_count: string;
};


function Seasons({ imgUrl, name, episode_count }: GreetingsProps) {


  return (
    <Container>
      <ImageContainer>
        <Image src={`https://image.tmdb.org/t/p/w500${imgUrl}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Count>총 {episode_count}화</Count>
    </Container>
  );
}

export default Seasons;
