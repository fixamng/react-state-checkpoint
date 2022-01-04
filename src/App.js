import React, { Component } from "react";
import Profile from "./component/Profile.js";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  toggle = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        {this.state.show ? <Profile /> : <h2>CLICK FOR MAGIC</h2>}
        <button onClick={() => this.toggle()}>CLICK FOR A SURPRISE</button>
      </div>
    );
  }
}
