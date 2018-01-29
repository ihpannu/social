import React, { Component } from "react";
import styled from "styled-components";
// import { Route, Link } from "react-router-dom";

const MainNav = styled.nav`
  background: #f89156;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-size: 1.5em;
  color: #fff;
`;

const Navigation = styled.ul`
  display: flex;
  justify-content: space-between;
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
