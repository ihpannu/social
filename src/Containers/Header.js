import React, { Component } from "react";
import styled from "styled-components";
import Nav from "./Nav";

const MainHeader = styled.header`
  height: 100px;
  background: #2b9388;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
