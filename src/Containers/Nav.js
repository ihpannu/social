import React, { Component } from "react";
import styled from "styled-components";
// import { Route, Link } from "react-router-dom";

const MainNav = styled.nav`
  background: #f89156;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-size: 1.5em;
  color: #fff;
  margin-left: 10px;
`;

const Navigation = styled.ul`
  margin-right: 10px;
  display: flex;
  li {
    margin: 0 10px;
  }
`;

export default class Nav extends Component {
  render() {
    return (
      <MainNav>
        <MainTitle>being brown</MainTitle>
        <Navigation>
          <li>Sign in</li>
          <li>Sign up</li>
        </Navigation>
      </MainNav>
    );
  }
}
