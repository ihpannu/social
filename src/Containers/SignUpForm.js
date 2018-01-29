import React, { Component } from "react";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }
  function Input () {
    return (
      <div className="Input">
        <input
          id={this.props.name}
          autocomplete="false"
          required
          type={this.props.type}
          placeholder={this.props.placeholder}
        />
        <label for={this.props.name} />
      </div>
    );
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit} className="ModalForm">
        <Input id="name" type="text" placeholder="Jack-Edward Oliver" />
        <Input id="username" type="email" placeholder="mrjackolai@gmail.com" />
        <Input id="password" type="password" placeholder="password" />
        <button>
          Log in <i className="fa fa-fw fa-chevron-right" />
        </button>
      </form>
    );
  }
}
