import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(3);
  max-width: 100vw;
  overflow: hidden;
`;

const isrotating = keyframes`
  to{
    transform: rotate(1turn)
  }
`;

const Loader = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid #e5e5e5;
  border-top-color: #51d4db;
  display: block;

  border-radius: 50%;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${isrotating};
  animation-fill-mode: forwards;
`;

export default () => (
  <Container>
    <Loader></Loader>
  </Container>
);
