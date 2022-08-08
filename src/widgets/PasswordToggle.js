import { Component } from "react";

export default class PasswordToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      passowrd: "",
    };

    this.toggleShow = this.toggleShow.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          type={this.state.hidden ? "password" : "text"}
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <button onClick={this.toggleShow}>Show / Hide</button>
      </div>
    );
  }
}
