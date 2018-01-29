import React, { Component } from "react";
import styled from "styled-components";
import Header from "../Containers/Header";

const HomePage = styled.div`
  max-width: 960px;
  height: 100vh;
  margin: auto;
  background: #fdebd4;
`;

class Home extends Component {
  render() {
    return (
      <HomePage>
        <Header />
      </HomePage>
    );
  }
}

export default Home;
