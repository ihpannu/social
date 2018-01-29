import React, { Component } from "react";
import styled from "styled-components";
import Header from "../Containers/Header";
import Body from "../Containers/Body";

const HomePage = styled.div`
  height: 100vh;
  background: #f9f9f9;
`;

class Home extends Component {
  render() {
    return (
      <HomePage>
        <Header />
        <Body />
      </HomePage>
    );
  }
}

export default Home;
