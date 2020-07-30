import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Grid = styled.span`
  width: 100%;
  height: 100%;
  font-size: 15px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
`;

const Cast = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
};

Cast.prototType = {
  title: PropTypes.string.isRequired,
};

export default Cast;
