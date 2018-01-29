import React, { Component } from "react";
import styled from "styled-components";

const SignUp = styled.form`
  background: #c8c8cb;
  padding: 2em;
  input,
  button {
    width: 100%;
    padding: 1em 5em;
    margin: 20px 0;
    border: none;
    border-radius: 2px;
  }
`;

export default class SignUpForm extends Component {
  render() {
    return (
      <SignUp>
        <fieldset>
          <input type="email" placeholder="Email" />
        </fieldset>
        <fieldset>
          <input type="text" placeholder="Username" />
        </fieldset>
        <fieldset>
          <input type="password" placeholder="Create Password" />
        </fieldset>
        <button className="SignUpForm__button" type="submit">
          "Sign Up"
        </button>
      </SignUp>
    );
  }
}
