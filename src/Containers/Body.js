import React, { Component } from "react";
import styled from "styled-components";
import SignUpForm from "./SignUpForm";

const MainBody = styled.div`
  max-width: 960px;
  margin: auto;

  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
