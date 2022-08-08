import { Component } from "react";

export default class ClockWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.updateClock(), 1000;
    });
  }

  updateClock() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  render() {
    return (
      <div className="Time">
        <h1>Time</h1>

        <h3>{this.state.time}</h3>
      </div>
    );
  }
}
