import React from "react";
import styled from "styled-components";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li<{current: boolean}>`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

///////////////////////////////////////////////////////////////////////////

const Headers = ({ location}: RouteComponentProps) => {
  return (
    <Header>
    <List>
      <Item current={location.pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={location.pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={location.pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
  )
}

export default withRouter(Headers)



// Link는 a와 비슷한 개념으로 to를 통해 이동할 경로를 지정해준다
