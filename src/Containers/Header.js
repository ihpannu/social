import React, { Component } from "react";
import styled from "styled-components";
import Nav from "./Nav";

const MainHeader = styled.header`
  height: 100px;
  background: green;
  //   display: flex;

  //   align-items: center;
`;

export default class Header extends Component {
  render() {
    return (
      <MainHeader>
        <Nav />
      </MainHeader>
    );
  }
}
