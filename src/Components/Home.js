import React, { Component } from "react";
import styled from "styled-components";

const HomePage = styled.div`
  max-width: 960px;
  height: 100vh;
  margin: auto;
  background: #fdebd4;
`;

const Header = styled.header`
  background: green;
`;

class Home extends Component {
  render() {
    return (
      <HomePage>
        <Header>
          <h1 className="App-title">Social</h1>
        </Header>
      </HomePage>
    );
  }
}

export default Home;
