/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  styles = {
    fontSize: 30
    //borderRadius: 30
  };
  render() {
    return (
      <React.Fragment>
        
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          style={{ background: "blue", fontSize: 30 }}
          onClick={this.handleIncrement}
          className="btn btn-secondary m-2 btn-sm"
        >
          +
        </button>
        <button
          style={{ background: "green", fontSize: 30 }}
          className="btn btn-secondary btn-sm m-2"
          onClick={this.handleDecrement}
        >
          -
        </button>
        <br/>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "danger" : "primary";
    return classes;
  }

  formatCount() {
    if (this.state.count === 0) {
      return this.state.count;
    } else {
      return this.state.count;
    }
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    if (this.state.count === 0) {
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };
}

export default Counter;
