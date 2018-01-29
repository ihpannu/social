import React, { Component } from "react";
import styled from "styled-components";

const SignUp = styled.form`
  background: #fefffe;
  padding: 2em;
  // border: 1px solid #cac9ca;
  border-radius: 5px;
  lineheight: 1.2;
  transition: 300ms all ease-in-out;
  box-shadow: 1px 1px 50px #cac9ca;
  input {
    width: 100%;
    padding: 1.5em 5em;
    margin: 20px 0;
    border: none;
    border-radius: 3px;
    outline: none;
    box-shadow: 1px 1px 10px #cac9ca;
    cursor: pointer;
  }
  input:focus {
    transition: 300ms all ease-in-out;
    box-shadow: 1px 1px 10px #2b9388;
    background: #f8f9f8;
  }

  button {
    font-size: 1em;
    color: #fff;
    background: #2b9388;
    width: 100%;
    padding: 0.8em 5em;
    margin: 20px 0;
    border: none;
    border-radius: 3px;
    text-transform: uppercase;
    outline: none;
    box-shadow: 1px 1px 10px #2b9388;
    cursor: pointer;
  }
  button:hover {
    box-shadow: 1px 1px 15px #2b9388;
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
          Sign Up
        </button>
      </SignUp>
    );
  }
}
