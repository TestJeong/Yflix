import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vh;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: ${(props) => props.color};
`;

type MessageProps={
  text: string
  color: string
}

const Message = ({ text, color } : MessageProps) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);


export default Message;
