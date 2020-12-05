import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 7,
};

const Container = styled.div`
  overflow: hidden;
  margin: 10px 50px;
`;

const Title = styled.span`
  font-size: 25px;
  font-weight: 700;
`;

const Grid = styled.div`
  margin-top: 25px;
  display: flex;
  overflow: hidden;
  position: relative;
  @media only screen and (max-width: 420px) {
    overflow-x: auto;
  }
`;

const SlideBtn = styled.button`
  border: 0;
  outline: 0;
  position: sticky;
  ${(props) => (props.direction === "right" ? { right: "0" } : { left: "0" })};
  top: 0;
  height: 250px;
  background-color: rgba(0, 0, 0, 0);
  font-size: 30px;
  color: white;
  font-weight: 200;
  z-index: 100;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  @media only screen and (max-width: 420px) {
    display: none;
  }
  /* &::after {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f066";
  } */
`;

const Section = ({ title, children }) => {
  let index = 0;

  const leftSliding = (e) => {
    const { parentNode: flexBox } = e.target;
    if (index > 0) {
      index -= 1;
      flexBox.scrollTo({
        left: (flexBox.clientWidth / 2) * index,
        behavior: "smooth",
      });
    }
  };

  const rightSliding = (e) => {
    const { parentNode: flexBox } = e.target; // 클릭한 버튼의 부모 즉 Grid
    console.log(flexBox.scrollWidth); // 총길이
    console.log("client", flexBox.clientWidth); // 현재 화면 길이
    console.log((flexBox.clientWidth / 2) * index);
    if (flexBox.scrollWidth > (flexBox.clientWidth / 2) * (index + 2)) {
      index += 1;
      flexBox.scrollTo({
        left: (flexBox.clientWidth / 2) * index, //왼쪽으로 간다
        behavior: "smooth",
      });
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Slider {...settings}>{children}</Slider>
    </Container>
  );
};

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
