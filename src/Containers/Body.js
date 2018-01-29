import React, { Component } from "react";
import styled from "styled-components";
import SignUpForm from "./SignUpForm";

const MainBody = styled.div`
  max-width: 960px;
  margin: auto;
  background: yellow;
  height: 100vh;
`;

export default class Body extends Component {
  render() {
    return (
      <MainBody>
        <SignUpForm />
      </MainBody>
    );
  }
}
